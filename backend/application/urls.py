from django.urls import path

from .views import *

urlpatterns = [
    path('', ApplicationListView.as_view(), name="interns"),
    path('<int:pk>/', ApplicationView.as_view(), name='interns-update'),
]