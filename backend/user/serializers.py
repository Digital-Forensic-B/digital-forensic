from rest_framework import serializers
from .models import User


# 회원가입
class UserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['userID', 'email', 'password', 'isStudent', 'userName']


# 로그인
class UserSignInSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    isStudent = serializers.BooleanField()
