from rest_framework import serializers
from apps.projects.models import Projects
from apps.developers.serializers.for_serializers import DevelopersDetailSerializersForProjects
from apps.developers.models import Developers
from apps.managers_qa.models import Managers
from apps.managers_qa.models import QAEngineer
from apps.managers_qa.serializers import ManagerDetailSerializersForProjects, \
    QADetailSerializersForProjects
from apps.tasks.models import Tasks
from apps.dev_to.models import DevToProject
from apps.dev_to.serializers import DevToProjectSerializers


class ProjectsSerializers(serializers.ModelSerializer):
    size = serializers.SerializerMethodField()

    @staticmethod
    def get_size(project) -> str:
        num = project.fullstack + project.backend + project.frontend + project.qa + project.manager
        if num > 10:
            return 'small team'
        elif num > 25:
            return 'big team'
        return 'average team'

    def validate(self, attrs):
        """validate mark of project (min is 1, max is 10)"""
        if attrs["mark"] < 1:
            raise serializers.ValidationError("1 is min mark")
        elif attrs["mark"] > 10:
            raise serializers.ValidationError("10 is max mark")
        return attrs

    class Meta:
        fields = "__all__"
        model = Projects


class ProjectsDetailSerializers(ProjectsSerializers):
    # dev_to_project = serializers.SerializerMethodField()
    # counter = serializers.SerializerMethodField()
    # full_project = serializers.SerializerMethodField()

    # --- managers & qa
    managers = serializers.SerializerMethodField()
    past_managers = serializers.SerializerMethodField()
    current_managers = serializers.SerializerMethodField()
    qas = serializers.SerializerMethodField()
    past_qa = serializers.SerializerMethodField()
    current_qa = serializers.SerializerMethodField()

    # --- developers
    past_developers = serializers.SerializerMethodField()
    current_developers = serializers.SerializerMethodField()

    # --- tasks
    done_tasks = serializers.SerializerMethodField()
    current_tasks = serializers.SerializerMethodField()

    # --- developers
    @staticmethod
    def get_developers(project):
        """return nested list of developers for the project"""

        developers = DevelopersDetailSerializersForProjects(Developers.objects.filter(
            projects=project), many=True).data
        return developers

    @staticmethod
    def get_past_developers(project) -> list:
        """return nested list of PAST developers for the project"""
        past_devs = [dev for dev in ProjectsDetailSerializers.get_developers(project) if
                     project.id in dev['done_pr']]
        return past_devs

    @staticmethod
    def get_current_developers(project) -> list:
        """return nested list of CURRENT developers for the project"""
        current_devs = [i for i in ProjectsDetailSerializers.get_developers(project) if
                        i not in ProjectsDetailSerializers.get_past_developers(project)]
        return current_devs

    # --- managers & qa
    @staticmethod
    def get_managers(project):
        """return nested list of managers for the project"""
        managers = ManagerDetailSerializersForProjects(Managers.objects.filter(
            projects=project), many=True).data
        return managers

    @staticmethod
    def get_past_managers(project) -> list:
        """return nested list of PAST managers for the project"""
        past_managers = [man for man in ProjectsDetailSerializers.get_managers(project) if
                         project.id in man['done_pr']]
        return past_managers

    @staticmethod
    def get_current_managers(project) -> list:
        """return nested list of CURRENT managers for the project"""
        current_managers = [man for man in ProjectsDetailSerializers.get_managers(project) if
                            man not in ProjectsDetailSerializers.get_past_managers(project)]
        return current_managers

    @staticmethod
    def get_qas(project):
        """return nested list of QA for the project"""
        qa = QADetailSerializersForProjects(QAEngineer.objects.filter(
            projects=project), many=True).data
        return qa

    @staticmethod
    def get_past_qa(project) -> list:
        """return nested list of past QA for the project"""
        past_qa = [qa for qa in ProjectsDetailSerializers.get_qas(project) if
                   project.id in qa['done_pr']]
        return past_qa

    @staticmethod
    def get_current_qa(project) -> list:
        """return nested list of current QA for the project"""
        current_qa = [qa for qa in ProjectsDetailSerializers.get_qas(project) if
                      qa not in ProjectsDetailSerializers.get_past_qa(project)]
        return current_qa

    # --- project detail
    @staticmethod
    def get_dev(projects, role) -> int:
        """func to get amount of devs depends on role"""
        devs = len([dev for dev in ProjectsDetailSerializers.get_current_developers(projects)
                    if dev['role'] == role])
        return devs

    @staticmethod
    def get_counter(project) -> tuple:
        full_developers = ProjectsDetailSerializers.get_dev(project, 'full-stack')
        backend_developers = ProjectsDetailSerializers.get_dev(project, 'backend')
        frontend_developers = ProjectsDetailSerializers.get_dev(project, 'frontend')
        managers = len(ProjectsDetailSerializers.get_current_managers(project))
        qa = len(ProjectsDetailSerializers.get_current_qa(project))
        return full_developers, backend_developers, frontend_developers, managers, qa

    @staticmethod
    def get_full_project(project) -> str:
        """shows if project need developers"""
        gen_res = [0, 0, 0, 0, 0]
        if ProjectsDetailSerializers.get_counter(project)[0] >= \
                Projects.objects.get(id=project.id).fullstack:
            gen_res[0] = 1
        if ProjectsDetailSerializers.get_counter(project)[1] >= \
                Projects.objects.get(id=project.id).backend:
            gen_res[1] = 1
        if ProjectsDetailSerializers.get_counter(project)[2] >= \
                Projects.objects.get(id=project.id).frontend:
            gen_res[2] = 1
        if ProjectsDetailSerializers.get_counter(project)[3] >= \
                Projects.objects.get(id=project.id).manager:
            gen_res[3] = 1
        if ProjectsDetailSerializers.get_counter(project)[4] >= \
                Projects.objects.get(id=project.id).qa:
            gen_res[4] = 1
        if sum(gen_res) == 5:
            return 'full'
        elif sum(gen_res) == 2:
            if gen_res[0] == 0:
                return 'need a fullstack dev'
            elif gen_res[1] == 0:
                return 'need a backend dev'
            else:
                return 'need a frontend dev'
        elif sum(gen_res) == 1:
            if gen_res[0] == 0 and gen_res[1] == 0:
                return 'need a fullstack dev and a backend dev'
            elif gen_res[0] == 0 and gen_res[2] == 0:
                return 'need a fullstack dev and frontend dev'
            else:
                return 'need a backend dev and a frontend dev'
        return 'need the whole team'

    # --- tasks
    @staticmethod
    def get_tasks(project, another_filter) -> list:
        """return nested list of all tasks"""
        return [task.id for task in Tasks.objects.filter(project=project.id).filter(
            status=another_filter)]

    @staticmethod
    def get_done_tasks(project) -> list:
        """return nested list of done tasks"""
        return ProjectsDetailSerializers.get_tasks(project, 'close')

    @staticmethod
    def get_current_tasks(project) -> list:
        """return nested list of current tasks"""
        return ProjectsDetailSerializers.get_tasks(project, 'open')

    # --- dev to project
    @staticmethod
    def get_dev_to_project(project):
        """return nested list of developers for the project"""
        devs_to_pro = DevToProjectSerializers(DevToProject.objects.filter(
            project=project), many=True).data
        return devs_to_pro
