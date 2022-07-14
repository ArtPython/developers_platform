import pytest
from rest_framework.response import Response
from .conftests import create_manager, managers_url, create_manager_data, update_manager_data, \
    create_manager_data_with_tasks, create_manager_data_without_tasks, create_manager_function
from rest_framework.status import HTTP_200_OK
from tests.general_actions import update_something, create_something, delete_invalid, delete_valid
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED


@pytest.fixture
def response_result(client) -> Response:
    result = client.get(managers_url)
    return result


def test_get_managers(create_manager, response_result) -> None:
    assert response_result.status_code == HTTP_200_OK


def test_managers_amount(create_manager, response_result) -> None:
    assert len(response_result.data) == 1


@pytest.mark.django_db
def test_zero_amount(response_result) -> None:
    assert len(response_result.data) == 0


def test_delete_valid_manager(create_manager, client) -> None:
    delete_valid(client, managers_url, create_manager, 1, 1)


@pytest.mark.django_db
def test_delete_invalid_framework(client) -> None:
    delete_invalid(client, managers_url, 1)


def test_update_manager(client, update_manager_data) -> None:
    update_something(client, managers_url, update_manager_data[0], update_manager_data[1], 1, 2)


def test_create_manager_with_tasks(client, create_manager_data_with_tasks):
    create_manager_function(client, create_manager_data_with_tasks, [1], [5])


def test_create_manager_without_tasks(client, create_manager_data_without_tasks):
    create_manager_function(client, create_manager_data_without_tasks, [], [])

# def test_create_manager(client, create_manager_data) -> None:
#     create_something(client, managers_url, create_manager_data, 1)
