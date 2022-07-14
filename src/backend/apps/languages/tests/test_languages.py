import pytest
from .conftests import create_language
from ..models.language_model import Languages
from constance import config
from mixer.backend.django import mixer
from exeptions.for_languages import WrongMaxLanguagesAmount


@pytest.mark.django_db
def test_constance():
    try:
        mixer.cycle(config.MAX_LANGUAGES_AMOUNT + 1).blend('languages.languages')
        result = False
    except WrongMaxLanguagesAmount:
        result = True
    assert result


def test_amount(create_language):
    result = Languages.objects.count()
    assert result == 1


@pytest.mark.django_db
def test_zero_amount():
    result = Languages.objects.count()
    assert result == 0
