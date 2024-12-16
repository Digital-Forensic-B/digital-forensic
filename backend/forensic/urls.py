# 프로젝트의 urls.py
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Digital Forensic API",
        default_version='v1',
        description="API documentation for the Digital Forensic project",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="minji.sql@gmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    # 다른 앱의 URL도 여기에 추가
    path('api/v1/', include('user.urls')),
    path('api/v1/', include('problem.urls')),
]

