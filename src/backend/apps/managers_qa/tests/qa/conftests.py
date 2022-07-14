import pytest
from mixer.backend.django import mixer


@pytest.fixture
def create_qa(db) -> None:
    mixer.blend('managers_qa.qaengineer')


@pytest.fixture
def create_qa_data(db) -> dict:
    qa = mixer.blend('managers_qa.qaengineer')
    data = {
        "name": qa.name,
        "skill": qa.skill,
        "work_since": qa.work_since.date(),
        "english_level": qa.english_level,
        "projects": [],
        "tasks": []
    }
    return data


@pytest.fixture
def update_qa_data(db) -> tuple:
    manager = mixer.cycle(2).blend('managers_qa.qaengineer')
    data_before = {
        "name": manager[0].name,
        "skill": manager[0].skill,
        "work_since": manager[0].work_since.date(),
        "english_level": manager[0].english_level,
        "projects": [],
        "tasks": []
    }
    data_after = {
        "name": manager[1].name,
        "skill": manager[1].skill,
        "work_since": manager[1].work_since.date(),
        "english_level": manager[1].english_level,
        "projects": [],
        "tasks": []
    }
    return data_before, data_after


qa_url = "http://127.0.0.1:8000/qa/"
