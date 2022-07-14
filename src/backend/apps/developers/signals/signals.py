from django.db.models.signals import post_save
from ..models import Developers
from django.contrib.auth.models import User


def create_developer(sender, instance, created, **kwargs) -> None:
    if created:
        Developers.objects.create(
            name=f"{instance.username} developer",
            user=instance,
            skill=5,
        )


post_save.connect(create_developer, sender=User)
