
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserCreationSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'password', 'email', 'gender', 'birth_year', )


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('email', 'gender', 'birth_year', )
        