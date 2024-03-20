from django.db import models

from user.models import User

# Create your models here.
class Intern(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    university = models.CharField(max_length=100)
    course_of_study = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    id_number = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.pk)