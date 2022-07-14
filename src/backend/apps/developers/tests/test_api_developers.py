import pytest
from rest_framework.response import Response
from .conftests import create_developer, developer_url, create_developer_data, update_developer_data, create_dev
from rest_framework.status import HTTP_200_OK
from tests.general_actions import update_something, create_something, delete_invalid, delete_valid


@pytest.fixture
def response_result(client) -> Response:
    result = client.get(developer_url)
    return result


def test_get_developers(create_developer, response_result) -> None:
    assert response_result.status_code == HTTP_200_OK


def test_developers_amount(create_developer, response_result) -> None:
    assert len(response_result.data) == 1


@pytest.mark.django_db
def test_zero_amount(response_result) -> None:
    assert len(response_result.data) == 0


def test_delete_valid_developer(client, create_developer) -> None:
    delete_valid(client, developer_url, create_developer, 1, 1)


@pytest.mark.django_db
def test_delete_invalid_developer(client) -> None:
    delete_invalid(client, developer_url, 1)


def test_mixer(client, create_dev) -> None:
    res = client.get(developer_url)
    res_data = client.get(f"{developer_url}1/")
    assert res.status_code == 200
    assert len(res.data) == 1
    assert res_data.data['name'] == 'super developer'


def test_create_developer(client, create_developer_data) -> None:
    create_something(client, developer_url, create_developer_data, 1)
    # create_smt(client, developer_url, create_developer_data)


def test_update_developer(client, update_developer_data) -> None:
    update_something(client, developer_url, update_developer_data[0], update_developer_data[1], 1, 2)
