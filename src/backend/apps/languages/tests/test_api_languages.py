import pytest
from rest_framework.response import Response
from .conftests import create_language, language_url, create_language_data, update_language_data
from rest_framework.status import HTTP_200_OK
from tests.general_actions import update_something, create_something, delete_invalid, delete_valid


@pytest.fixture
def response_result(client) -> Response:
    result = client.get(language_url)
    return result


def test_get_languages(create_language, response_result) -> None:
    assert response_result.status_code == HTTP_200_OK


def test_languages_amount(create_language, response_result) -> None:
    assert len(response_result.data) == 1


@pytest.mark.django_db
def test_zero_amount(response_result) -> None:
    assert len(response_result.data) == 0


def test_delete_valid_language(client, create_language) -> None:
    delete_valid(client, language_url, create_language, 1, 1)


@pytest.mark.django_db
def test_delete_invalid_language(client) -> None:
    delete_invalid(client, language_url, 1)


def test_create_language(client, create_language_data) -> None:
    create_something(client, language_url, create_language_data, 1)


def test_update_language(client, update_language_data) -> None:
    update_something(client, language_url, update_language_data[0], update_language_data[1], 1, 2)
