from rest_framework import viewsets, permissions
from .serializers import StoreSerializer, ReviewSerializer, MenuSerializer, ReviewPostSerializer, HashtagSerializer
from .models import Store, Review, Menu

from rest_framework.response import Response  # JSON 응답 생성기
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from datetime import datetime

from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
User = get_user_model()


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
        return Response(status=200, data={'message': '리뷰등록 성공'})
    return Response(status=400, data=serializer.errors)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Recommend_User(request):
    list = {
        "category_name": [],
        "store_list": []
    }
    user = get_object_or_404(User, id=request.user.id)
    if user.tags.count() > 0:
        for tag in user.tags.all():
            temp = tag.content # temp: tags[]에 담겨있는 카테고리
            result = Store.objects.filter(category__contains=temp)[:5]
            list["category_name"].append(temp)
            list["store_list"].append(result.values())
        return Response(status=200, data={'Recommand_Store': list, "validation": True})
    else:
        return Response(statue=200, data={'msg': '선호하는 tag를 정해주세요~', "validation": False})


@api_view(['POST'])
@permission_classes([AllowAny])
def search_store(request):
    store_name_data = request.data["store_name"]
    tag_list = request.data["tags"]

    # store_by_name
    ntemp_data = {
        "store_name": store_name_data,
        "store_by_name": [],
        "validation": False
    }
    if store_name_data != "":
        name_data = Store.objects.filter(name__contains=store_name_data)[:5]
        if name_data.count() > 0:
            ntemp_data["validation"] = True
            ntemp_data["store_by_name"].append(name_data.values())
        else:
            ntemp_data["validation"] = False

    # result_data
    res_data = {
        "store_by_name": ntemp_data,
        "store_by_tag": []
    }

    # store_by_tag
    for tag in tag_list:
        temp_data = {
            "tag_name": "",
            "store_by_tag": [],
            "validation": False
        }
        temp_data["tag_name"] = tag
        tag_data = Store.objects.filter(category__contains=tag)[:5]
        if tag_data.count() > 0:
            temp_data["validation"] = True
            temp_data["store_by_tag"] = tag_data.values()
        else:
            temp_data["validation"] = False
        res_data["store_by_tag"].append(temp_data)

    return Response(status=200, data=res_data)
