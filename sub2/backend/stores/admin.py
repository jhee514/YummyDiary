from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "content",
    ]
    search_fields = ["content"]


@admin.register(models.Store)
class StoreAdmin(admin.ModelAdmin):
    list_display = [
            "id",
            "name",
            "branch",
            "tel",
            "address",
            "latitude",
            "longitude",
            "category",
            "bhour_list",
        ]
    search_fields = [
            "name",
            "branch",
            "tel",
            "address",
            "latitude",
            "longitude",
        ]

@admin.register(models.Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = [
        "writer",
        "store", 
        "total_score",
        "content",
        "reg_time",
    ]

    search_fields = [
        "writer", 
        "store",
        "total_score",
        "content",
        "reg_time",
    ]


@admin.register(models.Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "price",
        "store",
    ]
    search_fields = [
        "name",
        "price",
        "store",
    ]