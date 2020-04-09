from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price']
    search_fields = ['name']