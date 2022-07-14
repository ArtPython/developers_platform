from rest_framework import serializers
from ..models import Frameworks
from apps.developers.models import Developers


class FrameworksSerializers(serializers.ModelSerializer):
    """general framework serializer"""

    class Meta:
        model = Frameworks
        fields = "__all__"


class FrameworksDetailSerializers(FrameworksSerializers):
    """detail framework serializer"""

    developers = serializers.SerializerMethodField()

    @staticmethod
    def get_developers(framework) -> list:
        smt = Developers.objects.filter(frameworks=framework).all()
        developers = [dev.id for dev in smt]
        return developers
