# user/views.py
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProblemSerializer
from .models import Problem
from drf_yasg.utils import swagger_auto_schema
from django.shortcuts import get_object_or_404


class BaseProblem(APIView):
    @swagger_auto_schema(responses={200: ProblemSerializer(many=True)})
    def get(self, request):
        queryset = Problem.objects.filter(is_deleted=False)  # 삭제된 문제 제외
        serializer = ProblemSerializer(queryset, many=True)  # 직렬화 인스턴스 생성
        return Response({
            'result': serializer.data  # serializer.data로 JSON 응답 반환
        }, status=status.HTTP_200_OK)

    @swagger_auto_schema(request_body=ProblemSerializer, responses={201: ProblemSerializer})
    def post(self, request):
        serializer = ProblemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'result': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(request_body=ProblemSerializer, responses={200: ProblemSerializer})
    def put(self, request, pk=None):
        problem = get_object_or_404(Problem, pk=pk)
        serializer = ProblemSerializer(problem, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'result': serializer.data
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={204: 'No Content'})
    def delete(self, request, pk=None):
        problem = get_object_or_404(Problem, pk=pk)
        problem.is_deleted = True  # 논리적 삭제 처리
        problem.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
