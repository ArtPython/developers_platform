from django.db import models
from apps.developers.models import AbstractDeveloperManagerQAModel


class Managers(AbstractDeveloperManagerQAModel):
    photo = models.ImageField(blank=True, null=True, default=None, upload_to='managers/')

    class Meta:
        verbose_name_plural = "Managers"
