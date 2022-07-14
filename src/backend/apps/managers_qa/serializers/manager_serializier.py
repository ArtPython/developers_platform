from rest_framework import serializers
from ..models import Managers
from apps.man_qa_to.models import ManagerToProject
from .abstract_serializer import AbstractManagersQASerializers


class ManagersSerializers(AbstractManagersQASerializers):
    class Meta:
        fields = AbstractManagersQASerializers.Meta.fields
        model = Managers

    def validate(self, attrs, *args):
        super().validate(attrs, "manager", Managers)
        return attrs


class ManagerDetailSerializers(ManagersSerializers):
    done_pr = serializers.SerializerMethodField()
    current_pr = serializers.SerializerMethodField()

    model = ManagerToProject

    @staticmethod
    def get_done_pr(manager) -> list:
        done_projects = [man.project.id for man in ManagerToProject.objects.filter(
            manager=manager.id).filter(stats=False).all()]
        done_projects.extend([man.id for man in
                              manager.projects.filter(status='close').all()])
        return list(set(done_projects))

    @staticmethod
    def get_current_pr(manager) -> list:
        all_projects = [project.id for project in manager.projects.all()]
        done_projects = ManagerDetailSerializers.get_done_pr(manager)
        return list(set(all_projects).difference(set(done_projects)))
