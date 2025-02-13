from .models import Post
from accounts.serializers import UserSerializer
from stores.serializers import StoreSerializer
from rest_framework import serializers


class PostSerializer(serializers.ModelSerializer):
    store = StoreSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    
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