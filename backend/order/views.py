from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from bson.objectid import ObjectId
from cart.models import Cart
from .models import Order
from rest_framework.permissions import AllowAny

class CheckoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_id = request.data.get('user_id')
        shipping_address = request.data.get('shipping_address')
        total = request.data.get('total')

        if not user_id or not shipping_address or not total:
            return Response(
                {"error": "User ID, shipping address, and total are required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            user_id = ObjectId(user_id)
        except Exception:
            return Response(
                {"error": "Invalid User ID format"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Retrieve the cart document
            cart = Cart.get_cart_by_user(user_id)
            if not cart:
                return Response(
                    {"error": "Cart not found"},
                    status=status.HTTP_404_NOT_FOUND
                )
            # Ensure cart_items is a list
            cart_items = cart.get("products", [])
        except Exception as e:
            return Response(
                {"error": f"Error retrieving cart: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        try:
            result = Order.create_order(user_id, total, shipping_address, cart_items)
            if result.acknowledged:
                # Cart.clear_cart(user_id)
                return Response(
                    {"message": "Order placed successfully"},
                    status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {"error": "Failed to place order"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        except Exception as e:
            return Response(
                {"error": f"Error creating order: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
