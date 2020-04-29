from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from stores.views import StoreViewSet, ReviewViewSet, MenuViewSet, ReviewPostViewSet
from . import views
from django.urls import path


router = routers.DefaultRouter()
router.register('stores', StoreViewSet)
router.register('reviews', ReviewViewSet)
router.register('menus', MenuViewSet)
router.register('reviewpost', ReviewPostViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    path('reviewcreate/', views.reviewcreate, name='reviewcreate'),
    path('recommand/', views.Recommend_User, name='recommand')
]
