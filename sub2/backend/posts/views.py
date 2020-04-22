from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


from django.contrib.auth import get_user_model
User = get_user_model()

class SmallPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 50


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = SmallPagination


    def create(self, request):
        print("##################")
        print(request)
        user = request.user
        print(user)
        print(user.email)
        print(get_object_or_404(User, email=user))
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        else:
            print("EEEEEEEEEEEEEE")
            return Response(status=400, data=serializer.errors)

