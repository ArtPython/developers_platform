from .models import Projects
from .serializers import ProjectsSerializers, ProjectsDetailSerializers
from rest_framework.viewsets import ModelViewSet


class ProjectsViewSet(ModelViewSet):
    """list and retrieve languages"""
    queryset = Projects.objects.prefetch_related('stack').all()
    serializer_class = ProjectsSerializers
    action_to_serializer = {
        "retrieve": ProjectsDetailSerializers
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
