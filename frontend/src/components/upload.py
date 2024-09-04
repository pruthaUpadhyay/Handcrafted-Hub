import json
from django.conf import settings
from pymongo import MongoClient
from django.utils.text import slugify

# Connect to MongoDB
client = MongoClient(settings.MONGO_URI)
db = client[settings.MONGO_DB_NAME]
collection = db[settings.MONGO_PRODUCT_COLLECTION]

def import_data(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
        for item in data:
            if 'slug' not in item:
                item['slug'] = slugify(item['name'])
            collection.insert_one(item)

import_data('data.json')
