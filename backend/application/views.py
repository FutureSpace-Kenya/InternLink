from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from .serializers import ApplicationSerializer
from .models import Application

class ApplicationListView(APIView):
    '''
    Description: This class is used to get all Applications and create a new Application
    '''
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        applications = Application.objects.all()
        serializer = ApplicationSerializer(applications, many=True)
        return Response({"Applications": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ApplicationView(APIView):
    '''
    Description: This class is used to get one Application, and update an existing Application and delete an Application
    '''
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, pk=None):
        application = get_object_or_404(Application, pk=pk)
        serializer = ApplicationSerializer(application)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk=None):
        application = get_object_or_404(Application, pk=pk)
        serializer = ApplicationSerializer(application, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        application = get_object_or_404(Application, pk=pk)
        application.delete()
        return Response("Application deleted!", status=status.HTTP_204_NO_CONTENT)