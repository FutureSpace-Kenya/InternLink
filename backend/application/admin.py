from django.contrib import admin

from .models import Application

class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'user_id', 'organization_id', 'job_id', 'status', 'application_date', 'resume_link', 'cover_letter', 'updated_at')
    list_filter = ('status', 'application_date')
    search_fields = ('name', 'resume_link', 'cover_letter')
    ordering = ('application_date',)
    date_hierarchy = 'application_date'

admin.site.register(Application, ApplicationAdmin)