from django.db import models
from organization.models import Organization
from user.models import User

class Department(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    head = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='department_head')
    employees_count = models.IntegerField(default=0)
    organization_id = models.ForeignKey(Organization, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.pk)