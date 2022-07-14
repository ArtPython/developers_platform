from django.db import models
from apps.dev_to.models import ToProject
from apps.managers_qa.models import Managers
from apps.managers_qa.models import QAEngineer


class QAToProject(ToProject):
    qa = models.ForeignKey(QAEngineer, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.qa} works on {self.project}'


class ManagerToProject(ToProject):
    manager = models.ForeignKey(Managers, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.manager} works on {self.project}'
