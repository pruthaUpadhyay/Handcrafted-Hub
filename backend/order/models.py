import datetime
from pymongo import MongoClient
from django.conf import settings
from bson.objectid import ObjectId

client = MongoClient(settings.MONGO_URI)
db = client[settings.MONGO_DB_NAME]
order_collection = db["orders"]

class Order:
    collection = order_collection

    @staticmethod
    def create_order(user_id, total, shipping_address, cart_items, is_paid=False):
        order_data = {
            "user_id": ObjectId(user_id),
            "total": total,
            "shipping_address": shipping_address,
            "created_at": datetime.datetime.now(),
            "items": cart_items,
            "isPaid": is_paid  # Payment status
        }
        return Order.collection.insert_one(order_data)

    @staticmethod
    def get_order(order_id):
        return Order.collection.find_one({"_id": ObjectId(order_id)})

    @staticmethod
    def list_orders_by_user(user_id):
    # MongoDB's find() returns a cursor, convert it to a list
        return list(Order.collection.find({"user_id": ObjectId(user_id)}))


    @staticmethod
    def mark_order_paid(order_id):
        return Order.collection.update_one(
            {"_id": ObjectId(order_id)},
            {"$set": {"isPaid": True}}
        )
