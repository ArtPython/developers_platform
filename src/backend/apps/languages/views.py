from .models import Languages
from .serializers import LanguagesSerializers, LanguagesDetailSerializers
from rest_framework.viewsets import ModelViewSet


class LanguagesViewSet(ModelViewSet):
    """list and retrieve languages"""
    queryset = Languages.objects.all()
    serializer_class = LanguagesSerializers
    version_param = 1
    action_to_serializer = {
        "retrieve": LanguagesDetailSerializers
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
