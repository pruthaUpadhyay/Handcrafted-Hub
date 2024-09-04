from django.conf import settings
from bson.objectid import ObjectId
import datetime

class Cart:
    collection = settings.MONGO_CART_COLLECTION  # Ensure you have this setting in your Django settings

    @staticmethod
    def add_to_cart(user_id, product_id, quantity=1):
        cart_item = {
            "user_id": ObjectId(user_id),
            "product_id": ObjectId(product_id),
            "quantity": quantity,
            "added_at": datetime.datetime.utcnow()
        }
        return Cart.collection.insert_one(cart_item)

    @staticmethod
    def get_cart_by_user(user_id):
        return Cart.collection.find({"user_id": ObjectId(user_id)})

    @staticmethod
    def update_cart_item(cart_item_id, update_fields):
        return Cart.collection.update_one(
            {"_id": ObjectId(cart_item_id)},
            {"$set": update_fields}
        )

    @staticmethod
    def remove_from_cart(cart_item_id):
        return Cart.collection.delete_one({"_id": ObjectId(cart_item_id)})

    @staticmethod
    def clear_cart(user_id):
        return Cart.collection.delete_many({"user_id": ObjectId(user_id)})

    @staticmethod
    def get_cart_item(cart_item_id):
        return Cart.collection.find_one({"_id": ObjectId(cart_item_id)})

    @staticmethod
    def list_cart_items(user_id):
        return Cart.collection.find({"user_id": ObjectId(user_id)})
