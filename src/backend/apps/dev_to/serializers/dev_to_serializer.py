from rest_framework import serializers
from ..models import DevToProject, DevToLanguage, DevToFramework
from apps.developers.models import Developers
from rest_framework.validators import UniqueTogetherValidator
from .abstract_serializer import AbstractClass


class DevToProjectSerializers(AbstractClass):
    some_model = Developers
    some_one = 'developer'

    class Meta:
        model = DevToProject
        fields = AbstractClass.Meta.fields
        validators = [
            UniqueTogetherValidator(
                queryset=model.objects.all(),
                fields=['developer', 'project'],
                # message="The fields developer, language must make a unique set."  # -> default
            )
        ]


class DevToLanguageSerializers(serializers.ModelSerializer):
    class Meta:
        model = DevToLanguage
        fields = AbstractClass.Meta.fields
        validators = [
            UniqueTogetherValidator(
                queryset=model.objects.all(),
                fields=['developer', 'language'],
                # message="The fields developer, language must make a unique set."  # -> default
            )
        ]

    # @staticmethod
    # def update(instance, validated_data):
    #     """you can not update this date twice (just to check how it works)"""
    #
    #     if not validated_data.get('change'):
    #         print('well done')
    #         instance.mark = validated_data.get('mark', instance.mark)
    #         instance.change = True
    #         instance.developer = validated_data.get('developer', instance.developer)
    #         instance.language = validated_data.get('language', instance.language)
    #         instance.save()
    #         return instance
    #     else:
    #         print('you can not update it twice')
    #         return instance

    def validate(self, attrs):
        """checks if dev has this language in his stack"""
        all_languages = []
        for i in Developers.objects.get(id=attrs['developer'].id).stack.all():
            all_languages.append(i.id)
        if attrs['language'].id in all_languages:
            return attrs
        raise serializers.ValidationError("this developer doesn't have this language in his stack")


class DevToFrameworkSerializers(serializers.ModelSerializer):
    class Meta:
        model = DevToFramework
        fields = AbstractClass.Meta.fields
        validators = [
            UniqueTogetherValidator(
                queryset=model.objects.all(),
                fields=['developer', 'language'],
                # message="The fields developer, language must make a unique set."  # -> default
            )
        ]

    def validate(self, attrs):
        """checks if dev has this framework in his stack"""
        all_frameworks = []
        for i in Developers.objects.get(id=attrs['developer'].id).frameworks.all():
            all_frameworks.append(i.id)
        if attrs['framework'].id in all_frameworks:
            return attrs
        raise serializers.ValidationError("this developer doesn't have this framework in his stack")
