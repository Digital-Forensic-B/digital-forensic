from datetime import timezone
from django.db import models
from backend.user.models import User
from backend.problem.models import Problem
class Solved_problem(models.Model):
    userID = models.ForeignKey(User, on_delete=models.CASCADE) # 다 삭제하는 방향으로 가나여? 일단은 네 ~
    problemID = models.ForeignKey(Problem, on_delete=models.CASCADE) # 얘 도용 ~
    uFile = models.CharField(max_length=500)
    answerClass = models.BooleanField()
    uAnswer = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    is_deleted = models.BooleanField(default=False)

    def update_date(self):
        self.updated_at = timezone.now
        self.save()

    class Meta:
        db_table = 'solved_problem'
