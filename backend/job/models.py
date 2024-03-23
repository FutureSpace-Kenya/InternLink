from django.db import models

from department.models import Department

class Job(models.Model):
    STATUSES = (
        ('OPEN', 'Open'),
        ('CLOSED', 'Closed'),
    )

    JOB_TYPES = (
        ('FULL_TIME', 'Full Time'),
        ('PART_TIME', 'Part Time'),
        ('CONTRACT', 'Contract'),
    )

    EXPERIENCE_LEVELS = (
        ('ENTRY_LEVEL', 'Entry Level'),
        ('MID_LEVEL', 'Mid Level'),
        ('SENIOR_LEVEL', 'Senior Level'),
    )

    EDUCATION_LEVELS = (
        ('HIGH_SCHOOL', 'High School'),
        ('BACHELORS', 'Bachelors'),
        ('MASTERS', 'Masters'),
        ('DOCTORATE', 'Doctorate'),
    )

    title = models.CharField(max_length=255, null=True)
    description = models.TextField()
    location = models.CharField(max_length=255, null=True)
    salary = models.CharField(max_length=255, null=True)
    job_type = models.CharField(max_length=10, choices=JOB_TYPES, default='FULL_TIME')
    experience_level = models.CharField(max_length=12, choices=EXPERIENCE_LEVELS, default='ENTRY_LEVEL')
    education_level = models.CharField(max_length=12, choices=EDUCATION_LEVELS, default='HIGH_SCHOOL')
    department_id = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    skills = models.CharField(max_length=255, null=True)
    status = models.CharField(max_length=10, choices=STATUSES, default='OPEN')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.pk)