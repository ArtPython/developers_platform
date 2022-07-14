from .models.qa_model import QAEngineer
from .models import Managers
from .serializers import QASerializers, QADetailSerializers, ManagersSerializers, \
    ManagerDetailSerializers
from rest_framework.viewsets import ModelViewSet


class ManagersViewsSets(ModelViewSet):
    queryset = Managers.objects.prefetch_related('projects', 'tasks').all()
    serializer_class = ManagersSerializers

    action_to_serializer = {
        "retrieve": ManagerDetailSerializers
    }

    def get_serializer_class(self) -> not None:
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class QAViewsSets(ModelViewSet):
    queryset = QAEngineer.objects.prefetch_related('projects', 'tasks').all()
    serializer_class = QASerializers

    action_to_serializer = {
        "retrieve": QADetailSerializers
    }

    def get_serializer_class(self) -> not None:
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
