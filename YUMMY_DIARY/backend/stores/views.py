from rest_framework import viewsets, permissions
from .serializers import StoreSerializer
from .models import Store


class StoreViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]

    queryset = Store.objects.all()
    serializer_class = StoreSerializer
