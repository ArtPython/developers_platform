import pytest
from .conftests import create_qa
from apps.managers_qa.models import QAEngineer


def test_amount(create_qa):
    result = QAEngineer.objects.count()
    assert result == 1


@pytest.mark.django_db
def test_zero_amount():
    result = QAEngineer.objects.count()
    assert result == 0
