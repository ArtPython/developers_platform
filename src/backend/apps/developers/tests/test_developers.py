import pytest
from .conftests import create_developer
from ..models import Developers


def test_amount(create_developer):
    result = Developers.objects.count()
    assert result == 1


@pytest.mark.django_db
def test_zero_amount():
    result = Developers.objects.count()
    assert result == 0
