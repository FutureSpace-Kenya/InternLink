from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.hashers import check_password

from .models import User

class GoogleLoginView(APIView):
    '''
    Description: This class is used to authenticate the user with Google ID
    '''
    def post(self, request):
        if 'google_id' not in request.data:
            return Response({'message': 'Invalid request, Please provide Google ID'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = User.objects.get(google_id=request.data['google_id'])
        except User.DoesNotExist:
            return Response({'message': 'User does not exist'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'user_id': user.pk, 'user_type': user.user_type, 'username': user.user_name}, status=status.HTTP_200_OK)

class LoginView(APIView):
    '''
    Description: This class is used to authenticate the user
    '''
    def post(self, request):
        if 'google_id' in request.data:
            try:
                user = User.objects.get(google_id=request.data['google_id'])
            except User.DoesNotExist:
                return Response({'message': 'User does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        elif 'username' in request.data and 'password' in request.data:
            try:
                user = User.objects.get(user_name=request.data['username'])
            except User.DoesNotExist:
                return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

            if not check_password(request.data['password'], user.password):
                return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'Invalid request, Please provide Google ID or credentials'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'user_id': user.pk, 'user_type': user.user_type, 'username': user.user_name}, status=status.HTTP_200_OK)

class RegisterView(APIView):
    '''
    Description: This class is used to register the user
    '''
    def post(self, request):
        if 'username' not in request.data or 'password' not in request.data:
            return Response({'message': 'Invalid request, Please provide credentials'}, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(user_name=request.data['username']).exists():
            return Response({'message': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        user = User(
            user_name=request.data['username'],
            password=request.data['password'],
            # Add other fields here
        )
        user.save()

        return Response({'user_id': user.pk, 'user_type': user.user_type}, status=status.HTTP_201_CREATED)