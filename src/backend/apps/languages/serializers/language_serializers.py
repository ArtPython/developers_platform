from rest_framework import serializers
from ..models import Languages
from apps.frameworks.models import Frameworks
from apps.developers.models import Developers
from apps.projects.models import Projects


class LanguagesSerializers(serializers.ModelSerializer):
    """general language serializer"""

    class Meta:
        model = Languages
        fields = "__all__"


class LanguagesDetailSerializers(LanguagesSerializers):
    """detail language serializer"""
    developers = serializers.SerializerMethodField()
    frameworks = serializers.SerializerMethodField()
    projects = serializers.SerializerMethodField()

    # frameworks = serializers.StringRelatedField(many=True) ---> will be only for read

    @staticmethod
    def get_developers(language) -> list:
        developers = [dev.id for dev in Developers.objects.filter(stack=language)]
        return developers

    @staticmethod
    def get_frameworks(language) -> list:
        frameworks = [frame.id for frame in Frameworks.objects.filter(language=language)]
        return frameworks

    @staticmethod
    def get_projects(language) -> list:
        projects = [pro.id for pro in Projects.objects.filter(stack=language)]
        return projects
