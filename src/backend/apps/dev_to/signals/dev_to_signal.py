from django.db.models.signals import m2m_changed
from src.backend.apps.developers import Developers
from ..models import DevToProject, DevToFramework, DevToLanguage


def create_dev_to_project(instance, sender, action, **kwargs) -> None:
    for project in Developers.objects.get(id=instance.id).projects.all():
        if not DevToProject.objects.filter(developer=instance.id). \
                filter(project=project).exists():
            DevToProject.objects.create(
                stats=True,
                project=project,
                developer=instance
            )


def create_dev_to_language(instance, sender, action, **kwargs):
    for language in Developers.objects.get(id=instance.id).stack.all():
        DevToLanguage.objects.create(
            mark=1,
            language=language,
            developer=instance
        )


def create_dev_to_framework(instance, sender, action, **kwargs):
    for framework in Developers.objects.get(id=instance.id).frameworks.all():
        DevToFramework.objects.create(
            mark=1,
            framework=framework,
            developer=instance
        )


m2m_changed.connect(create_dev_to_project, sender=Developers.projects.through)
m2m_changed.connect(create_dev_to_language, sender=Developers.stack.through)
m2m_changed.connect(create_dev_to_framework, sender=Developers.frameworks.through)
