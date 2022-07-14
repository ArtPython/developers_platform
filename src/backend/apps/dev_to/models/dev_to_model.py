from django.db import models
from .abstract_model import AbstractDevToLanguageFramework, ToProject
from apps.developers.models import Developers
from apps.languages.models import Languages
from apps.frameworks.models import Frameworks


class DevToProject(ToProject):
    developer = models.ForeignKey(Developers, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.developer} works on {self.project}'


class DevToLanguage(AbstractDevToLanguageFramework):
    language = models.ForeignKey(Languages, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.developer} to {self.language}'


class DevToFramework(AbstractDevToLanguageFramework):
    framework = models.ForeignKey(Frameworks, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.developer} to {self.framework}'
