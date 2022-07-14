from django.apps import AppConfig


class DevToConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.dev_to'

    def ready(self):
        import apps.dev_to.signals
