# setup urls.py file for user app
from django.urls import path

from .views import *

urlpatterns = [
    path('', OrganizationView.as_view(), name="organizations"),
]
