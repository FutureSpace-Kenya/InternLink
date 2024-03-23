# setup urls.py file for user app
from django.urls import path

from .views import *

urlpatterns = [
    path('login/', LoginView.as_view(), name="login"),
    path('register/', RegisterView.as_view(), name="register"),
    path('google-login/', GoogleLoginView.as_view(), name="google-login"),
    path('logout/', LogoutView.as_view(), name="logout"),
]
