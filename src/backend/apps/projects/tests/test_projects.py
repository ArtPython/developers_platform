import pytest
from .conftests import create_project
from ..models.project_model import Projects


def test_amount(create_project):
    result = Projects.objects.count()
    assert result == 1


@pytest.mark.django_db
def test_zero_amount():
    result = Projects.objects.count()
    assert result == 0
