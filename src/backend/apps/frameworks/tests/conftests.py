import pytest
from rest_framework.test import APIClient
from mixer.backend.django import mixer


@pytest.fixture
def client(db) -> APIClient:
    from rest_framework.test import APIClient
    client = APIClient()
    return client


@pytest.fixture
def create_framework(db) -> None:
    mixer.blend('frameworks.frameworks')


@pytest.fixture
def create_framework_data(db) -> dict:
    framework = mixer.blend('frameworks.frameworks')
    data = {
        "name": framework.name,
        "language": framework.language.id
    }
    return data


@pytest.fixture
def update_framework_data(db) -> tuple:
    frameworks = mixer.cycle(2).blend('frameworks.frameworks')
    data_before = {
        "name": frameworks[0].name,
        "language": frameworks[0].language.id
    }
    data_after = {
        "name": frameworks[1].name,
        "language": frameworks[1].language.id
    }
    return data_before, data_after


framework_url = "http://127.0.0.1:8000/frameworks/"
