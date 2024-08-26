# order/models.py
from datetime import datetime
from mongoengine import Document, ReferenceField, ListField, DateTimeField, FloatField,BooleanField
from users.models import User
from products.models import Product

class Order(Document):
    user = ReferenceField(User, required=True, reverse_delete_rule='CASCADE')
    products = ListField(ReferenceField(Product))
    total_price = FloatField(required=True)
    date_ordered = DateTimeField(default=datetime.datetime.utcnow)
    is_delivered = BooleanField(default=False)

    def __str__(self):
        return f"Order {self.id} by {self.user.email}"
