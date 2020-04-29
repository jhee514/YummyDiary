from .models import UserTag
from stores.models import Tag
from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = [
            "id",
            "content",
        ]



class UserCreationSerializer(serializers.ModelSerializer):
    tags = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = User
        fields = [
            'id', 
            'password', 
            'email', 
            'gender', 
            'birth_year',
            'tags',
            ]


class UserSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = [
            'id', 
            'email', 
            'gender', 
            'birth_year',
            'tags',
        ]


class UserTagSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    tag = TagSerializer(read_only=True)

    class Meta:
        model = UserTag
        fields = [
            'user', 
            'tag',
        ]
