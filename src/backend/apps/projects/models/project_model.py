from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from apps.languages.models import Languages
from constance import config

project_status = [
    ('open', 'open'),
    ('close', 'close'),
]


class Projects(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True, default=f"description of {name}")
    mark = models.PositiveIntegerField(validators=(
        MaxValueValidator(int(config.MAX_PROJECT_MARK)),
        MinValueValidator(int(config.MIN_PROJECT_MARK))),
        default=int((config.MAX_PROJECT_MARK + config.MIN_PROJECT_MARK) / 2))
    stack = models.ManyToManyField(Languages, default=None)
    status = models.CharField(max_length=100, choices=project_status, default='open')
    fullstack = models.PositiveIntegerField(default=1)
    backend = models.PositiveIntegerField(default=1)
    frontend = models.PositiveIntegerField(default=1)
    manager = models.PositiveIntegerField(default=1)
    qa = models.PositiveIntegerField(default=1)

    def save(self, *args, **kwargs) -> None:
        print('projects works before saving')
        super().save(*args, **kwargs)  # Call the "real" save() method.

    def delete(self, using=None, keep_parents=False) -> None:
        print('projects before deleting')
        super().delete()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Projects"
        ordering = ['-id']
