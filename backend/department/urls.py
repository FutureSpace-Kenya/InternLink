from django.urls import path

from .views import *

urlpatterns = [
    path('', DepartmentListView.as_view(), name="interns"),
    path('<int:pk>/', DepartmentView.as_view(), name='interns-update'),
]