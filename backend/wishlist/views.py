from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Wishlist
import json

@csrf_exempt
def add_to_wishlist(request):
    if request.method == "POST":
        data = json.loads(request.body)
        user_id = data.get("user_id")
        product_id = data.get("product_id")
        product_name = data.get("product_name")  # Get product name from the payload
        
        if user_id and product_id and product_name:
            Wishlist.add_to_wishlist(user_id, product_id, product_name)
            return JsonResponse({"message": "Added to wishlist"}, status=200)
        return JsonResponse({"error": "Invalid data"}, status=400)

@csrf_exempt
def remove_from_wishlist(request):
    if request.method == "DELETE":
        data = json.loads(request.body)
        user_id = data.get("user_id")
        product_id = data.get("product_id")
        
        if user_id and product_id:
            Wishlist.remove_from_wishlist(user_id, product_id)
            return JsonResponse({"message": "Removed from wishlist"}, status=200)
        return JsonResponse({"error": "Invalid data"}, status=400)

def serialize_wishlist(wishlist_items):
    return [
        {
            "product_id": str(item["product_id"]),  # Convert ObjectId to string
            "product_name": item.get("product_name", ""),  # Include product name
        }
        for item in wishlist_items
    ]

def get_wishlist(request, user_id):
    if request.method == "GET":
        try:
            wishlist = Wishlist.get_wishlist(user_id)
            serialized_wishlist = serialize_wishlist(wishlist)
            return JsonResponse({"wishlist": serialized_wishlist}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
