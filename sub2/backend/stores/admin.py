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
            "bhour_list",
            "review_cnt",
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
            "menus"
        ]

@admin.register(models.Review)
class RevieAdmin(admin.ModelAdmin):
    list_display = [
        "writer", 
        "total_score",
        "content",
        "reg_time",
    ]

    search_fields = [
        "writer", 
        "total_score",
        "content",
        "reg_time",
    ]