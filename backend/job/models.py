from django.db import models

from department.models import Department

# Create your models here.
class Job(models.Model):
    STATUSES = (
        ('OPEN', 'Open'),
        ('CLOSED', 'Closed')
    )

    description = models.TextField()
    department_id = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    skills = models.CharField(max_length=255)
    status = models.CharField(max_length=10, choices=STATUSES, default='OPEN')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.pk)