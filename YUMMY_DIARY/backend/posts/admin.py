from django.contrib import admin
from . import models


@admin.register(models.Post)
class PostAdmin(admin.ModelAdmin):
    list_display = [
        'id', 
        'user', 
        'meal', 
        'created_at', 
        'last_modified', 
        'menus',
        'party',
        'store',
        'location',
        'score',
        ]
    search_fields = [
        'user', 
        'meal', 
        'created_at', 
        'last_modified', 
        'menus',
        'party',
        'store',
        'location',
        'score',
        ]