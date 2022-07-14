from django.db import models
from apps.languages.models import Languages
from constance import config
from exeptions import WrongMaxFrameworksAmount, WrongMaxFrameworksAmountForLanguage


class Frameworks(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(blank=True, null=True, upload_to='frameworks/', default=None)
    language = models.ForeignKey(Languages, related_name='frameworks', on_delete=models.CASCADE)

    def save(self, *args, **kwargs) -> None:
        print('frameworks works before saving')
        message_lang = f"amount of frameworks for particular language should be " \
                       f"less than {config.MAX_FRAMEWORKS_FOR_LANG_AMOUNT}"
        message_amount = f"amount of frameworks should be less than {config.MAX_FRAMEWORKS_AMOUNT}"
        if config.MAX_FRAMEWORKS_AMOUNT - 1 < Frameworks.objects.count():
            if config.MAX_FRAMEWORKS_FOR_LANG_AMOUNT < Frameworks.objects.filter(
                    language=self.language).count() - 1:
                raise WrongMaxFrameworksAmountForLanguage(message_lang)
            raise WrongMaxFrameworksAmount(message_amount)
        super().save(*args, **kwargs)  # Call the "real" save() method.

    def delete(self, using=None, keep_parents=False) -> None:
        print('frameworks before deleting')
        super().delete()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Frameworks"


def get_upload_to_frameworks(instance, language) -> str:
    """Set up upload path for teams"""
    lan_name = Languages.objects.get(id=language.id).name
    return f'frameworks/{lan_name}/'
