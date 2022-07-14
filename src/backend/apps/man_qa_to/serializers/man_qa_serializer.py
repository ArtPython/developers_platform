from apps.managers_qa.models import Managers
from apps.managers_qa.models import QAEngineer
from apps.dev_to.serializers import AbstractClass
from ..models import QAToProject, ManagerToProject
from rest_framework.validators import UniqueTogetherValidator


class QAToProjectSerializers(AbstractClass):
    some_model = QAEngineer
    some_one = 'qa'

    class Meta:
        model = QAToProject
        fields = AbstractClass.Meta.fields
        validators = [
            UniqueTogetherValidator(
                queryset=model.objects.all(),
                fields=['qa', 'project'],
                # message="The fields developer, language must make a unique set."  # -> default
            )
        ]


class ManagerToProjectSerializers(AbstractClass):
    some_model = Managers
    some_one = 'manager'

    class Meta:
        model = ManagerToProject
        fields = AbstractClass.Meta.fields
        validators = [
            UniqueTogetherValidator(
                queryset=model.objects.all(),
                fields=['manager', 'project'],
                # message="The fields developer, language must make a unique set."  # -> default
            )
        ]
