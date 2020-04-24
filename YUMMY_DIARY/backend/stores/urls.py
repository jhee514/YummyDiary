from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from stores.views import StoreViewSet, ReviewViewSet, MenuViewSet


router = routers.DefaultRouter()
router.register('stores', StoreViewSet)
router.register('reviews', ReviewViewSet)
router.register('menus', MenuViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
]
