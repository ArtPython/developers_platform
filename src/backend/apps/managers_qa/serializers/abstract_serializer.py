from rest_framework import serializers
from apps.developers.validations import validate_tasks
from ..validations import validate_projects


class AbstractManagersQASerializers(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        abstract = True

    def validate(self, attrs, *args):
        validate_projects(attrs)
        validate_tasks(attrs, *args)
