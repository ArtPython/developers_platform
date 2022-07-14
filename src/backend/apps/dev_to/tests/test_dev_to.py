import pytest
from .conftests import create_dev_to_language, create_dev_to_framework, create_dev_to_project
from ..models import DevToLanguage, DevToProject, DevToFramework


def test_amount_to_language(create_dev_to_language):
    result = DevToLanguage.objects.count()
    assert result == 1


@pytest.mark.django_db
def test_zero_amount_to_language():
    result = DevToLanguage.objects.count()
    assert result == 0


def test_amount_to_framework(create_dev_to_framework):
    result = DevToFramework.objects.count()
    assert result == 1


@pytest.mark.django_db
def test_zero_amount_to_framework():
    result = DevToFramework.objects.count()
    assert result == 0


def test_amount_to_project(create_dev_to_project):
    result = DevToProject.objects.count()
    assert result == 1


@pytest.mark.django_db
def test_zero_amount_to_project():
    result = DevToProject.objects.count()
    assert result == 0
