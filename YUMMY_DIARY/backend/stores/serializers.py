from .models import Store
from rest_framework import serializers


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
            "bhour_list",
            "tags",
        ]
