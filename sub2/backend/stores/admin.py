from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Store)
class StoreAdmin(admin.ModelAdmin):
    list_display = [
            "id",
            "store_name",
            "branch",
            "area",
            "tel",
            "address",
            "latitude",
            "longitude",
            "category_list",
        ]
    search_fields = [
            "store_name",
            "branch",
            "area",
            "tel",
            "address",
            "latitude",
            "longitude",
            "category_list",
        ]