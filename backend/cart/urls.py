from django.urls import path
from . import views

urlpatterns = [
    # path('cart/', views.get_cart, name='get_cart'),
    # path('cart/add/<str:product_id>/', views.add_to_cart, name='add_to_cart'),
    # path('cart/update/<str:cart_item_id>/', views.update_cart_item, name='update_cart_item'),
    # path('cart/remove/<str:cart_item_id>/', views.remove_from_cart, name='remove_from_cart'),
    # path('cart/clear/', views.clear_cart, name='clear_cart'),
    path('cart/', views.CartView.as_view(), name='cart'),  # GET to list items, POST to add to cart
    path('cart/add/', views.CartView.as_view(), name='remove_cart_item'),  # DELETE to remove item from cart
]
