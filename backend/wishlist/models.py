from django.conf import settings
from pymongo import MongoClient
from bson import ObjectId

client = MongoClient(settings.MONGO_URI)
db = client[settings.MONGO_DB_NAME]

class Wishlist:
    collection = db["wishlists"]

    @staticmethod
    def add_to_wishlist(user_id, product_id, product_name):
        try:
            wishlist = Wishlist.collection.find_one({"user_id": ObjectId(user_id)})
            if wishlist:
                Wishlist.collection.update_one(
                    {"user_id": ObjectId(user_id)},
                    {"$addToSet": {"products": {"product_id": ObjectId(product_id), "product_name": product_name}}}  # Add product and name
                )
            else:
                Wishlist.collection.insert_one({
                    "user_id": ObjectId(user_id),
                    "products": [{"product_id": ObjectId(product_id), "product_name": product_name}]
                })
            return True
        except Exception as e:
            raise Exception(f"Error adding to wishlist: {str(e)}")

    @staticmethod
    def remove_from_wishlist(user_id, product_id):
        try:
            Wishlist.collection.update_one(
                {"user_id": ObjectId(user_id)},
                {"$pull": {"products": {"product_id": ObjectId(product_id)}}}
            )
            return True
        except Exception as e:
            raise Exception(f"Error removing from wishlist: {str(e)}")

    @staticmethod
    def get_wishlist(user_id):
        try:
            wishlist = Wishlist.collection.find_one({"user_id": ObjectId(user_id)})
            return wishlist.get("products", []) if wishlist else []
        except Exception as e:
            raise Exception(f"Error retrieving wishlist: {str(e)}")
