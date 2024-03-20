from django.contrib import admin

from .models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'created_at')
    list_filter = ('last_name', 'first_name', 'email', 'created_at')
    search_fields = ('user_name', 'first_name', 'last_name')
    ordering = ('created_at',)
    date_hierarchy = 'created_at'

admin.site.register(User, UserAdmin)