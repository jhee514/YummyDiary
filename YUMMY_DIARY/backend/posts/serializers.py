from .models import Post
from rest_framework import serializers


class PostSerializer(serializers.ModelSerializer):
    
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