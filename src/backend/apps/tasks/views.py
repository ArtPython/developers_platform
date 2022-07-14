from .models import Tasks
from .serializers import TasksDetailSerializers, TasksSerializers
from rest_framework.viewsets import ModelViewSet


class TasksViewsSets(ModelViewSet):
    """list and retrieve languages"""
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializers
    action_to_serializer = {
        "retrieve": TasksDetailSerializers
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
