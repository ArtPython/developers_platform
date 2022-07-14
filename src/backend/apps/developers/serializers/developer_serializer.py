from rest_framework import serializers
from ..models.developer_model import Developers
from apps.dev_to.serializers import DevToProjectSerializers
from apps.dev_to.models import DevToProject
from apps.tasks.serializers import TasksDetailSerializers
from apps.tasks.models import Tasks
from ..validations import validate_tasks, validate_frameworks, validate_projects


# from django.core.cache import cache

# class DevelopersSerializers(serializers.HyperlinkedModelSerializer):
class DevelopersSerializers(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        # fields = ['url', 'name']  # ---> gor hiperlinked
        model = Developers
        # depth = 2  # ---> figure out how it works
        # read_only_fields = ['skill']  # ---> something like editable

    @staticmethod
    def validated(attrs):
        validate_frameworks(attrs)
        validate_projects(attrs)
        validate_tasks(attrs, "developer", Developers)
        return attrs


class DevelopersDetailSerializers(DevelopersSerializers):
    # --- tasks
    done_tasks = serializers.SerializerMethodField()
    current_tasks = serializers.SerializerMethodField()
    tasks_result = serializers.SerializerMethodField()
    # --- projects
    done_pr = serializers.SerializerMethodField()
    current_pr = serializers.SerializerMethodField()

    # --- general
    role = serializers.ReadOnlyField()
    technologies = serializers.SerializerMethodField()

    # --- dev-to
    dev_to_dev = serializers.SerializerMethodField()
    free_status = serializers.SerializerMethodField()

    # --- working time
    working = serializers.ReadOnlyField()
    get_years = serializers.ReadOnlyField()
    get_months = serializers.ReadOnlyField()
    get_whole_time = serializers.ReadOnlyField()

    @staticmethod
    def get_technologies(developer) -> list:
        """get nested list of languages and frameworks"""
        print(developer)
        lan_fr = []
        all_dev_frame = [framework for framework in developer.frameworks.all()]
        for lan in developer.stack.all():
            smt = []
            nested = {}
            for fr in all_dev_frame:
                if fr.language.id == lan.id:
                    smt.append(fr.id)
            nested["language"] = lan.id
            nested["frameworks"] = smt
            lan_fr.append(nested)
        return lan_fr

    @staticmethod
    def get_dev_to_dev(developer):
        """tie DevToPro model with developers"""
        developers = DevToProjectSerializers(DevToProject.objects.filter(
            developer=developer), many=True).data
        return developers

    @staticmethod
    def get_done_pr(developer) -> list:
        done_projects = [dev.project.id for dev in DevToProject.objects.filter(
            developer=developer.id).filter(stats=False).select_related('project').all()]
        done_projects.extend([dev.id for dev in
                              developer.projects.filter(status='close').all()])
        return list(set(done_projects))

    @staticmethod
    def get_current_pr(developer) -> list:
        all_projects = [project.id for project in developer.projects.all()]
        done_projects = DevelopersDetailSerializers.get_done_pr(developer)
        return list(set(all_projects).difference(set(done_projects)))
        # done_projects = [dev.project.id for dev in DevToProject.objects.filter(
        #     developer=developer.id).filter(stats=True).select_related('project').all()]
        # done_projects.extend([dev.id for dev in
        #                       developer.projects.filter(status='open').all()])
        # return list(set(done_projects))

    @staticmethod
    def get_free_status(developer) -> bool:
        return len(DevelopersDetailSerializers.get_current_pr(developer)) == 0

    # --------------- HARD CODE FIX IT ------------------

    @staticmethod
    def get_done_tasks(developer) -> list:
        # tasks = cache.get('tasks')
        # if not tasks:
        tasks = [task.id for task in developer.tasks.filter(status='close')]
        for task in developer.tasks.all():
            for project in developer.projects.all():
                if project.id in DevelopersDetailSerializers.get_done_pr(developer) \
                        and task.project.id == project.id:
                    tasks.append(task.id)
        # cache.set('tasks', tasks, 10)

        return tasks

    @staticmethod
    def get_current_tasks(developer) -> list:
        # current_tasks = cache.get('tasks')
        # if not current_tasks:
        tasks = [task.id for task in developer.tasks.all()]
        current_tasks = set(tasks).difference(set(
            DevelopersDetailSerializers.get_done_tasks(developer)))
        # cache.set('current_tasks', current_tasks, 10)

        return list(current_tasks)

    @staticmethod
    def get_tasks_result(developer) -> int:
        on_time, not_ont_time = 0, 0
        for task in DevelopersDetailSerializers.get_done_tasks(developer):
            if TasksDetailSerializers.get_on_time(Tasks.objects.get(id=task)):
                on_time += 1
            else:
                not_ont_time += 1
        try:
            result = round(on_time / (on_time + not_ont_time), 2) * 100
        except ZeroDivisionError:
            result = False
        return result
