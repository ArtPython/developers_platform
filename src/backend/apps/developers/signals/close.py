from django.db.models.signals import pre_save
from ..models import Developers
from apps.projects.models import Projects
from apps.dev_to.models import DevToProject


def change_dev_to_project(instance, sender, **kwargs) -> None:
    for dev in Developers.objects.filter(projects=instance.id):
        if DevToProject.objects.filter(developer=dev.id). \
                filter(project=instance.id).exists():
            if instance.status == 'close':
                DevToProject.objects.filter(developer=dev.id). \
                    filter(project=instance.id).update(stats=False)


pre_save.connect(change_dev_to_project, sender=Projects)
