from django.apps import AppConfig


class ManQaToConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.man_qa_to'

    def ready(self):
        import apps.man_qa_to.signals
