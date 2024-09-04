from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from pymongo import MongoClient
from bson.objectid import ObjectId
from django.conf import settings
from .serializers import ProductSerializer

# Connect to MongoDB
client = MongoClient(settings.MONGO_URI)
db = client[settings.MONGO_DB_NAME]
product_collection = db["products"]

class ProductListView(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        products = product_collection.find()
        product_list = []
        for product in products:
            product['_id'] = str(product['_id'])  # Convert ObjectId to string for JSON serialization
            product_list.append(product)
        return Response(product_list, status=status.HTTP_200_OK)

class ProductDetailView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, slug):
        product = product_collection.find_one({"slug": slug})
        if product:
            product['_id'] = str(product['_id'])  # Convert ObjectId to string for JSON serialization
            return Response(product, status=status.HTTP_200_OK)
        return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)


class ProductCreateView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            product_data = serializer.validated_data
            product_id = product_collection.insert_one(product_data).inserted_id
            return Response({"message": "Product created", "product_id": str(product_id)}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductUpdateView(APIView):
    def put(self, request, product_id):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            update_result = product_collection.update_one(
                {"_id": ObjectId(product_id)},
                {"$set": serializer.validated_data}
            )
            if update_result.modified_count > 0:
                return Response({"message": "Product updated"}, status=status.HTTP_200_OK)
            return Response({"error": "Product not found or no changes made"}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductDeleteView(APIView):
    def delete(self, request, product_id):
        delete_result = product_collection.delete_one({"_id": ObjectId(product_id)})
        if delete_result.deleted_count > 0:
            return Response({"message": "Product deleted"}, status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)
