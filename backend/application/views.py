from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.permissions import IsAuthenticated
# from rest_framework_simplejwt.authentication import JWTAuthentication

from .serializers import ApplicationSerializer
from .models import Application

class ApplicationListView(APIView):
    '''
    Description: This class is used to get all Applications and create a new Application
    '''
    permission_classes = []

    def get(self, request):
        Applications = Application.objects.all()
        serializer = ApplicationSerializer(Applications, many=True)
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
    permission_classes = []
    
    def get(self, request, pk=None):
        Application = get_object_or_404(Application, pk=pk)
        serializer = ApplicationSerializer(Application)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk=None):
        Application = get_object_or_404(Application, pk=pk)
        serializer = ApplicationSerializer(Application, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        Application = get_object_or_404(Application, pk=pk)
        Application.delete()
        return Response("Application deleted!", status=status.HTTP_204_NO_CONTENT)