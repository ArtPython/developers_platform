from django.db import models
from django.contrib.auth.models import User
from apps.tasks.models.task_model import Tasks
from apps.projects.models.project_model import Projects
from django.utils.timezone import now
from django.core.validators import MinValueValidator, MaxValueValidator
from constance import config

english_level = [
    ('A', 'A'),
    ('B', 'B'),
    ('C', 'C'),
]


class AbstractDeveloperManagerQAModel(models.Model):
    """Abstract model with general fields for developers' and managers' and qa' models"""
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    work_since = models.DateField(default=now)
    projects = models.ManyToManyField(Projects, blank=True)
    skill = models.PositiveIntegerField(validators=(
        MinValueValidator(int(config.MIN_DMQA_SKILL)),
        MaxValueValidator(int(config.MAX_DMQA_SKILL))),
        default=int((config.MAX_DMQA_SKILL + config.MIN_DMQA_SKILL) / 2))
    english_level = models.CharField(max_length=1, choices=english_level, default='B')
    tasks = models.ManyToManyField(Tasks, default=None, blank=True)

    @property
    def working(self) -> list:
        working_time = now().year * 12 + now().month - self.work_since.year * 12\
                       - self.work_since.month
        return [working_time // 12, working_time % 12]

    @property
    def get_years(self) -> int:
        return self.working[0]

    @property
    def get_months(self) -> int:
        return self.working[1]

    @property
    def get_whole_time(self) -> int:
        return self.working[0] * 12 + self.working[1]

    def __str__(self) -> str or type(name):
        if self.id % 2 == 0:
            return self.name
        return f"{self.name}!!!!!!!!!!!"

    class Meta:
        abstract = True
