from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_GET, require_http_methods, require_POST
from django.contrib.auth import login as auth_login, logout as auth_log_out
from django.contrib.auth.decorators import login_required

from rest_framework.response import Response #  JSON 응답 생성기
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated  # 회원가입은, 인증을 볼 필요가 없음.

from .serializers import UserCreationSerializer, UserSerializer

from django.contrib.auth import get_user_model
User = get_user_model()

def index(request):
    users = User.objects.all()
    return render(request, 'accounts/index.html', {
        'users': users,
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    serializer = UserCreationSerializer(data=request.data)
    print(request)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(user.password)
        user.save()
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
            serializer.save()
            return Response(serializer.data)
        return Response(status=400, data=serializer.errors)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=204)
