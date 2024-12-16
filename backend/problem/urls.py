# urls.py
from django.urls import path
from .views import BaseProblem

urlpatterns = [
    path('problem', BaseProblem.as_view(), name='problem-list'),
]
