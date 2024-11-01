# user/urls.py
from django.urls import path
from .views import signinView, signupView

urlpatterns = [
    path('users/signup', signupView, name='회원가입'),
    path('users/signin', signinView, name='로그인'),
]
