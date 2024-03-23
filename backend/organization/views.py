from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Organization

class OrganizationView(APIView):
    permission_classes = []
    def get(self, request):
        organizations = Organization.objects.all()
        return Response({"organizations": organizations})