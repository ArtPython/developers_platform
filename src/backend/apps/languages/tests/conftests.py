import pytest
from ..models.language_model import Languages
from rest_framework.test import APIClient
from mixer.backend.django import mixer


@pytest.fixture
def client(db) -> APIClient:
    from rest_framework.test import APIClient
    client = APIClient()
    return client


@pytest.fixture
def create_language(db) -> None:
    Languages.objects.create(
        name="python",
        purpose="backend"
    )


@pytest.fixture
def create_language_data(db) -> dict:
    language = mixer.blend('languages.languages')
    data = {
        "name": language.name,
        "purpose": language.purpose
    }
    return data


@pytest.fixture
def update_language_data(db) -> tuple:
    languages = mixer.cycle(2).blend('languages.languages')
    data_before = {
        "name": languages[0].name,
        "purpose": languages[0].purpose
    }
    data_after = {
        "name": languages[1].name,
        "purpose": languages[1].purpose
    }
    return data_before, data_after


language_url = "http://127.0.0.1:8000/languages/"
