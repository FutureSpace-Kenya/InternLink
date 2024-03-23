from django.contrib import admin

from .models import Organization

class OrganizationAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'contact_email', 'created_at')
    list_filter = ('created_at', 'location')
    search_fields = ('name', 'location')
    ordering = ('created_at',)
    date_hierarchy = 'created_at'

admin.site.register(Organization, OrganizationAdmin)