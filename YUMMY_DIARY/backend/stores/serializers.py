from .models import Store, Review, Menu, Hashtag
from accounts.serializers import UserSerializer, TagSerializer
from rest_framework import serializers


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = [
            "name",
            "price",
            "store",
        ]


class HashtagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hashtag
        fields = [
            "id",
            "content",
            "review",
        ]


class ReviewSerializer(serializers.ModelSerializer):
    writer = UserSerializer(read_only=True)
    hashtag = HashtagSerializer(many=True, read_only=True)

    class Meta:
        model = Review
        fields = [
            "writer",
            "store",
            "total_score",
            "content",
            "reg_time",
            "hashtag",
        ]


class StoreSerializer(serializers.ModelSerializer):
    review = ReviewSerializer(many=True, read_only=True)
    menu = MenuSerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)

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


class ReviewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [
            "id",
            "total_score",
            "content",
            "reg_time",
            "store",
            "writer",
        ]