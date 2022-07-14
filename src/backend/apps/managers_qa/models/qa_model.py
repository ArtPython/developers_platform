from django.db import models
from apps.developers.models import AbstractDeveloperManagerQAModel


class QAEngineer(AbstractDeveloperManagerQAModel):
    photo = models.ImageField(blank=True, null=True, default=None, upload_to='QA/')

    class Meta:
        verbose_name_plural = "QA"
