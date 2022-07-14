import pytest
from apps.projects.models import Projects
from apps.tasks.models import Tasks
from .conftests import create_tasks


def test_get_tasks(create_tasks) -> None:
    assert Projects.objects.count() == 1
    assert Tasks.objects.count() == 5


@pytest.mark.django_db
def test_tasks_zero() -> None:
    assert Projects.objects.count() == 0
    assert Tasks.objects.count() == 0
