# from bson import ObjectId
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from pymongo import MongoClient
# from django.conf import settings
# from rest_framework.permissions import AllowAny

# from bson import ObjectId
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from pymongo import MongoClient
# from django.conf import settings
# from rest_framework.permissions import AllowAny

# class CartView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         product_id = request.data.get('product_id')
#         quantity = request.data.get('quantity', 1)
#         user_id = request.data.get('user_id')

#         if not product_id or not user_id:
#             return Response({"error": "Product ID and user ID are required"}, status=status.HTTP_400_BAD_REQUEST)

#         # Connect to MongoDB
#         client = MongoClient(settings.MONGO_URI)
#         db = client[settings.MONGO_DB_NAME]
#         cart_collection = db["carts"]
#         product_collection = db["products"]

#         # Convert product_id and user_id to ObjectId
#         try:
#             product_id = ObjectId(product_id)
#             user_id = ObjectId(user_id)
#         except Exception as e:
#             return Response({"error": "Invalid ID format"}, status=status.HTTP_400_BAD_REQUEST)

#         # Check if the product exists
#         product = product_collection.find_one({"_id": product_id})
#         if not product:
#             return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

#         # Retrieve or create a cart for the user
#         cart = cart_collection.find_one({"user_id": user_id})
#         if not cart:
#             cart = {"user_id": user_id, "products": []}
#             cart_collection.insert_one(cart)

#         # Update or add the product in the cart
#         result = cart_collection.update_one(
#             {"user_id": user_id, "products.product_id": product_id},
#             {"$set": {"products.$.quantity": quantity}},
#             upsert=False
#         )

#         if result.matched_count == 0:
#             # Product was not found in the cart, add it
#             cart_collection.update_one(
#                 {"user_id": user_id},
#                 {"$push": {"products": {"product_id": product_id, "quantity": quantity}}},
#                 upsert=True
#             )

#         return Response({"message": "Product added to cart"}, status=status.HTTP_200_OK)



# class FetchCartView(APIView):
#     def get(self, request):
#         user_id = request.GET.get('user_id')  # Get user_id from query parameters

#         if not user_id:
#             return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)

#         # Connect to MongoDB
#         client = MongoClient(settings.MONGO_URI)
#         db = client[settings.MONGO_DB_NAME]
#         cart_collection = db["cart"]
#         product_collection = db["products"]

#         # Retrieve the user's cart from MongoDB
#         cart = cart_collection.find_one({"user_id": str(user_id)})
        
#         if not cart or not cart.get("products", []):
#             return Response({"message": "Your cart is empty"}, status=status.HTTP_200_OK)
        
#         # Fetch product details for each item in the cart
#         products = cart.get("products", [])
#         cart_items = []
#         for item in products:
#             product = product_collection.find_one({"_id": item["product_id"]})
#             if product:
#                 cart_items.append({
#                     "product_id": str(product["_id"]),
#                     "name": product["name"],
#                     "price": product["price"],
#                     "quantity": item["quantity"],
#                 })

#         return Response({"cart_items": cart_items}, status=status.HTTP_200_OK)
import json
from bson import ObjectId
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from pymongo import MongoClient
from django.conf import settings
from rest_framework.permissions import AllowAny
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt


