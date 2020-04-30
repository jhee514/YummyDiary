from .models import Post
from stores.serializers import StoreSerializer
from rest_framework import serializers


class PostSerializer(serializers.ModelSerializer):
    store = StoreSerializer(read_only=True)

    class Meta:
        model = Post
        fields = [
            "user",
            "meal",
            "created_at",
            "last_modified",
            "menus",
            "party",
            "store",
            "location",
            "score",
        ]