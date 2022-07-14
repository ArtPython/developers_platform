from rest_framework.viewsets import ModelViewSet
from .models import QAToProject, ManagerToProject
from .serializers import QAToProjectSerializers, ManagerToProjectSerializers


class QAToProjectViewsSets(ModelViewSet):
    queryset = QAToProject.objects.all()
    serializer_class = QAToProjectSerializers


class ManagerToProjectViewsSets(ModelViewSet):
    queryset = ManagerToProject.objects.all()
    serializer_class = ManagerToProjectSerializers
