from .models import Developers
from .serializers.developer_serializer import DevelopersDetailSerializers, DevelopersSerializers
from rest_framework.viewsets import ModelViewSet


class DevelopersViewsSets(ModelViewSet):
    queryset = Developers.objects.prefetch_related('tasks', 'projects', 'stack', 'frameworks').all()
    serializer_class = DevelopersSerializers

    action_to_serializer = {
        "retrieve": DevelopersDetailSerializers
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
