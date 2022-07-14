from rest_framework import serializers
from ..models import QAEngineer
from apps.man_qa_to.models import QAToProject
from apps.tasks.models import Tasks
from .abstract_serializer import AbstractManagersQASerializers


class QASerializers(AbstractManagersQASerializers):
    class Meta:
        model = QAEngineer
        fields = AbstractManagersQASerializers.Meta.fields

    def validate(self, attrs, *args):
        super().validate(attrs, "qa", QAEngineer)
        return attrs


class QADetailSerializers(QASerializers):
    done_pr = serializers.SerializerMethodField()
    current_pr = serializers.SerializerMethodField()
    all_possible_tasks = serializers.SerializerMethodField()

    @staticmethod
    def get_all_possible_tasks() -> list:
        return [task.id for task in Tasks.objects.filter(purpose="qa")]

    @staticmethod
    def get_done_pr(qa) -> list:
        done_projects = [qas.project.id for qas in
                         QAToProject.objects.filter(qa=qa.id).filter(stats=False).all()]
        done_projects.extend([qas.id for qas in
                              qa.projects.filter(status='close').all()])
        return list(set(done_projects))

    @staticmethod
    def get_current_pr(qa) -> list:
        all_projects = [project.id for project in qa.projects.all()]
        done_projects = QADetailSerializers.get_done_pr(qa)
        return list(set(all_projects).difference(set(done_projects)))
