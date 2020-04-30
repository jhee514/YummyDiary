from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('signup/', views.signup, name='signup'),

    path('mypage/', views.user_page, name='user_page'),
    path('myposts/', views.user_posts, name='user_posts'),
]
