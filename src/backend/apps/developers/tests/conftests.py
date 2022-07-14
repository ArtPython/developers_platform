import pytest
from ..models import Developers
from rest_framework.test import APIClient
from mixer.backend.django import mixer
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED


@pytest.fixture
def client(db) -> APIClient:
    from rest_framework.test import APIClient
    client = APIClient()
    return client


@pytest.fixture
def create_developer(db) -> None:
    mixer.blend('developers.developers')


@pytest.fixture
def create_dev(db) -> None:
    mixer.blend('developers.developers', name='super developer')


def data(developer, num):
    dev_data = {
        "name": developer[num].name,
        "work_since": developer[num].work_since.date(),
        "skill": developer[num].skill,
        "english_level": developer[num].english_level,
        "projects": [],  # developer.projects,
        "tasks": [],  # developer.tasks,
        "stack": [],  # developer.stack,
        "frameworks": [],  # developer.frameworks,
    }
    return dev_data


@pytest.fixture
def create_developer_data(db) -> dict:
    developer = mixer.cycle(1).blend('developers.developers')
    smt = data(developer, 0)
    return smt


@pytest.fixture
def update_developer_data(transactional_db) -> tuple:
    developer = mixer.cycle(2).blend('developers.developers')
    data_before = data(developer, 0)
    data_after = data(developer, 1)
    return data_before, data_after


def create_smt(client, url, some_data, **args) -> None:
    result_post = client.post(url, some_data, content_type="application/json")
    result = client.get(f"{url}2/")
    assert result_post.status_code == HTTP_201_CREATED
    assert result.data['name'] == args['name']
    assert result.data['work_since'] == args['work_since']
    assert result.data['skill'] == args['skill']
    assert result.data['english_level'] == args['english_level']
    assert result.data['projects'] == args['projects']
    assert result.data['tasks'] == args['tasks']
    assert result.data['stack'] == args['stack']
    assert result.data['frameworks'] == args['frameworks']


developer_url = "http://127.0.0.1:8000/developers/"
