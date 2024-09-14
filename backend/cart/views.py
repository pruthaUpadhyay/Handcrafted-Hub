import jwt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Cart
from products.models import Product
from django.conf import settings
from pymongo import MongoClient
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class CartView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self, request):
        token = request.headers.get('Authorization')
        print(f"Received token: {token}")  # Debug print
        if token:
            try:
                token = token.split(' ')[1]  # Remove "Bearer" prefix
                decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
                user_id = decoded_token.get('user_id')
                
                if not user_id:
                    return Response({"error": "Token does not contain user_id"}, status=status.HTTP_401_UNAUTHORIZED)

                client = MongoClient(settings.MONGO_URI)
                db = client[settings.MONGO_DB_NAME]
                cart_collection = db["cart"]

                product_id = request.data.get('product_id')
                quantity = request.data.get('quantity', 1)

                product = db["products"].find_one({"_id": product_id})
                if not product:
                    return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

                cart = cart_collection.find_one({"user_id": user_id})
                if not cart:
                    cart = {"user_id": user_id, "products": []}
                    cart_collection.insert_one(cart)

                cart_collection.update_one(
                    {"user_id": user_id, "products.product_id": product_id},
                    {"$set": {"products.$.quantity": quantity}},
                    upsert=True
                )
                return Response({"message": "Product added to cart"}, status=status.HTTP_200_OK)
            except jwt.ExpiredSignatureError:
                return Response({"error": "Token has expired"}, status=status.HTTP_401_UNAUTHORIZED)
            except jwt.InvalidTokenError:
                return Response({"error": "Invalid token"}, status=status.HTTP_401_UNAUTHORIZED)
            except Exception as e:
                print(f"Unexpected error: {e}")
                return Response({"error": "Internal server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({"error": "Authentication token missing"}, status=status.HTTP_401_UNAUTHORIZED)

        
class FetchCartView(APIView):

    def get(self, request):
        token = request.headers.get('Authorization')
        if token:
            try:
                # Decode JWT to get user ID
                token = token.split(' ')[1]  # Remove "Bearer" prefix
                decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
                user_id = decoded_token['user_id']
                
                # Connect to MongoDB
                client = MongoClient(settings.MONGO_URI)
                db = client[settings.MONGO_DB_NAME]
                cart_collection = db["cart"]

                # Retrieve the user's cart from MongoDB
                cart = cart_collection.find_one({"user_id": user_id})
                
                if not cart or not cart.get("products", []):
                    return Response({"message": "Your cart is empty"}, status=status.HTTP_200_OK)
                
                # Fetch product details for each item in the cart
                products = cart.get("products", [])
                product_collection = db["products"]

                cart_items = []
                for item in products:
                    product = product_collection.find_one({"_id": item["product_id"]})
                    if product:
                        cart_items.append({
                            "product_id": str(product["_id"]),
                            "name": product["name"],
                            "price": product["price"],
                            "quantity": item["quantity"],
                        })

                return Response({"cart_items": cart_items}, status=status.HTTP_200_OK)

            except jwt.ExpiredSignatureError:
                return Response({"error": "Token has expired"}, status=status.HTTP_401_UNAUTHORIZED)
            except jwt.InvalidTokenError:
                return Response({"error": "Invalid token"}, status=status.HTTP_401_UNAUTHORIZED)

        return Response({"error": "Authentication token missing"}, status=status.HTTP_401_UNAUTHORIZED)