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
    password = models.CharField(max_length=100, blank=True, null=True)
    user_type = models.CharField(max_length=10, choices=USERS, default='INTERN')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # New fields for authentication provider
    google_id = models.CharField(max_length=255, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'password']


    def save(self, *args, **kwargs):
        if self.password:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)
    
    def check_user_password(self, password):
        if self.password is None:
            return False
        return check_password(password, self.password)
    
    def __str__(self):
        return str(self.pk)
