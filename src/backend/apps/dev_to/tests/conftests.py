import pytest
from ..models import DevToProject, DevToLanguage, DevToFramework
from mixer.backend.django import mixer


@pytest.fixture
def create_dev_to_language(db) -> None:
    mixer.blend('dev_to.devtolanguage')


@pytest.fixture
def create_dev_to_framework(db) -> None:
    mixer.blend('dev_to.devtoframework')


@pytest.fixture
def create_dev_to_project(db) -> None:
    mixer.blend('dev_to.devtoproject')


@pytest.fixture
def created_language_to_data(create_dev_to_language) -> dict:
    to_language = DevToLanguage.objects.get(id=1)
    data = {
        "developer": to_language.developer.id,
        "language": to_language.language.id,
        "mark": to_language.mark,
    }
    return data


@pytest.fixture
def update_to_language_data(db, created_language_to_data) -> dict:
    data = created_language_to_data.copy()
    data["mark"] = 5
    # data = {
    #     "language": 1,
    #     "developer": 1,
    #     "mark": 5
    # }
    return data


# def create_language_to(to_language, num, language, num_lang) -> dict:
#     data = {
#         "developer": to_language[num].developer.id,
#         "mark": to_language[num].mark,
#         "language": 2,
#     }
#     return data


# @pytest.fixture
# def create_to_language_data(db) -> dict:
#     to_language = mixer.cycle(1).blend('dev_to.devtolanguage')
#     language = mixer.cycle(1).blend('languages.languages')
#     data = {
#
#     }
#     # return create_language_to(to_language, 0, language, 0)


# @pytest.fixture
# def create_language_data(db) -> dict:
#     language = mixer.blend('languages.languages')
#     data = {
#         "name": language.name,
#         "purpose": language.purpose
#     }
#     return data
#
#
# @pytest.fixture
# def update_language_data(db) -> tuple:
#     languages = mixer.cycle(2).blend('languages.languages')
#     data_before = {
#         "name": languages[0].name,
#         "purpose": languages[0].purpose
#     }
#     data_after = {
#         "name": languages[1].name,
#         "purpose": languages[1].purpose
#     }
#     return data_before, data_after
#

to_language_url = "http://127.0.0.1:8000/dev-to-language/"
to_framework_url = "http://127.0.0.1:8000/dev-to-framework/"
to_project_url = "http://127.0.0.1:8000/dev-to-project/"
