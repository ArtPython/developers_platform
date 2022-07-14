import pytest
from django.contrib.auth.models import User
from mixer.backend.django import mixer
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED


@pytest.fixture
def create_user(db) -> None:
    User.objects.create(
        username="user",
        password="password"
    )


@pytest.fixture
def create_tasks(db) -> None:
    mixer.blend('projects.projects')


@pytest.fixture
def create_developer_with_language(db) -> dict:
    developer = mixer.blend('developers.developers')
    stack = mixer.blend('languages.languages')
    data = {
        "name": developer.name,
        "work_since": developer.work_since.date(),
        "skill": developer.skill,
        "english_level": developer.english_level,
        "projects": [],  # developer.projects,
        "tasks": [],  # developer.tasks,
        "stack": [stack.id],  # developer.stack,
        "frameworks": [],  # developer.frameworks,
    }
    return data


@pytest.fixture
def create_developer_without_language(db) -> dict:
    developer = mixer.blend('developers.developers')

    data = {
        "name": developer.name,
        "work_since": developer.work_since.date(),
        "skill": developer.skill,
        "english_level": developer.english_level,
        "projects": [],
        "tasks": [],
        "stack": [],
        "frameworks": [],
    }
    return data


def create(client, data, lan_num, stack_lan):
    url = developer_url
    result_before = client.get(url)
    result = client.post(url, data, content_type="application/json")
    result_data = client.get(f"{url}2/")
    result_after = client.get(url)
    assert result_before.status_code == HTTP_200_OK
    assert len(result_before.data) == lan_num
    assert result.status_code == HTTP_201_CREATED
    assert result_after.status_code == HTTP_200_OK
    assert len(result_after.data) == lan_num + 1
    assert result_data.data["name"] == data["name"]
    assert result_data.data["stack"] == data["stack"]
    assert len(result_data.data["stack"]) == stack_lan


developer_url = 'http://127.0.0.1:8000/developers/'
