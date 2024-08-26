from django.shortcuts import render
from django.views import View

class CartView(View):
    def get(self, request):
        # Your logic for the cart view
        return render(request, 'cart.html')

class WishlistView(View):
    def get(self, request):
        # Your logic for the wishlist view
        return render(request, 'wishlist.html')
