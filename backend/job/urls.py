from django.urls import path

from .views import *

urlpatterns = [
    path('', JobListView.as_view(), name="jobs"),
    path('<int:pk>/', JobView.as_view(), name='job-update'),
]