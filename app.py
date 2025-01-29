from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_mysqldb import MySQL
from flask_dance.contrib.google import make_google_blueprint, google
from flask_dance.contrib.github import make_github_blueprint, github
from flask_login import LoginManager, login_user, logout_user, login_required, UserMixin
import hashlib
import re

# Initialize Flask app
app = Flask(__name__)
app.secret_key = 'qehq84tr8yqvuegyasgvdhc1984791#$%^&*()@#$%^&*(DFGHJKVBNM)'

# Database configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Kaveri@1'
app.config['MYSQL_DB'] = 'dwebb'

# Initialize MySQL
mysql = MySQL(app)

# Initialize LoginManager
login_manager = LoginManager(app)
login_manager.login_view = 'login'

# Setup OAuth for Google
google_bp = make_google_blueprint(client_id='GOOGLE_CLIENT_ID',
                                  client_secret='GOOGLE_CLIENT_SECRET',
                                  redirect_to='google_login')
app.register_blueprint(google_bp, url_prefix='/google_login')

# Setup OAuth for GitHub
github_bp = make_github_blueprint(client_id='GITHUB_CLIENT_ID',
                                   client_secret='GITHUB_CLIENT_SECRET',
                                   redirect_to='github_login')
app.register_blueprint(github_bp, url_prefix='/github_login')

# Ensure database connectivity
@app.before_request
def check_database_connection():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT 1')
        cur.close()
        print(f"Connected to {app.config['MYSQL_DB']} successfully!")
    except Exception as e:
        print(f"Database connection error: {e}")


# User model
class User(UserMixin):
    def __init__(self, id, username, email, provider=None, provider_id=None):
        self.id = id
        self.username = username
        self.email = email
        self.provider = provider
        self.provider_id = provider_id

    @classmethod
    def get_by_provider_id(cls, provider, provider_id):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM accounts WHERE provider = %s AND provider_id = %s", (provider, provider_id))
        user_data = cur.fetchone()
        cur.close()
        return cls(*user_data) if user_data else None

    @classmethod
    def get_by_id(cls, user_id):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM accounts WHERE id = %s", (user_id,))
        user_data = cur.fetchone()
        cur.close()
        return cls(*user_data) if user_data else None

    @classmethod
    def create(cls, username, email, provider, provider_id):
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO accounts (username, email, provider, provider_id) VALUES (%s, %s, %s, %s)",
                    (username, email, provider, provider_id))
        mysql.connection.commit()
        cur.close()

@login_manager.user_loader
def load_user(user_id):
    return User.get_by_id(user_id)

# Routes
@app.route('/')
@app.route('/login', methods=['GET', 'POST'])
def login():
    msg = ''
    if request.method == 'POST':
        username, password = request.form['username'], request.form['password']
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM accounts WHERE username = %s", (username,))
        account = cur.fetchone()
        cur.close()
        if account and account[2] == hashed_password:
            session['loggedin'], session['id'], session['username'] = True, account[0], account[1]
            login_user(User(account[0], account[1], account[3]))
            return redirect(url_for('index'))
        msg = 'Incorrect username/password!'
    return render_template('login.html', msg=msg)

@app.route('/google_login')
def google_login():
    if not google.authorized:
        return redirect(url_for('google.login'))
    google_info = google.get('/plus/v1/people/me').json()
    user = User.get_by_provider_id('google', google_info['id'])
    if not user:
        User.create(google_info['displayName'], google_info['emails'][0]['value'], 'google', google_info['id'])
        user = User.get_by_provider_id('google', google_info['id'])
    login_user(user)
    return redirect(url_for('index'))

@app.route('/github_login')
def github_login():
    if not github.authorized:
        return redirect(url_for('github.login'))
    user_data = github.get('/user').json()
    user = User.get_by_provider_id('github', user_data['id'])
    if not user:
        User.create(user_data['login'], user_data['email'], 'github', user_data['id'])
        user = User.get_by_provider_id('github', user_data['id'])
    login_user(user)
    return redirect(url_for('index'))

@app.route('/logout')
def logout():
    session.clear()
    logout_user()
    return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    msg = ''
    if request.method == 'POST':
        username, password, email = request.form['username'], request.form['password'], request.form['email']
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM accounts WHERE username = %s", (username,))
        if cur.fetchone():
            msg = 'Account already exists!'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email) or not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Invalid email/username!'
        else:
            cur.execute("INSERT INTO accounts (username, password, email) VALUES (%s, %s, %s)",
                        (username, hashlib.sha256(password.encode()).hexdigest(), email))
            mysql.connection.commit()
            msg = 'Registration successful!'
        cur.close()
    return render_template('register.html', msg=msg)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        try:
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO contacts (name, email, phone, program, batch, message) VALUES (%s, %s, %s, %s, %s, %s)",
                        (request.form['name'], request.form['email'], request.form['phone'],
                         request.form['program'], request.form['batch'], request.form['message']))
            mysql.connection.commit()
            cur.close()
            flash("Message sent successfully!", "success")
        except Exception as e:
            flash(f"Error: {str(e)}", "danger")
    return render_template('contact.html')

@app.route('/index')
@login_required
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
