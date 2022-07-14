import pytest
from .conftests import create_tasks
from ..models import Tasks
from apps.projects.models import Projects


def test_amount(create_tasks) -> None:
    tasks_amount = Tasks.objects.count()
    projects_amount = Projects.objects.count()
    assert tasks_amount == 6
    assert projects_amount == 1


@pytest.mark.django_db
def test_zero_amount() -> None:
    tasks_amount = Tasks.objects.count()
    projects_amount = Projects.objects.count()
    assert tasks_amount == 0
    assert projects_amount == 0
