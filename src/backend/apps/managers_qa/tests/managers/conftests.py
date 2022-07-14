import pytest
from mixer.backend.django import mixer
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED


@pytest.fixture
def create_manager(db) -> None:
    mixer.blend('managers_qa.managers')


def mixer_data(manager, num) -> dict:
    data = {
        "name": manager[num].name,
        "skill": manager[num].skill,
        "work_since": manager[num].work_since.date(),
        "english_level": manager[num].english_level,
        "projects": [],
        "tasks": []
    }
    return data


@pytest.fixture
def create_manager_data(db) -> dict:
    manager = mixer.cycle(1).blend('managers_qa.managers')
    return mixer_data(manager, 0)


@pytest.fixture
def update_manager_data(db) -> tuple:
    manager = mixer.cycle(2).blend('managers_qa.managers')
    data_before = mixer_data(manager, 0)
    data_after = mixer_data(manager, 1)
    return data_before, data_after


@pytest.fixture
def create_manager_data_with_tasks(db) -> dict:
    mixer.blend('projects.projects', mark=1)
    manager = mixer.blend('managers_qa.managers', skill=10)
    data = {
        "name": manager.name,
        "skill": manager.skill,
        "work_since": manager.work_since.date(),
        "english_level": manager.english_level,
        "projects": [1],
        "tasks": [task for task in range(1, 6)]
    }
    return data


@pytest.fixture
def create_manager_data_without_tasks(create_manager_data_with_tasks) -> dict:
    data = create_manager_data_with_tasks
    data["projects"] = []
    return data


def create_manager_function(client, data, projects, tasks):
    result_before = client.get(managers_url)
    result = client.post(managers_url, data)
    result_amount = client.get(managers_url)
    result_after = client.get(f"{managers_url}2/")
    assert result_before.status_code == HTTP_200_OK
    assert len(result_before.data) == 1
    assert result.status_code == HTTP_201_CREATED
    assert len(result_amount.data) == 2
    assert result_after.status_code == HTTP_200_OK
    assert result_after.data["skill"] == 10
    assert result_after.data["projects"] == projects
    assert result_after.data["tasks"] == tasks


managers_url = "http://127.0.0.1:8000/managers/"
