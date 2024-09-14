# users/middleware/jwt_middleware.py
import jwt
from django.conf import settings
from django.http import JsonResponse

class JWTAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    # def __call__(self, request):
    #     # Skip authentication for specific routes like product list and product details
    #     open_routes = [
    #         '/admin/', 
    #         '/api/users/login/', 
    #         '/api/users/signup/', 
    #         '/products/',  # Add your open routes here
    #         '/products/<slug>/',  # Product details
    #     ]

    #     # Check if the request path matches any open routes
    #     if any(request.path.startswith(route) for route in open_routes):
    #         return self.get_response(request)

    #     # For other routes, enforce JWT token check
    #     token = request.headers.get('Authorization')
    #     print(token)
    #     if token:
    #         token = token.split(' ')[1]  # Extract token part from 'Bearer <token>'
    #         print(token)

    #         try:
    #             payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
    #             request.user_id = payload['user_id']
    #         except jwt.ExpiredSignatureError:
    #             return JsonResponse({'error': 'Token has expired'}, status=401)
    #         except jwt.InvalidTokenError:
    #             return JsonResponse({'error': 'Invalid token'}, status=401)
    #     else:
    #         return JsonResponse({'error': 'Authorization token is missing'}, status=401)

    #     return self.get_response(request)
    def __call__(self, request):
        open_routes = [
            '/admin/', 
            '/api/users/login/', 
            '/api/users/signup/', 
            '/products/',
            '/products/<slug>/',
        ]

        if any(request.path.startswith(route) for route in open_routes):
            return self.get_response(request)

        token = request.headers.get('Authorization')
        if token:
            try:
                token = token.split(' ')[1]  # Extract token part from 'Bearer <token>'
                payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
                request.user_id = payload['user_id']
            except jwt.ExpiredSignatureError:
                return JsonResponse({'error': 'Token has expired'}, status=401)
            except jwt.InvalidTokenError:
                return JsonResponse({'error': 'Invalid token'}, status=401)
        else:
            return JsonResponse({'error': 'Authorization token is missing'}, status=401)

        return self.get_response(request)
