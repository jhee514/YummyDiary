from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.decorators import permission_classes

from rest_framework.permissions import AllowAny, IsAuthenticated


class SmallPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 50


class PostViewSet(viewsets.ModelViewSet):
    permission_classes = [ IsAuthenticated ]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = SmallPagination

