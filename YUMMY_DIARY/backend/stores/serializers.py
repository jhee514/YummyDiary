from .models import Store, Tag, Review, Menu
from rest_framework import serializers

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = [
            "content",
        ]


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = [
            "id",
            "name",
            "branch",
            "tel",
            "address",
            "latitude",
            "longitude",
            "category",
            "bhour",
            "image",
            "tags",
        ]


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [
            "writer",
            "store",
            "total_score",
            "content",
            "reg_time",
        ]


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = [
            "name",
            "price",
            "store",
        ]