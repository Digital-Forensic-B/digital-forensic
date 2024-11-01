# serializers.py
from rest_framework import serializers
from .models import Problem

class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = ['problemID', 'userID', 'pType', 'pType', 'pContent', 'pFile', 'pAnswer']
