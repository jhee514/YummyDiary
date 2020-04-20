from django.contrib import admin
from . import models


@admin.register(models.Post)
class PostAdmin(admin.ModelAdmin):
    list_display = [
        'id', 
        'writer', 
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
        'writer', 
        'meal', 
        'created_at', 
        'last_modified', 
        'menus',
        'party',
        'store',
        'location',
        'score',
        ]