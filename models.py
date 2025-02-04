from flask_pymongo import PyMongo
from flask_login import UserMixin

# User model
class User(UserMixin):
    def __init__(self, id, username, email, provider=None, provider_id=None):
        self.id = id
        self.username = username
        self.email = email
        self.provider = provider
        self.provider_id = provider_id

    @classmethod
    def get_by_provider_id(cls, mongo, provider, provider_id):
        user_data = mongo.db.accounts.find_one({'provider': provider, 'provider_id': provider_id})
        return cls(user_data['_id'], user_data['username'], user_data['email']) if user_data else None

    @classmethod
    def get_by_id(cls, mongo, user_id):
        user_data = mongo.db.accounts.find_one({'_id': user_id})
        return cls(user_data['_id'], user_data['username'], user_data['email']) if user_data else None

    @classmethod
    def create(cls, mongo, username, email, provider, provider_id):
        mongo.db.accounts.insert_one({'username': username, 'email': email, 'provider': provider, 'provider_id': provider_id})
