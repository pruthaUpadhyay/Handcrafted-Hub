from django.conf import settings
from bson.objectid import ObjectId
import datetime

class Wishlist:
    collection = settings.MONGO_WISHLIST_COLLECTION  # Ensure you have this setting in your Django settings

    @staticmethod
    def add_to_wishlist(user_id, product_id):
        wishlist_item = {
            "user_id": ObjectId(user_id),
            "product_id": ObjectId(product_id),
            "added_at": datetime.datetime.utcnow()
        }
        return Wishlist.collection.insert_one(wishlist_item)

    @staticmethod
    def get_wishlist_by_user(user_id):
        return Wishlist.collection.find({"user_id": ObjectId(user_id)})

    @staticmethod
    def remove_from_wishlist(wishlist_item_id):
        return Wishlist.collection.delete_one({"_id": ObjectId(wishlist_item_id)})

    @staticmethod
    def clear_wishlist(user_id):
        return Wishlist.collection.delete_many({"user_id": ObjectId(user_id)})

    @staticmethod
    def get_wishlist_item(wishlist_item_id):
        return Wishlist.collection.find_one({"_id": ObjectId(wishlist_item_id)})

    @staticmethod
    def list_wishlist_items(user_id):
        return Wishlist.collection.find({"user_id": ObjectId(user_id)})
