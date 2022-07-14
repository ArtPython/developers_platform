from django.db.models.signals import post_save
from apps.projects.models import Projects
from ..models import Tasks


def create_projects_tasks(sender, instance, created, **kwargs) -> None:
    def create_task(name, purpose) -> None:
        Tasks.objects.create(
            name=f"{name} task",
            status="open",
            about=f"about {name} task",
            project=Projects.objects.get(id=instance.id),
            purpose=purpose
        )

    if created:
        create_task('backend', "developer")
        create_task('fullstack', "developer")
        create_task('frontend', "developer")
        create_task('qa', "qa")
        create_task('manager', "manager")


post_save.connect(create_projects_tasks, sender=Projects)
