from django.contrib import admin

from .models import User, Employer, Seeker

# Register your models here.
admin.site.register(User)


@admin.register(Seeker)
class SeekerAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'free_apps', 'credits', 'confirm_spending', 'created_at', 'updated_at']
    ordering = ['-created_at']  # ORDER BY DESC

    def email(self, instance):
        return instance.user.email


@admin.register(Employer)
class EmployerAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'free_calls', 'credits', 'postings', 'confirm_spending', 'created_at', 'updated_at']
    ordering = ['-created_at']  # ORDER BY DESC

    def email(self, instance):
        return instance.user.email
