from django.db import models
from constance import config
from exeptions.for_languages import WrongMaxLanguagesAmount

project_status = [
    ('backend', 'backend'),
    ('frontend', 'frontend'),
]


class Languages(models.Model):
    name = models.CharField(max_length=30)
    photo = models.ImageField(blank=True, null=True, default=None, upload_to='languages/')
    purpose = models.CharField(max_length=100, choices=project_status, default='backend')

    def save(self, *args, **kwargs) -> None:
        print('languages works before saving')
        message = f'amount of languages should be less than {config.MAX_LANGUAGES_AMOUNT}'
        if config.MAX_LANGUAGES_AMOUNT - 1 < Languages.objects.count():
            raise WrongMaxLanguagesAmount(message)
        super().save(*args, **kwargs)  # Call the "real" save() method.

    def delete(self, using=None, keep_parents=False) -> None:
        print('languages before deleting')
        super().delete()

    def __str__(self) -> str:
        return str(self.name)

    class Meta:
        verbose_name_plural = "Languages"


def get_upload_to_frameworks(instance, language) -> str:
    """Set up upload path for teams"""
    lan_name = Languages.objects.get(id=language.id).name
    return f'frameworks/{lan_name}/'
