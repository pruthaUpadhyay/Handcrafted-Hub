# product/models.py
from datetime import datetime
from mongoengine import Document, StringField, FloatField, IntField, DateTimeField, ListField

class Product(Document):
    name = StringField(max_length=200, required=True)
    description = StringField()
    price = FloatField(required=True)
    stock = IntField(default=0)
    categories = ListField(StringField(max_length=50))  # Example of array field
    date_added = DateTimeField(default=datetime.utcnow)

    def __str__(self):
        return self.name
