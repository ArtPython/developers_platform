import pytest
from apps.developers.models import Developers
from .conftests import create_user


def test_get_developer(create_user) -> None:
    assert Developers.objects.count() == 1


@pytest.mark.django_db
def test_developers_zero() -> None:
    assert Developers.objects.count() == 0
