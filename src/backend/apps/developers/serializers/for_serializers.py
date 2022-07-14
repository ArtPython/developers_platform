from rest_framework import serializers
from apps.dev_to.models import DevToProject
from ..models import Developers


class DevelopersSerializerForFrameworks(serializers.ModelSerializer):
    class Meta:
        model = Developers
        fields = ["id", "name"]


class DevelopersDetailSerializersForProjects(serializers.ModelSerializer):
    class Meta:
        model = Developers
        exclude = ['stack', 'frameworks', 'projects', 'tasks',
                   'english_level', 'work_since', 'user', 'photo']

    done_pr = serializers.SerializerMethodField()
    current_pr = serializers.SerializerMethodField()
    role = serializers.ReadOnlyField()

    @staticmethod
    def get_done_pr(developer) -> list:
        done_projects = [dev.project.id for dev in
                         DevToProject.objects.filter(developer=developer.id).filter(
                             stats=False).all()]
        done_projects.extend([dev.id for dev in
                              developer.projects.filter(status='close').all()])
        return list(set(done_projects))

    @staticmethod
    def get_current_pr(developer) -> list:
        all_projects = [project.id for project in developer.projects.all()]
        done_projects = DevelopersDetailSerializersForProjects.get_done_pr(developer)
        return list(set(all_projects).difference(set(done_projects)))
