from django.db import models

# Create your models here.
class User(models.Model):
    USERS = (
        ('ADMIN', 'Admin'),
        ('INTERN', 'Intern'),
        ('COMPANY', 'Company')
    )
    user_name = models.CharField(max_length=20)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    user_type = models.CharField(max_length=10, choices=USERS, default='INTERN')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.pk
