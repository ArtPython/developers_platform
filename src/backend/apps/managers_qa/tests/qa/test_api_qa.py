import pytest
from rest_framework.response import Response
from .conftests import qa_url, create_qa, create_qa_data, update_qa_data
from rest_framework.status import HTTP_200_OK
from tests.general_actions import update_something, create_something, delete_invalid, delete_valid


@pytest.fixture
def response_result(client) -> Response:
    result = client.get(qa_url)
    return result


def test_get_qa(create_qa, response_result) -> None:
    assert response_result.status_code == HTTP_200_OK


def test_qa_amount(create_qa, response_result) -> None:
    assert len(response_result.data) == 1


@pytest.mark.django_db
def test_zero_amount(response_result) -> None:
    assert len(response_result.data) == 0


def test_delete_valid_qa(create_qa, client) -> None:
    delete_valid(client, qa_url, create_qa, 1, 1)


@pytest.mark.django_db
def test_delete_invalid_qa(client) -> None:
    delete_invalid(client, qa_url, 1)


def test_create_qa(client, create_qa_data) -> None:
    create_something(client, qa_url, create_qa_data, 1)


# def test_update_qa(client, update_qa_data) -> None:
#     update_something(client, qa_url, update_qa_data[0], update_qa_data[1], 1, 2)
