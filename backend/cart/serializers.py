from rest_framework import serializers

class CartSerializer(serializers.Serializer):
    cart_item_id = serializers.CharField(read_only=True)
    user_id = serializers.CharField()  # User ID should come from the request/user context in views
    product_id = serializers.CharField()  # Product ID will be passed from frontend
    quantity = serializers.IntegerField(min_value=1)  # Must be at least 1
    added_at = serializers.DateTimeField(read_only=True)  # Automatically set during addition to cart

    def create(self, validated_data):
        """Creates a new cart item."""
        from .models import Cart  # Importing here to avoid circular imports
        return Cart.add_to_cart(validated_data['user_id'], validated_data['product_id'], validated_data['quantity'])

    def update(self, instance, validated_data):
        """Updates a cart item."""
        from .models import Cart  # Importing here to avoid circular imports
        update_fields = {
            "quantity": validated_data['quantity']
        }
        Cart.update_cart_item(instance['_id'], update_fields)
        return Cart.get_cart_item(instance['_id'])
