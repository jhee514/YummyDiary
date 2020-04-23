from django.urls import path
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'posts'

router = DefaultRouter(trailing_slash=False)
router.register(r"posts", views.PostViewSet, basename="posts")

urlpatterns = router.urls
