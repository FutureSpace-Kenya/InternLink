from django.urls import path

from .views import *

urlpatterns = [
    path('', InternListView.as_view(), name="interns"),
    path('<int:pk>/', InternView.as_view(), name='interns-update'),
]