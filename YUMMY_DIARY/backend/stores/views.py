from rest_framework import viewsets, permissions
from .serializers import StoreSerializer
from .models import Store, Review, Menu


class StoreViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]

    queryset = Store.objects.all()
    serializer_class = StoreSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    queryset = Review.objects.all()
    serializer_class = StoreSerializer


class MenuViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    queryset = Menu.objects.all()
    serializer_class = StoreSerializer
