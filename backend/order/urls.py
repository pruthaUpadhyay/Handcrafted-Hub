from django.urls import path
from .views import CheckoutView

urlpatterns = [
    path('orders/',CheckoutView.as_view() , name='add-to-cart'),
    
]
