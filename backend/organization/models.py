from django.db import models

class Organization(models.Model):
    name = models.CharField(max_length=50, blank=False, null=True)
    location = models.CharField(max_length=50, blank=False, null=True)
    contact_email = models.EmailField(max_length=50, null=True, blank=False)
    contact_phone = models.CharField(max_length=20, null=True, blank=False)
    website = models.URLField(max_length=50, null=True)
    description = models.TextField(blank=False, null=True)
    industry = models.CharField(max_length=50, null=True)
    logo = models.ImageField(upload_to='logos/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.pk)