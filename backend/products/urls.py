from django.urls import path
from .views import ProductListView, ProductDetailView, get_products, update_product_stock

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<slug:slug>/', ProductDetailView.as_view(), name='product-detail'),
    path('categories/', get_products, name='get_products'),
    path('products/<str:product_id>/update-stock/', update_product_stock, name='update_product_stock'),
   
]
