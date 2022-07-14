import pytest
from .conftests import create_framework
from ..models.framework_model import Frameworks
from constance import config
from mixer.backend.django import mixer


@pytest.mark.django_db
def test_constance():
    try:
        mixer.cycle(config.MAX_FRAMEWORKS_AMOUNT + 1).blend('frameworks.frameworks')
        result = False
    except ValueError:  # WrongMaxLanguagesAmount or WrongMaxFrameworksAmount or ValueError:
        result = True
    assert result


def test_amount(create_framework):
    result = Frameworks.objects.count()
    assert result == 1


@pytest.mark.django_db
def test_zero_amount():
    result = Frameworks.objects.count()
    assert result == 0
