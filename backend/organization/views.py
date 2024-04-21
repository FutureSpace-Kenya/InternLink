from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from .serializers import OrganizationSerializer
from .models import Organization

class OrganizationListView(APIView):
    '''
    Description: This class is used to get all organizations and create a new organization
    '''
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        organizations = Organization.objects.all()
        serializer = OrganizationSerializer(organizations, many=True)
        return Response({"organizations": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = OrganizationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrganizationView(APIView):
    '''
    Description: This class is used to get one organization, and update an existing organization and delete an organization
    '''
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, pk=None):
        organization = get_object_or_404(Organization, pk=pk)
        serializer = OrganizationSerializer(organization)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk=None):
        organization = get_object_or_404(Organization, pk=pk)
        serializer = OrganizationSerializer(organization, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        organization = get_object_or_404(Organization, pk=pk)
        organization.delete()
        return Response("Organization deleted!", status=status.HTTP_204_NO_CONTENT)