from django.db import models
from django.utils import timezone
from backend.user.models import User

class Problem(models.Model):
    problemID = models.AutoField(primary_key=True)
    userID = models.ForeignKey(User, on_delete=models.CASCADE)  # 외래 키 필드 이름을 user로 변경
    pType = models.CharField(max_length=128)  # 소문자로 변경
    pTitle = models.CharField(max_length=128)  # 소문자로 변경
    pContent = models.TextField()  # 내용이 길어질 수 있으므로 TextField로 변경
    pFile = models.CharField(max_length=500)  # 소문자로 변경
    pAnswer = models.CharField(max_length=500)  # 소문로 변경
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    is_deleted = models.BooleanField(default=False)
    def update_date(self):
        self.updated_at = timezone.now
        self.save()

    class Meta:
        db_table = 'problem'
