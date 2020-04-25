from rest_framework import viewsets, permissions
from .serializers import StoreSerializer, ReviewSerializer, MenuSerializer
from .models import Store, Review, Menu


class StoreViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]

    queryset = Store.objects.all()
    serializer_class = StoreSerializer


class ReviewViewSet(viewsets.ModelViewSet):

    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class MenuViewSet(viewsets.ModelViewSet):

    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
