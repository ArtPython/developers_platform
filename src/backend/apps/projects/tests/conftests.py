import pytest
from rest_framework.test import APIClient
from mixer.backend.django import mixer


# from languages.models.language_model import Languages


@pytest.fixture
def client(db) -> APIClient:
    from rest_framework.test import APIClient
    client = APIClient()
    return client


@pytest.fixture
def create_project(db) -> None:
    mixer.blend('projects.projects')


@pytest.fixture
def create_project_data(db) -> dict:
    language = mixer.blend('languages.languages')
    project = mixer.blend('projects.projects')
    data = {
        "name": project.name,
        "description": project.description,
        "mark": project.mark,
        "status": project.status,
        "fullstack": project.fullstack,
        "backend": project.backend,
        "frontend": project.frontend,
        "qa": project.qa,
        "manager": project.manager,
        "stack": [language.id]
    }
    return data


@pytest.fixture
def update_project_data(db) -> tuple:
    language = mixer.blend('languages.languages')
    project = mixer.cycle(2).blend('projects.projects')
    data_before = {
        "name": project[0].name,
        "description": project[0].description,
        "mark": project[0].mark,
        "status": project[0].status,
        "fullstack": project[0].fullstack,
        "backend": project[0].backend,
        "frontend": project[0].frontend,
        "qa": project[0].qa,
        "manager": project[0].manager,
        "stack": [language.id]
    }
    data_after = {
        "name": project[1].name,
        "description": project[1].description,
        "mark": project[1].mark,
        "status": project[1].status,
        "fullstack": project[1].fullstack,
        "backend": project[1].backend,
        "frontend": project[1].frontend,
        "qa": project[1].qa,
        "manager": project[1].manager,
        "stack": [language.id]
    }
    return data_before, data_after


project_url = "http://127.0.0.1:8000/projects/"
