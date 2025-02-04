from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_pymongo import PyMongo
from flask_dance.contrib.google import make_google_blueprint, google
from flask_dance.contrib.github import make_github_blueprint, github
from flask_login import LoginManager, login_user, logout_user, login_required, UserMixin
import hashlib
import re
from dotenv import load_dotenv
import os

# Import the User model from models.py
from models import User

load_dotenv()  # Load environment variables from .env file

# Initialize Flask app
app = Flask(__name__)
app.secret_key = 'qehq84tr8yqvuegyasgvdhc1984791#$%^&*()@#$%^&*(DFGHJKVBNM)'

# MongoDB configuration
app.config['MONGO_URI'] = 'mongodb://localhost:27017/dwebb'  # replace with your database name
mongo = PyMongo(app)

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

@login_manager.user_loader
def load_user(user_id):
    return User.get_by_id(mongo, user_id)

# Routes
@app.route('/')
def index0():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    msg = ''
    if request.method == 'POST':
        username, password = request.form['username'], request.form['password']
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        account = mongo.db.accounts.find_one({'username': username, 'password': hashed_password})
        if account:
            session['loggedin'], session['id'], session['username'] = True, account['_id'], account['username']
            login_user(User(account['_id'], account['username'], account['email']))
            return render_template('index.html', msg=msg)
        msg = 'Incorrect username/password!'
    return render_template('login.html', msg=msg)

@app.route('/google_login')
def google_login():
    if not google.authorized:
        return redirect(url_for('google.login'))
    google_info = google.get('/plus/v1/people/me').json()
    user = User.get_by_provider_id('google', google_info['id'])
    if not user:
        User.create(mongo, google_info['displayName'], google_info['emails'][0]['value'], 'google', google_info['id'])
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
        User.create(mongo, user_data['login'], user_data['email'], 'github', user_data['id'])
        user = User.get_by_provider_id('github', user_data['id'])
    login_user(user)
    return redirect(url_for('index'))

@app.route('/logout')
def logout():
    session.clear()
    logout_user()
    return redirect(url_for('index0'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    msg = ''
    if request.method == 'POST':
        username, password, email = request.form['username'], request.form['password'], request.form['email']
        existing_user = mongo.db.accounts.find_one({'username': username})
        if existing_user:
            msg = 'Account already exists!'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email) or not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Invalid email/username!'
        else:
            mongo.db.accounts.insert_one({
                'username': username,
                'password': hashlib.sha256(password.encode()).hexdigest(),
                'email': email
            })
            msg = 'Registration successful!'
    return render_template('register.html', msg=msg)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        program = request.form['program']
        batch = request.form['batch']
        message = request.form['message']

        # Insert data into contacts collection
        mongo.db.contacts.insert_one({
            'name': name,
            'email': email,
            'phone': phone,
            'program': program,
            'batch': batch,
            'message': message
        })

        return redirect(url_for('success'))  # Redirect to success page

    return render_template('contact.html')

# Success route after contact form submission
@app.route('/success')
def success():
    return "Your message has been sent successfully!"

@app.route('/index')
@login_required
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
