from django.urls import path
from .views import (
    SignUpView, LoginView,
    PasswordResetRequestView, PasswordResetView,  user_details
)

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('user-details/', user_details, name='user-details'),
    path('request-password-reset/', PasswordResetRequestView.as_view(), name='request_password_reset'),
    path('reset-password/<str:token>/', PasswordResetView.as_view(), name='reset_password'),
    
]