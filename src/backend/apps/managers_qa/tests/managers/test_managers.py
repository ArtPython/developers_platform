import pytest
from .conftests import create_manager
from apps.managers_qa.models import Managers


def test_amount(create_manager):
    result = Managers.objects.count()
    assert result == 1


@pytest.mark.django_db
def test_zero_amount():
    result = Managers.objects.count()
    assert result == 0
