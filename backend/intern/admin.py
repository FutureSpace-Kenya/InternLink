from django.contrib import admin

from .models import Intern

class InternAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'university', 'course_of_study', 'phone_number', 'id_number')
    list_filter = ('university', 'course_of_study')
    search_fields = ('course_of_study', 'university')
    ordering = ('created_at',)
    date_hierarchy = 'created_at'

admin.site.register(Intern, InternAdmin)