from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.hashers import check_password
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

from .models import User
from intern.models import Intern

class GoogleLoginView(APIView):
    '''
    Description: This class is used to authenticate the user with Google ID
    '''
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
    def post(self, request):
        if 'google_id' in request.data:
            try:
                user = User.objects.get(google_id=request.data['google_id'])
            except User.DoesNotExist:
                return Response({'message': 'User does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        elif 'email' in request.data and 'password' in request.data:
            try:
                user = User.objects.get(email=request.data['email'])
            except User.DoesNotExist:
                return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

            if not check_password(request.data['password'], user.password):
                return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'Invalid request, Please provide Google ID or credentials'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'user_id': user.pk, 'user_type': user.user_type, 'username': user.user_name}, status=status.HTTP_200_OK)

class RegisterView(APIView):
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