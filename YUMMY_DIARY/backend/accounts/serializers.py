from stores.models import Tag
from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = [
            "content",
        ]



class UserCreationSerializer(serializers.ModelSerializer):

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
    tags = TagSerializer(many=True, read_only=True)
    
    class Meta:
        model = User
        fields = [
            'id', 
            'email', 
            'gender', 
            'birth_year',
            'tags',
        ]