class CartView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)
        user_id = request.data.get('user_id')
        size = request.data.get('size')

        if not product_id or not user_id:
            return Response({"error": "Product ID and user ID are required"}, status=status.HTTP_400_BAD_REQUEST)

        # Connect to MongoDB
        client = MongoClient(settings.MONGO_URI)
        db = client[settings.MONGO_DB_NAME]
        cart_collection = db["carts"]
        product_collection = db["products"]

        # Convert product_id and user_id to ObjectId
        try:
            product_id = ObjectId(product_id)
            user_id = ObjectId(user_id)
        except Exception as e:
            return Response({"error": "Invalid ID format"}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the product exists
        product = product_collection.find_one({"_id": product_id})
        if not product:
            return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

        # Retrieve or create a cart for the user
        cart = cart_collection.find_one({"user_id": user_id})
        if not cart:
            cart = {"user_id": user_id, "products": []}
            cart_collection.insert_one(cart)

        # Update or add the product in the cart
        result = cart_collection.update_one(
            {"user_id": user_id, "products.product_id": product_id},
            {"$set": {"products.$.quantity": quantity ,"products.$.size" : size}},
            upsert=False
        )

        if result.matched_count == 0:
            # Product was not found in the cart, add it
            cart_collection.update_one(
                {"user_id": user_id},
                {"$push": {"products": {"product_id": product_id, "quantity": quantity}}},
                upsert=True
            )

        return Response({"message": "Product added to cart"}, status=status.HTTP_200_OK)
class FetchCartView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_id = request.data.get('user_id')

        if not user_id:
            return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Connect to MongoDB
        client = MongoClient(settings.MONGO_URI)
        db = client[settings.MONGO_DB_NAME]
        cart_collection = db["carts"]
        product_collection = db["products"]

        # Convert user_id to ObjectId
        try:
            user_id = ObjectId(user_id)
        except Exception:
            return Response({"error": "Invalid User ID format"}, status=status.HTTP_400_BAD_REQUEST)

        # Fetch the user's cart
        cart = cart_collection.find_one({"user_id": user_id})
        if not cart:
            return Response({"cart_items": []}, status=status.HTTP_200_OK)

        cart_items = []
        for item in cart["products"]:
            product_id = item["product_id"]
            quantity = item["quantity"]
            size = item.get("size")

            # Fetch product details from the products collection
            product = product_collection.find_one({"_id": product_id})
            if product:
                # Convert ObjectId fields to strings for JSON serialization
                cart_items.append({
                    "product_id": str(product_id),
                    "product_name": product.get("name", "Unknown Product"),
                    "quantity": quantity,
                    "price": product.get("price", 0),
                    "size": size
                })

        return Response({"cart_items": cart_items}, status=status.HTTP_200_OK)

class UpdateCartItemView(APIView):
    permission_classes = [AllowAny]

    def put(self, request, cart_item_id):
        quantity = request.data.get('quantity')

        if not quantity:
            return Response({"error": "Quantity is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Connect to MongoDB
        client = MongoClient(settings.MONGO_URI)
        db = client[settings.MONGO_DB_NAME]
        cart_collection = db["carts"]

        # Update the cart item quantity
        result = cart_collection.update_one(
            {"products._id": ObjectId(cart_item_id)},
            {"$set": {"products.$.quantity": quantity}}
        )

        if result.modified_count == 0:
            return Response({"error": "Cart item not found"}, status=status.HTTP_404_NOT_FOUND)

        return Response({"message": "Cart item updated"}, status=status.HTTP_200_OK)
    
@csrf_exempt
def remove_from_cart(request, product_id):
    if request.method == "DELETE":
        try:
            # Validate ObjectId
            if not ObjectId.is_valid(product_id):
                return JsonResponse({"error": "Invalid product ID"}, status=400)

            # Get the quantity from the request
            data = json.loads(request.body)  # Parse the body
            quantity = data.get("quantity", 0)  # Quantity removed from cart

            client = MongoClient(settings.MONGO_URI)
            db = client[settings.MONGO_DB_NAME]
            cart_collection = db["carts"]
            product_collection = db["products"]

            # Remove the specific product from the cart
            result = cart_collection.update_one(
                {"products.product_id": ObjectId(product_id)},  # Match the product_id in products
                {"$pull": {"products": {"product_id": ObjectId(product_id)}}}
            )

            if result.modified_count > 0:
                # Increase the stock quantity of the product
                product = product_collection.find_one({"_id": ObjectId(product_id)})
                if product:
                    new_stock = product['stock'] + quantity  # Restore the removed quantity
                    product_collection.update_one(
                        {"_id": ObjectId(product_id)},
                        {"$set": {"stock": new_stock}}
                    )
                return JsonResponse({"message": "Product removed from cart and stock updated successfully"}, status=200)
            else:
                return JsonResponse({"error": "Product not found in the cart"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=400)
class ClearCartView(APIView):
    permission_classes = [AllowAny]

    def delete(self, request):
        user_id = request.data.get('user_id')

        if not user_id:
            return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Convert user_id to ObjectId
        try:
            user_id = ObjectId(user_id)
        except Exception as e:
            return Response({"error": "Invalid User ID format"}, status=status.HTTP_400_BAD_REQUEST)

        # Connect to MongoDB
        client = MongoClient(settings.MONGO_URI)
        db = client[settings.MONGO_DB_NAME]
        cart_collection = db["carts"]

        # Check if the cart exists
        cart = cart_collection.find_one({"user_id": user_id})
        if not cart:
            return Response({"error": "Cart not found"}, status=status.HTTP_404_NOT_FOUND)

        # Clear the user's cart
        result = cart_collection.update_one(
            {"user_id": user_id},
            {"$set": {"products": []}}
        )

        if result.modified_count == 0:
            return Response({"error": "Cart not found or already cleared"}, status=status.HTTP_404_NOT_FOUND)

        return Response({"message": "Cart cleared"}, status=status.HTTP_200_OK)