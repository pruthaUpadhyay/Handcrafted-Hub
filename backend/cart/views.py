from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from bson.objectid import ObjectId
from pymongo import MongoClient
from django.contrib.auth.decorators import login_required
from core import settings
from .models import Cart
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
@require_http_methods(["GET"])
def get_cart(request):
    user_id = request.user.id  # Assumes you have user authentication in place
    cart_items = Cart.get_cart_by_user(user_id)
    cart_list = list(cart_items)
    
    # Convert the MongoDB objects to JSON serializable format
    for item in cart_list:
        item['_id'] = str(item['_id'])
        item['product_id'] = str(item['product_id'])
    
    return JsonResponse(cart_list, safe=False)


@csrf_exempt
@require_http_methods(["POST"])
# def add_to_cart(request, product_id):
#     user_id = request.user.id
#     quantity = request.POST.get('quantity', 1)
    
#     # Add the product to the cart
#     Cart.add_to_cart(user_id, product_id, quantity)
    
#     return JsonResponse({"message": "Product added to cart"}, status=201)
# def add_to_cart(request, product_id):
#     user_id = request.user.id  # Get the logged-in user's ID
    
#     # Ensure quantity is an integer and greater than 0
#     try:
#         quantity = int(request.POST.get('quantity', 1))
#         if quantity < 1:
#             raise ValueError("Quantity must be at least 1")
#     except (ValueError, TypeError):
#         return JsonResponse({"error": "Invalid quantity"}, status=400)
    
#     # Add the product to the cart
#     Cart.add_to_cart(user_id, product_id, quantity)
    
#     return JsonResponse({"message": "Product added to cart"}, status=201)
@login_required(login_url='/login/')
def add_to_cart(request, product_id):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "You must be logged in to add items to the cart"}, status=403)
    
    user_id = request.user.id
    try:
        quantity = int(request.POST.get('quantity', 1))
        if quantity < 1:
            raise ValueError("Quantity must be at least 1")
    except (ValueError, TypeError):
        return JsonResponse({"error": "Invalid quantity"}, status=400)
    
    Cart.add_to_cart(user_id, product_id, quantity)
    return JsonResponse({"message": "Product added to cart"}, status=201)

@csrf_exempt
@require_http_methods(["PUT"])
def update_cart_item(request, cart_item_id):
    quantity = request.POST.get('quantity')
    
    # Update the quantity of the cart item
    Cart.update_cart_item(cart_item_id, {'quantity': quantity})
    
    return JsonResponse({"message": "Cart item updated"})

@csrf_exempt
@require_http_methods(["DELETE"])
def remove_from_cart(request, cart_item_id):
    Cart.remove_from_cart(cart_item_id)
    
    return JsonResponse({"message": "Cart item removed"})

@csrf_exempt
@require_http_methods(["DELETE"])
def clear_cart(request):
    user_id = request.user.id
    Cart.clear_cart(user_id)
    
    return JsonResponse({"message": "Cart cleared"})
