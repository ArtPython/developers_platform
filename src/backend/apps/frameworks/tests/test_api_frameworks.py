import pytest
from rest_framework.response import Response
from .conftests import create_framework, framework_url, create_framework_data, update_framework_data
from rest_framework.status import HTTP_200_OK
from tests.general_actions import update_something, create_something, delete_invalid, delete_valid


@pytest.fixture
def response_result(client) -> Response:
    result = client.get(framework_url)
    return result


def test_get_frameworks(create_framework, response_result) -> None:
    assert response_result.status_code == HTTP_200_OK


def test_frameworks_amount(create_framework, response_result) -> None:
    assert len(response_result.data) == 1


@pytest.mark.django_db
def test_zero_amount(response_result) -> None:
    assert len(response_result.data) == 0


def test_delete_valid_framework(create_framework, client) -> None:
    delete_valid(client, framework_url, create_framework, 1, 1)


@pytest.mark.django_db
def test_delete_invalid_framework(client) -> None:
    delete_invalid(client, framework_url, 1)


def test_create_framework(client, create_framework_data) -> None:
    create_something(client, framework_url, create_framework_data, 1)


def test_update_framework(client, update_framework_data) -> None:
    update_something(client, framework_url, update_framework_data[0], update_framework_data[1], 1, 2)
