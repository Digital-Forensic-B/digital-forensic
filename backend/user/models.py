from datetime import timezone
from django.db import models
class User(models.Model):
    userID = models.AutoField(primary_key=True)
    password = models.CharField(max_length=128)
    email = models.EmailField(unique=True)
    # erd 변경건
    userName = models.CharField(max_length=20)
    isStudent = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    is_deleted = models.BooleanField(default=False)

    def update_date(self):
        self.updated_at = timezone.now
        self.save()

    class Meta:
        db_table = 'user'
