from rest_framework import viewsets, permissions
from .serializers import StoreSerializer, ReviewSerializer, MenuSerializer, ReviewPostSerializer, HashtagSerializer
from .models import Store, Review, Menu

from rest_framework.response import Response  # JSON 응답 생성기
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from datetime import datetime


class StoreViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    queryset = Store.objects.all()
    serializer_class = StoreSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class MenuViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class ReviewPostViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    queryset = Review.objects.all()
    serializer_class = ReviewPostSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
def reviewcreate(request):
    user = request.user
    data = request.data
    review = {
        'id': 0,
        'total_score': data['total_score'],
        'content': data['content'],
        'reg_time': datetime.now(),
        'store': data['store'],
        'writer': user.id,
    }
    serializer = ReviewPostSerializer(data=review)
    if serializer.is_valid():
        serializer.save()
        review_post_id = Review.objects.order_by('-pk')[0].id
        hashtag = {
            'id': 0,
            'content': '',
            'review': review_post_id,
        }
        for tag in data['hashtag']:
            hashtag['content'] = tag['content']
            tag_serializer = HashtagSerializer(data=hashtag)
            if tag_serializer.is_valid():
                tag_serializer.save()
                print("태그 등록 성공")
        return Response(status=200, data={'message': '리뷰등록 성공'})
    return Response(status=400, data=serializer.errors)
