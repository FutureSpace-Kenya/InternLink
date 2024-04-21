from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from .serializers import InternSerializer
from .models import Intern

class InternListView(APIView):
    '''
    Description: This class is used to get all Interns and create a new Intern
    '''
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        interns = Intern.objects.all()
        serializer = InternSerializer(interns, many=True)
        return Response({"Interns": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = InternSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class InternView(APIView):
    '''
    Description: This class is used to get one Intern, and update an existing Intern and delete an Intern
    '''
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, pk=None):
        intern = get_object_or_404(Intern, pk=pk)
        serializer = InternSerializer(intern)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk=None):
        intern = get_object_or_404(Intern, pk=pk)
        serializer = InternSerializer(intern, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        intern = get_object_or_404(Intern, pk=pk)
        intern.delete()
        return Response("Intern deleted!", status=status.HTTP_204_NO_CONTENT)