from flask_pymongo import PyMongo
from flask_login import UserMixin
from bson.objectid import ObjectId

# Initialize MongoDB (This will be set up in your main Flask app)
mongo = None  # This will be assigned in the app setup

class User(UserMixin):
    def __init__(self, id, username, email, provider=None, provider_id=None):
        self.id = str(id)
        self.username = username
        self.email = email
        self.provider = provider
        self.provider_id = provider_id

    @classmethod
    def get_by_provider_id(cls, provider, provider_id):
        user_data = mongo.db.accounts.find_one({'provider': provider, 'provider_id': provider_id})
        if user_data:
            return cls(user_data['_id'], user_data['username'], user_data['email'], provider, provider_id)
        return None

    @classmethod
    def get_by_id(cls, user_id):
        user_data = mongo.db.accounts.find_one({'_id': ObjectId(user_id)})
        if user_data:
            return cls(user_data['_id'], user_data['username'], user_data['email'], user_data.get('provider'), user_data.get('provider_id'))
        return None

    @classmethod
    def create(cls, username, email, password=None, provider=None, provider_id=None):
        user_data = {
            'username': username,
            'email': email,
            'provider': provider,
            'provider_id': provider_id
        }
        if password:
            from hashlib import sha256
            user_data['password'] = sha256(password.encode()).hexdigest()
        
        mongo.db.accounts.insert_one(user_data)
        return cls.get_by_provider_id(provider, provider_id) if provider else cls.get_by_id(user_data['_id'])

    @classmethod
    def get_by_username(cls, username):
        user_data = mongo.db.accounts.find_one({'username': username})
        if user_data:
            return cls(user_data['_id'], user_data['username'], user_data['email'], user_data.get('provider'), user_data.get('provider_id'))
        return None
