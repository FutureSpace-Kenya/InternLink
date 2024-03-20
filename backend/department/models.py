from django.db import models

from organization.models import Organization

# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=100)
    organization_id = models.ForeignKey(Organization, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.pk)