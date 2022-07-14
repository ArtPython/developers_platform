from .models import Frameworks
from .serializers import FrameworksDetailSerializers, FrameworksSerializers
from rest_framework.viewsets import ModelViewSet


class FrameworksViewSet(ModelViewSet):
    """list and retrieve languages"""
    queryset = Frameworks.objects.select_related('language')
    serializer_class = FrameworksSerializers
    action_to_serializer = {
        "retrieve": FrameworksDetailSerializers
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
