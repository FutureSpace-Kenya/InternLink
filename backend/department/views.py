from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.permissions import IsAuthenticated
# from rest_framework_simplejwt.authentication import JWTAuthentication

from .serializers import DepartmentSerializer
from .models import Department

class DepartmentListView(APIView):
    '''
    Description: This class is used to get all Departments and create a new Department
    '''
    permission_classes = []

    def get(self, request):
        Departments = Department.objects.all()
        serializer = DepartmentSerializer(Departments, many=True)
        return Response({"Departments": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = DepartmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DepartmentView(APIView):
    '''
    Description: This class is used to get one Department, and update an existing Department and delete an Department
    '''
    permission_classes = []
    
    def get(self, request, pk=None):
        Department = get_object_or_404(Department, pk=pk)
        serializer = DepartmentSerializer(Department)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk=None):
        Department = get_object_or_404(Department, pk=pk)
        serializer = DepartmentSerializer(Department, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        Department = get_object_or_404(Department, pk=pk)
        Department.delete()
        return Response("Department deleted!", status=status.HTTP_204_NO_CONTENT)