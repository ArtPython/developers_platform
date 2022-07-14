from django.apps import AppConfig


class DevelopersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.developers'

    def ready(self):
        import apps.developers.signals
