from django.conf import settings
from django.contrib.auth.hashers import make_password, check_password
from bson.objectid import ObjectId
import datetime
import uuid


class User:
    collection = settings.MONGO_USER_COLLECTION

    @staticmethod
    def create_user(username, email, password):
        hashed_password = make_password(password)
        user = {
            "username": username,
            "email": email,
            "password": hashed_password,
            "password_reset_token": None,
            "created_at": datetime.datetime.utcnow(),
        }
        return User.collection.insert_one(user)

    @staticmethod
    def get_user_by_email(email):
        return User.collection.find_one({"email": email})
    
    @staticmethod
    def get_user_by_uname(username):
        return User.collection.find_one({"username": username})

    @staticmethod
    def get_user_by_id(user_id):
        return User.collection.find_one({"_id": ObjectId(user_id)})

    @staticmethod
    def authenticate(email, password):
        user = User.get_user_by_email(email)
        if user and check_password(password, user["password"]):
            return user
        return None

    @staticmethod
    def activate_user(token):
        user = User.collection.find_one({"email_verification_token": token})
        if user:
            User.collection.update_one(
                {"_id": user["_id"]},
                {"$set": {"is_active": True}, "$unset": {"email_verification_token": ""}}
            )
            return user
        return None

    @staticmethod
    def set_password_reset_token(email):
        token = str(uuid.uuid4())
        User.collection.update_one(
            {"email": email},
            {"$set": {"password_reset_token": token}}
        )
        return token

    @staticmethod
    def reset_password(token, new_password):
        hashed_password = make_password(new_password)
        user = User.collection.find_one({"password_reset_token": token})
        if user:
            User.collection.update_one(
                {"_id": user["_id"]},
                {"$set": {"password": hashed_password}, "$unset": {"password_reset_token": ""}}
            )
            return user
        return None
