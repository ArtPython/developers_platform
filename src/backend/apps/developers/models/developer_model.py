from django.db import models
from apps.languages.models import Languages
from apps.frameworks.models import Frameworks
from .abstract_model import AbstractDeveloperManagerQAModel
from django.contrib import admin


class Developers(AbstractDeveloperManagerQAModel):
    photo = models.ImageField(blank=True, null=True, default=None, upload_to='developers/')
    stack = models.ManyToManyField(Languages, default=None, blank=True)
    frameworks = models.ManyToManyField(Frameworks, default=None, blank=True)

    @admin.display(
        boolean=True,
        ordering='role',
        description='role',
    )
    def dev_role(self) -> str:
        role = []
        for lan in self.stack.all():
            if lan.purpose not in role:
                role.append(lan.purpose)
        if len(role) == 2:
            return 'full-stack'
        else:
            if 'backend' in role:
                return 'backend'
            return 'frontend'

    @property
    def role(self) -> str:
        return self.dev_role()

    def save(self, *args, **kwargs) -> None:
        print('developers works before saving')
        super().save(*args, **kwargs)  # Call the "real" save() method.
        print('works after saving')

    def delete(self, using=None, keep_parents=False) -> None:
        print('developers before deleting')
        super().delete()

    class Meta:
        verbose_name_plural = "Developers"
