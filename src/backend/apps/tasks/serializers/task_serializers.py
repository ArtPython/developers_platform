from rest_framework import serializers
from ..models import Tasks
from apps.developers.models import Developers
from apps.managers_qa.models import QAEngineer
from apps.managers_qa.models import Managers
from apps.projects.serializers import ProjectsDetailSerializers


class TasksSerializers(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Tasks

    def update(self, instance, validated_data):
        """you can not change project, purpose and date expire of the task"""

        instance.name = validated_data.get('name', instance.name)
        instance.about = validated_data.get('about', instance.about)
        instance.status = validated_data.get('status', instance.status)
        return instance


class TasksDetailSerializers(TasksSerializers):
    developers = serializers.SerializerMethodField()
    # past_developers = serializers.SerializerMethodField()
    managers = serializers.SerializerMethodField()
    # past_managers = serializers.SerializerMethodField()
    qa = serializers.SerializerMethodField()
    # past_qa = serializers.SerializerMethodField()
    progress = serializers.SerializerMethodField()
    on_time = serializers.SerializerMethodField()

    __len = False

    @staticmethod
    def get_developers(task) -> list:
        """det a developer who works(ed) on this task"""

        developers = []
        if task.purpose == 'developer':
            developers = [developer.id for developer in Developers.objects.filter(tasks=task)]
            if developers:
                TasksDetailSerializers.__len = True
        return developers

    # ------- FIX IT (HARD CODE)----------
    @staticmethod
    def get_past_developers(task) -> list:
        """get a past developer"""

        past_developers = []
        if task.purpose == 'developer' and TasksDetailSerializers.__len:
            past_developers = [TasksDetailSerializers.get_developers(task)[0] == dev['id'] for dev
                               in ProjectsDetailSerializers.get_past_developers(task.project)]
            TasksDetailSerializers.some_ = True

        return past_developers

    @staticmethod
    def get_managers(task) -> list:
        """get a manager who works(ed) on this task"""

        managers = []
        if task.purpose == 'manager':
            managers = [manager.id for manager in Managers.objects.filter(tasks=task)]
            if managers:
                TasksDetailSerializers.__len = True
        return managers

    @staticmethod
    def get_qa(task) -> list:
        """get a qa who works(ed) on this task"""

        qas = []
        if task.purpose == 'qa':
            qas = [qa.id for qa in QAEngineer.objects.filter(tasks=task)]
            if qas:
                TasksDetailSerializers.__len = True
        return qas

    @staticmethod
    def get_progress(task) -> bool:
        """shows if someone works on the task"""

        condition = task.status == 'open' and TasksDetailSerializers.__len
        return condition

    @staticmethod
    def get_on_time(task) -> list:
        """shows if the task was done on time"""

        result = task.expire > task.date_modified.date() and task.status == 'close'
        return result


class GeneralTasksSerializers(TasksDetailSerializers):
    developers = None
    managers = None
    qa = None

    class Meta:
        model = TasksSerializers.Meta.model
        exclude = ['about', 'purpose']


class TaskForDevValidation(TasksDetailSerializers):
    progress = None
    on_time = None

    class Meta:
        model = TasksSerializers.Meta.model
        exclude = ['about', 'purpose', 'name', 'status', 'expire', 'date_modified', 'project']
