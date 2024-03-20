from django.contrib import admin

from .models import Job

class JobAdmin(admin.ModelAdmin):
    list_display = ('description', 'department_id', 'skills', 'status', 'created_at')
    list_filter = ('status', 'created_at', 'updated_at')
    search_fields = ('description', 'skills')
    ordering = ('created_at',)
    date_hierarchy = 'created_at'

admin.site.register(Job, JobAdmin)