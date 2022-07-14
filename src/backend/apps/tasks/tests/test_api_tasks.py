import pytest
from rest_framework.response import Response
from .conftests import create_tasks, create_tasks_data, update_tasks_data, task_url
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED
from tests.general_actions import update_something, create_something, delete_invalid, delete_valid


@pytest.fixture
def response_result(client) -> Response:
    result = client.get(task_url)
    return result


def test_get_tasks(create_tasks, response_result) -> None:
    assert response_result.status_code == HTTP_200_OK


def test_tasks_amount(create_tasks, response_result) -> None:
    assert len(response_result.data) == 6


def test_get_particular_task(create_tasks, client) -> None:
    result = client.get(f"{task_url}1/")
    assert result.status_code == HTTP_200_OK


@pytest.mark.django_db
def test_zero_amount(response_result) -> None:
    assert len(response_result.data) == 0


def test_delete_valid_task(create_tasks, client) -> None:
    delete_valid(client, task_url, create_tasks, 1, 6)


@pytest.mark.django_db
def test_delete_invalid_task(client) -> None:
    delete_invalid(client, task_url, 1)


def test_create_task(client, create_tasks_data) -> None:
    create_something(client, task_url, create_tasks_data, 6)

# def test_update_tasks(client, update_tasks_data) -> None:
# update_something(client, task_url, update_tasks_data[0], update_tasks_data[1], 6, 7)
