from django.conf import settings
from bson.objectid import ObjectId
import datetime
from django.utils.text import slugify

class Product:
    collection = settings.MONGO_PRODUCT_COLLECTION  # Ensure you have this setting in your Django settings

    @staticmethod
    def create_product(name, price, description, image, category, stock, has_sizes, sizes, tags, slug=None):
        # Generate slug if not provided
        if slug is None:
            slug = slugify(name)
        
        product = {
            "name": name,
            "price": price,
            "description": description,
            "image": image,
            "category": category,
            "stock": stock,
            "tags": tags,
            "has_sizes": has_sizes,
            "sizes": sizes,
            "slug": slug,  # Include the slug here
            "created_at": datetime.datetime.utcnow()
        }
        return Product.collection.insert_one(product)

    @staticmethod
    def get_best_sellers():
        return Product.collection.find({"tags": "best_seller"})
    
    @staticmethod
    def get_most_loved():
        return Product.collection.find({"tags": "most_loved"})

    @staticmethod
    def get_product_by_id(product_id):
        return Product.collection.find_one({"_id": ObjectId(product_id)})

    @staticmethod
    def get_product_by_slug(slug):
        return Product.collection.find_one({"slug": slug})

    @staticmethod
    def get_products_by_category(category):
        return Product.collection.find({"category": category})

    @staticmethod
    def update_product(product_id, update_fields):
        return Product.collection.update_one(
            {"_id": ObjectId(product_id)},
            {"$set": update_fields}
        )

    @staticmethod
    def delete_product(product_id):
        return Product.collection.delete_one({"_id": ObjectId(product_id)})

    @staticmethod
    def list_products(limit=10, skip=0):
        return Product.collection.find().skip(skip).limit(limit)
    
    def __str__(self):
        return self.name
    