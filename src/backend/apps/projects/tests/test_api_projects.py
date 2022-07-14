import pytest
from rest_framework.response import Response
from .conftests import create_project, project_url, create_project_data, update_project_data
from rest_framework.status import HTTP_200_OK, HTTP_404_NOT_FOUND, HTTP_204_NO_CONTENT, \
    HTTP_201_CREATED


@pytest.fixture
def response_result(client) -> Response:
    result = client.get(project_url)
    return result


def test_get_projects(create_project, response_result) -> None:
    assert response_result.status_code == HTTP_200_OK


def test_projects_amount(create_project, response_result) -> None:
    assert len(response_result.data) == 1


def test_get_particular_project(create_project, client) -> None:
    result = client.get(f"{project_url}1/")
    assert result.status_code == HTTP_200_OK


@pytest.mark.django_db
def test_zero_amount(response_result) -> None:
    assert len(response_result.data) == 0


def test_delete_valid_language(create_project, client) -> None:
    url = project_url
    result_before = client.get(url)
    result = client.delete(f"{url}1/")
    result_after = client.get(url)
    assert result_before.status_code == HTTP_200_OK
    assert len(result_before.data) == 1
    assert result.status_code == HTTP_204_NO_CONTENT
    assert result_after.status_code == HTTP_200_OK
    assert len(result_after.data) == 0


@pytest.mark.django_db
def test_delete_invalid_language(client) -> None:
    result = client.delete(f"{project_url}1/")
    assert result.status_code == HTTP_404_NOT_FOUND


def test_create_project(client, create_project_data) -> None:
    result_before = client.get(project_url)
    result = client.post(project_url, create_project_data, content_type="application/json")
    result_after = client.get(project_url)
    assert result_before.status_code == HTTP_200_OK
    assert len(result_before.data) == 1
    assert result.status_code == HTTP_201_CREATED
    assert result_after.status_code == HTTP_200_OK
    assert len(result_after.data) == 2


def test_update_language(client, update_project_data) -> None:
    result_before = client.get(f"{project_url}1/")
    result = client.get(project_url)
    result_update = client.put(f"{project_url}1/", update_project_data[1],
                               content_type="application/json")
    result_after = client.get(f"{project_url}1/")
    assert result.status_code == HTTP_200_OK
    assert len(result.data) == 2
    assert result_before.status_code == HTTP_200_OK
    assert result_before.data["name"] == update_project_data[0]["name"]
    assert result_before.data["name"] != update_project_data[1]["name"]
    assert result_update.status_code == HTTP_200_OK
    assert result_after.status_code == HTTP_200_OK
    assert result_after.data["name"] != update_project_data[0]["name"]
    assert result_after.data["name"] == update_project_data[1]["name"]
