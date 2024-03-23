from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication

from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth import authenticate, logout

from .models import User
from intern.models import Intern


class GoogleLoginView(APIView):
    '''
    Description: This class is used to authenticate the user with Google ID
    '''
    # permission_classes = [AllowAny]

    def post(self, request):
        if 'google_id' not in request.data:
            return Response({'message': 'Invalid request, Please provide Google ID'}, status=status.HTTP_400_BAD_REQUEST)
        
        user, created = User.objects.get_or_create(google_id=request.data['google_id'])

        if created:
            # The user did not exist and was created. Here you can set any additional fields you need.
            user.email = request.data.get('email', '')
            user.save()

        return Response({'user_id': user.pk, 'user_type': user.user_type, 'email': user.email}, status=status.HTTP_200_OK)

class LoginView(APIView):
    '''
    Description: This class is used to authenticate the user
    '''
    permission_classes = []

    def post(self, request):
        if 'google_id' in request.data:
            try:
                user = User.objects.get(google_id=request.data['google_id'])
            except User.DoesNotExist:
                return Response({'message': 'User does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        elif 'email' in request.data and 'password' in request.data:
            user = authenticate(request, username=request.data['email'], password=request.data['password'])
            if user is None:
                return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'Invalid request, Please provide Google ID or credentials'}, status=status.HTTP_400_BAD_REQUEST)

        # Create a refresh token for the authenticated user
        refresh = RefreshToken.for_user(user)

        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user_id': user.pk,
            'user_type': user.user_type,
            'username': user.username
        }, status=status.HTTP_200_OK)

class RegisterView(APIView):
    '''
    Description: This class is used to create a new user
    '''
    permission_classes = []
    
    def post(self, request):
        required_fields = ['firstName', 'secondName', 'email', 'university', 'courseOfStudy', 'phoneNumber', 'idNumber', 'password']
        if not all(field in request.data for field in required_fields):
            return Response({'error': 'Missing required fields in request body'}, status=status.HTTP_400_BAD_REQUEST)

        email = request.data['email']
        idNumber = request.data['idNumber']
        phoneNumber = request.data['phoneNumber']

        if User.objects.filter(email=email).exists() or Intern.objects.filter(id_number=idNumber).exists() or Intern.objects.filter(phone_number=phoneNumber).exists():
            return Response({'error': 'A user with this email, ID, or phone number already exists'}, status=status.HTTP_400_BAD_REQUEST)

        password = request.data['password']
        try:
            validate_password(password)
        except ValidationError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create(
            email=email,
            password=password,
            first_name=request.data['firstName'],
            last_name=request.data['secondName']
        )

        Intern.objects.create(
            user_id=user,
            university=request.data['university'],
            course_of_study=request.data['courseOfStudy'],
            phone_number=phoneNumber,
            id_number=idNumber
        )

        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    
class LogoutView(APIView):
    '''
    Description: This class is used to log out the user
    '''
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            logout(request)
            return Response({'message': 'Logged out'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)