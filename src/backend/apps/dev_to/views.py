from rest_framework.viewsets import ModelViewSet
from .models import DevToProject, DevToLanguage, DevToFramework
from .serializers import DevToFrameworkSerializers, \
    DevToProjectSerializers, DevToLanguageSerializers


class DevToProjectViewsSets(ModelViewSet):
    queryset = DevToProject.objects.all()
    serializer_class = DevToProjectSerializers


class DevToLanguageViewsSets(ModelViewSet):
    queryset = DevToLanguage.objects.all()
    serializer_class = DevToLanguageSerializers


class DevToFrameworkViewsSets(ModelViewSet):
    queryset = DevToFramework.objects.all()
    serializer_class = DevToFrameworkSerializers
