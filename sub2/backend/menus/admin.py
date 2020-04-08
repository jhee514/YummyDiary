from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'store', 'price']
    search_fields = ['name', 'store']