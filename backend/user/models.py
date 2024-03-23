from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    USERS = (
        ('ADMIN', 'Admin'),
        ('INTERN', 'Intern'),
        ('COMPANY', 'Company')
    )
    username = models.CharField(max_length=20, blank=True, null=True)
    first_name = models.CharField(max_length=20, blank=True, null=True)
    last_name = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(blank=False, null=False, unique=True)
    user_type = models.CharField(max_length=10, choices=USERS, default='INTERN')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # New fields for authentication provider
    google_id = models.CharField(max_length=255, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name','username']
    
    def __str__(self):
        return str(self.pk)
