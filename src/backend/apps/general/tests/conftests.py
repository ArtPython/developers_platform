# import pytest
# from ..models import Developers
# from rest_framework.test import APIClient
# from mixer.backend.django import mixer
#
#
# @pytest.fixture
# def client(db) -> APIClient:
#     from rest_framework.test import APIClient
#     client = APIClient()
#     return client
#
#
# @pytest.fixture
# def create_developer(db) -> None:
#     mixer.blend('developers.developers')
#
#
# @pytest.fixture
# def create_developer_data(db) -> dict:
#     developer = mixer.blend('developers.developers')
#     # project = mixer.blend('projects.projects')
#     # stack = mixer.blend('languages.languages')
#     # framework = mixer.blend('frameworks.frameworks')
#     data = {
#         "name": developer.name,
#         "work_since": developer.work_since.date(),
#         "skill": developer.skill,
#         "english_level": developer.english_level,
#         "projects": [],  # developer.projects,
#         "tasks": [],  # developer.tasks,
#         "stack": [],  # developer.stack,
#         "frameworks": [],  # developer.frameworks,
#     }
#     return data
#
#
# @pytest.fixture
# def update_developer_data(transactional_db) -> tuple:
#     developer = mixer.cycle(2).blend('developers.developers')
#     data_before = {
#         "name": developer[0].name,
#         "work_since": developer[0].work_since.date(),
#         "skill": developer[0].skill,
#         "english_level": developer[0].english_level,
#         "projects": [],  # developer.projects,
#         "tasks": [],  # developer.tasks,
#         "stack": [],  # developer.stack,
#         "frameworks": [],  # developer.frameworks,
#     }
#     data_after = {
#         "name": developer[1].name,
#         "work_since": developer[1].work_since.date(),
#         "skill": developer[1].skill,
#         "english_level": developer[1].english_level,
#         "projects": [],  # developer.projects,
#         "tasks": [],  # developer.tasks,
#         "stack": [],  # developer.stack,
#         "frameworks": [],  # developer.frameworks,
#     }
#     return data_before, data_after
#
#
# developer_url = "http://127.0.0.1:8000/developers/"
