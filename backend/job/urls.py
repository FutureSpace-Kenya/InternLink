from django.urls import path

from .views import *

urlpatterns = [
    path('', JobListView.as_view(), name="organizations"),
    path('<int:pk>/', JobView.as_view(), name='organization-update'),
]