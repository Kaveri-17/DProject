# from flask import Flask
# from flask_mysqldb import MySQL

# # Initialize Flask app and MySQL
# app = Flask(__name__)
# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'Kaveri@1'
# app.config['MYSQL_DB'] = 'dwebb'

# mysql = MySQL(app)

# # Account Model for 'accounts' table
# class Account:
#     def __init__(self, id, username, password, email):
#         self.id = id
#         self.username = username
#         self.password = password
#         self.email = email

#     @staticmethod
#     def get_account_by_username_and_password(username, password):
#         # SQL query to fetch the account by username and password
#         cur = mysql.connection.cursor()
#         cur.execute("SELECT * FROM accounts WHERE username = %s AND password = %s", (username, password))
#         account = cur.fetchone()
#         cur.close()

#         if account:
#             # Return an Account instance with the database data
#             return Account(id=account[0], username=account[1], password=account[2], email=account[3])
#         return None

#     @staticmethod
#     def create_account(username, password, email):
#         # SQL query to insert a new account
#         cur = mysql.connection.cursor()
#         cur.execute("INSERT INTO accounts (username, password, email) VALUES (%s, %s, %s)", (username, password, email))
#         mysql.connection.commit()
#         cur.close()

# # Contact Model for 'contacts' table
# class Contact:
#     def __init__(self, id, name, email, phone, program, batch, message):
#         self.id = id
#         self.name = name
#         self.email = email
#         self.phone = phone
#         self.program = program
#         self.batch = batch
#         self.message = message

#     @staticmethod
#     def create_contact(name, email, phone, program, batch, message):
#         # SQL query to insert a new contact message
#         cur = mysql.connection.cursor()
#         cur.execute("INSERT INTO contacts (name, email, phone, program, batch, message) VALUES (%s, %s, %s, %s, %s, %s)", 
#                     (name, email, phone, program, batch, message))
#         mysql.connection.commit()
#         cur.close()
