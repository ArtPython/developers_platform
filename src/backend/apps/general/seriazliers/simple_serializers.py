from rest_framework import serializers
from ..models.simple_model import SimpleModel


class SimpleSerializers(serializers.ModelSerializer):
    class Meta:
        model = SimpleModel
        fields = "__all__"


class SimpleDetailSerializer(SimpleSerializers):
    pass
