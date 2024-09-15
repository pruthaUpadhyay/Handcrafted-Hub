from django.urls import path
from . import views

urlpatterns = [
    path('wishlist/add/', views.add_to_wishlist, name='add_to_wishlist'),
    path('wishlist/remove/', views.remove_from_wishlist, name='remove_from_wishlist'),
    path('wishlist/<str:user_id>/', views.get_wishlist, name='get_wishlist'),
]
