from django.db import models

from user.models import User

class Intern(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    university = models.CharField(max_length=100)
    course_of_study = models.CharField(max_length=100)
    year_of_study = models.IntegerField(null=True)
    skills = models.TextField(null=True)
    phone_number = models.CharField(max_length=20)
    id_number = models.CharField(max_length=10)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.pk)