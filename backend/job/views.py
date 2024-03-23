from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.permissions import IsAuthenticated
# from rest_framework_simplejwt.authentication import JWTAuthentication

from .serializers import JobSerializer
from .models import Job

class JobListView(APIView):
    '''
    Description: This class is used to get all Jobs and create a new Job
    '''
    permission_classes = []

    def get(self, request):
        Jobs = Job.objects.all()
        serializer = JobSerializer(Jobs, many=True)
        return Response({"Jobs": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class JobView(APIView):
    '''
    Description: This class is used to get one Job, and update an existing Job and delete an Job
    '''
    permission_classes = []
    
    def get(self, request, pk=None):
        Job = get_object_or_404(Job, pk=pk)
        serializer = JobSerializer(Job)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk=None):
        Job = get_object_or_404(Job, pk=pk)
        serializer = JobSerializer(Job, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        Job = get_object_or_404(Job, pk=pk)
        Job.delete()
        return Response("Job deleted!", status=status.HTTP_204_NO_CONTENT)