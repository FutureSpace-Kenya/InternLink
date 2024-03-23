from django.urls import path

from .views import *

urlpatterns = [
    path('', OrganizationListView.as_view(), name="organizations"),
    path('<int:pk>/', OrganizationView.as_view(), name='organization-update'),
]