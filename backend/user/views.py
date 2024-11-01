from django.shortcuts import render

# Create your views here.
# user/views.py
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSignInSerializer,UserSignUpSerializer
from .models import User
from drf_yasg.utils import swagger_auto_schema

@swagger_auto_schema(method="post", request_body=UserSignInSerializer)
@api_view(['POST'])
@permission_classes([AllowAny])
def signinView(request):
    email = request.data.get('email')
    password = request.data.get('password')
    serializer = UserSignInSerializer(data=request.data)
    user = User.objects.filter(email=email).first()

    if user is None or user.password != password:
        return Response({
            "message": "유저 등록이 안돼있음." if user is None else "비밀번호 오류.",
            "result": None
        }, status=status.HTTP_400_BAD_REQUEST)

    if serializer.is_valid():
        return Response({
            'message': '로그인 성공',
            'result': {
                "user_id": user.userID,
            }
        }, status=status.HTTP_200_OK)

    return Response({
        'message': '로그인 실패',
        'data': serializer.errors
    }, status=status.HTTP_401_UNAUTHORIZED)

@swagger_auto_schema(method="post", request_body=UserSignUpSerializer)
@api_view(['POST'])
@permission_classes([AllowAny])
def signupView(request):
    serializer = UserSignUpSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'message': '회원가입 성공',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)
    else:
        return Response({
            'message': '회원가입 실패',
            'data': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)