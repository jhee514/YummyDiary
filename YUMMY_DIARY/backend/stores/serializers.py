from .models import Store, Tag, Review, Menu
from rest_framework import serializers

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = [
            "content",
        ]

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = [
            "name",
            "price",
            "store",
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

class StoreSerializer(serializers.ModelSerializer):
    review = ReviewSerializer(many=True, read_only=True)
    menu = MenuSerializer(many=True, read_only=True)
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
            "review",
            "menu",
        ]

