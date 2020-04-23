from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from stores.views import StoreViewSet


router = routers.DefaultRouter()
router.register('stores', StoreViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
]
