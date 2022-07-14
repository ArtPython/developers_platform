from rest_framework import routers
from django.urls import path, include
from apps.languages.views import LanguagesViewSet
from apps.frameworks.views import FrameworksViewSet
from apps.managers_qa.views import ManagersViewsSets, QAViewsSets
from apps.tasks.views import TasksViewsSets
from apps.projects.views import ProjectsViewSet
from apps.developers.views import DevelopersViewsSets
from apps.dev_to.views import DevToFrameworkViewsSets, DevToProjectViewsSets, DevToLanguageViewsSets
from apps.man_qa_to.views import ManagerToProjectViewsSets, QAToProjectViewsSets
# trainee
from apps.general.views import SimpleViewSet, SimpleViewSet2, SimpleViewSet3

router = routers.DefaultRouter()
router.register(r'languages', LanguagesViewSet)
router.register(r'frameworks', FrameworksViewSet)
router.register(r'managers', ManagersViewsSets)
router.register(r'qa', QAViewsSets)
router.register(r'tasks', TasksViewsSets)
router.register(r'projects', ProjectsViewSet)
router.register(r'developers', DevelopersViewsSets)
router.register(r'dev-to-project', DevToProjectViewsSets)
router.register(r'dev-to-framework', DevToFrameworkViewsSets)
router.register(r'dev-to-language', DevToLanguageViewsSets)
router.register(r'qa-to-project', QAToProjectViewsSets)
router.register(r'manager-to-project', ManagerToProjectViewsSets)
# trainee
router.register(r'simple', SimpleViewSet)
router.register(r'simple2', SimpleViewSet2)
router.register(r'simple3', SimpleViewSet3)

urlpatterns = [
    path('', include(router.urls)),
]
