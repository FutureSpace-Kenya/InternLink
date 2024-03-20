from django.db import models

from user.models import User
from organization.models import Organization
from job.models import Job

class Application(models.Model):
    STATUSES = (
        ('PENDING', 'Pending'),
        ('REJECTED', 'Rejected'),
        ('ACCEPTED', 'Accepted')
    )
    name = models.CharField(max_length=100)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL)
    organization_id = models.ForeignKey(Organization, on_delete=models.SET_NULL)
    job_id = models.ForeignKey(Job, on_delete=models.SET_NULL)
    status = models.CharField(max_length=10, choices=STATUSES, default='PENDING')
    application_date = models.DateTimeField(auto_now_add=True)
    resume_link = models.CharField(max_length=255)
    cover_letter = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.pk