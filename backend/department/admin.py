from django.contrib import admin

from .models import Department

class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'organization_id', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')
    search_fields = ('name', 'organization_id')
    ordering = ('created_at',)
    date_hierarchy = 'created_at'

admin.site.register(Department, DepartmentAdmin)
