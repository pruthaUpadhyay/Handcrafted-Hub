from django.urls import path
from .views import ProductListView, ProductDetailView, get_products,search_products

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<slug:slug>/', ProductDetailView.as_view(), name='product-detail'),
    path('categories/', get_products, name='get_products'),
   
]
