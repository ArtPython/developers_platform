from django.db.models.signals import m2m_changed
from ..models import ManagerToProject, QAToProject
from apps.managers_qa.models import Managers
from apps.managers_qa.models import QAEngineer


def create_manager_to_project(instance, sender, action, **kwargs):
    for project in Managers.objects.get(id=instance.id).projects.all():
        ManagerToProject.objects.create(
            stats=True,
            project=project,
            manager=instance
        )


def create_qa_to_project(instance, sender, action, **kwargs):
    for project in QAEngineer.objects.get(id=instance.id).projects.all():
        QAToProject.objects.create(
            stats=True,
            project=project,
            qa=instance
        )


m2m_changed.connect(create_manager_to_project, sender=Managers.projects.through)
m2m_changed.connect(create_qa_to_project, sender=QAEngineer.projects.through)
