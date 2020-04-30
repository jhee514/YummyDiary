from django.contrib.auth import login as auth_login, logout as auth_log_out
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from rest_framework.response import Response  # JSON 응답 생성기
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import UserTag
from .serializers import UserCreationSerializer, UserSerializer, UserTagSerializer
from posts.models import Post
from posts.serializers import PostSerializer
from stores.models import Tag

from django.contrib.auth import get_user_model
User = get_user_model()


@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    serializer = UserCreationSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(user.password)
        user.save()
        if "tags" in request.data.keys():
            for tags in request.data["tags"]:
                tag = get_object_or_404(Tag, id=tags)
                user_tag = UserTagSerializer(data=request.data)
                if user_tag.is_valid():
                    user_tag.save(user=user, tag=tag)
        return Response(status=200, data={'message': '회원가입 성공'})
    return Response(status=400, data=serializer.errors)



@api_view(['GET', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_page(request):
    user = request.user
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)


    if request.method == 'PATCH':
        serializer = UserSerializer(instance=user, data=request.data, partial=True)
        if serializer.is_valid():
            if 'password' in request.data:
                new_user = serializer.save()
                new_user.set_password(request.data["password"])
                new_user.save()
                return Response({"msg" :"변경되었습니다"})
            if 'tags' in request.data:
                user_tags = UserTag.objects.filter(user=user.id)
                if user_tags:
                    for user_tag in user_tags:
                        user_tag.delete()
                if request.data.getlist("tags")[0] != '':
                    for new_user_tag in request.data.getlist("tags"):
                        new_tag = get_object_or_404(Tag, id=new_user_tag)
                        new_user_tag_serializer = UserTagSerializer(data=request.data)
                        if new_user_tag_serializer.is_valid():
                            new_user_tag_serializer.save(user=user, tag=new_tag)
            serializer.save()
            return Response(serializer.data)
        return Response(status=400, data=serializer.errors)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=204)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_posts(request):
    user = request.user
    posts = Post.objects.filter(user=user.id)
    from django.core import serializers
    from django.http import HttpResponse
    user_posts = serializers.serialize('json', posts)
    return HttpResponse(user_posts, content_type="text/json-comment-filtered")
