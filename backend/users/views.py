import jwt
from datetime import datetime, timedelta
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.conf import settings
from .serializers import (
    UserSerializer, LoginSerializer,
    PasswordResetRequestSerializer, PasswordResetSerializer
)
from .models import User
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import check_password
from pymongo import MongoClient
from django.conf import settings
    
class SignUpView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        
        if serializer.is_valid():
            username = serializer.validated_data['username']
            email = serializer.validated_data['email']

            response_data = {}

            # Check if the username already exists
            if User.get_user_by_uname(username):
                response_data["username"] = "This username is already taken."

            # Check if the email already exists
            if User.get_user_by_email(email):
                response_data["email"] = "This email is already registered."

            if response_data:
                return Response(response_data, status=status.HTTP_400_BAD_REQUEST)
            # Create the user
            user = User.create_user(
                username=username,
                email=email,
                password=serializer.validated_data['password']
            )
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            # Connect to MongoDB
            client = MongoClient(settings.MONGO_URI)
            db = client[settings.MONGO_DB_NAME]
            user_collection = db["users"]

            # Retrieve the user from MongoDB
            user = user_collection.find_one({"email": email})

            if user and check_password(password, user['password']):
                # If the user exists and the password matches
                # Only create an access token, no refresh token
                access_token_expiry = datetime.utcnow() + timedelta(hours=1)  # Extend expiry time

                access_token = jwt.encode({
                    'user_id': str(user['_id']),
                    'exp': access_token_expiry
                }, settings.SECRET_KEY, algorithm='HS256')

                return Response({
                    "access": access_token,
                }, status=status.HTTP_200_OK)
            
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PasswordResetRequestView(APIView):
    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            token = User.set_password_reset_token(email)
            if token:
                reset_link = f"http://localhost:8000/api/users/reset-password/{token}"
                send_mail(
                    'Reset your password',
                    f'Click the link to reset your password: {reset_link}',
                    settings.EMAIL_HOST_USER,
                    [email],
                    fail_silently=False,
                )
                return Response({"message": "Password reset link sent"}, status=status.HTTP_200_OK)
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PasswordResetView(APIView):
    def post(self, request, token):
        serializer = PasswordResetSerializer(data=request.data)
        if serializer.is_valid():
            user = User.reset_password(token, serializer.validated_data['new_password'])
            if user:
                return Response({"message": "Password reset successfully"}, status=status.HTTP_200_OK)
            return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)