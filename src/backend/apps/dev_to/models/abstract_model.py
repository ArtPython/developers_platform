from django.db import models
from apps.projects.models import Projects
from apps.developers.models import Developers


class ToProject(models.Model):
    stats = models.BooleanField(default=True)
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)

    def check_2(self) -> None:
        if not Projects.objects.get(id=self.project).status:
            self.stats = False
            self.save()

    class Meta:
        abstract = True


class AbstractDevToLanguageFramework(models.Model):
    developer = models.ForeignKey(Developers, on_delete=models.CASCADE)
    mark = models.PositiveIntegerField(default=3)

    class Meta:
        abstract = True
