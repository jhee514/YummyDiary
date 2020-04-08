from django.contrib import admin
from . import models

# Register your models here.
# admin page에서 관리할 항목들 

@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'gender', 'birth_year']
    search_fields = ['email', 'gender', 'birth_year']