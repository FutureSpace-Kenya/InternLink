from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class User(models.Model):
    USERS = (
        ('ADMIN', 'Admin'),
        ('INTERN', 'Intern'),
        ('COMPANY', 'Company')
    )
    user_name = models.CharField(max_length=20, blank=True, null=True)
    first_name = models.CharField(max_length=20, blank=True, null=True)
    last_name = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(blank=False, null=False)
    password = models.CharField(max_length=100, blank=True, null=True)
    user_type = models.CharField(max_length=10, choices=USERS, default='INTERN')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # New fields for authentication provider
    google_id = models.CharField(max_length=255, blank=True, null=True)

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
