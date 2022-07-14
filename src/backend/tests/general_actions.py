import pytest
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT, \
    HTTP_404_NOT_FOUND
# from django.test import override_settings


@pytest.fixture
def response_result(client, url) -> Response:
    result = client.get(url)
    return result


def get_something(response_result, *args) -> None:
    assert response_result.status_code == HTTP_200_OK


def delete_valid(client, *args) -> None:
    url = args[0]
    result_before = client.get(url)
    result = client.delete(f"{url}{args[2]}/")
    result_after = client.get(url)
    assert result_before.status_code == HTTP_200_OK
    assert len(result_before.data) == args[3]
    assert result.status_code == HTTP_204_NO_CONTENT
    assert result_after.status_code == HTTP_200_OK
    assert len(result_after.data) == args[3] - 1


@pytest.mark.django_db
def delete_invalid(client, *args) -> None:
    url = args[0]
    result = client.delete(f"{url}{args[1]}/")
    assert result.status_code == HTTP_404_NOT_FOUND


def create_something(client, *args) -> None:
    url = args[0]
    result_before = client.get(url)
    result = client.post(url, args[1], content_type="application/json")
    result_after = client.get(url)
    assert result_before.status_code == HTTP_200_OK
    assert len(result_before.data) == args[2]
    assert result.status_code == HTTP_201_CREATED
    assert result_after.status_code == HTTP_200_OK
    assert len(result_after.data) == args[2] + 1


def update_something(client, *args) -> None:
    url = args[0]
    before, after = args[1], args[2]
    result_before = client.get(f"{url}{args[3]}/")
    result = client.get(url)
    result_update = client.put(f"{url}{args[3]}/", after,
                               content_type="application/json")
    result_after = client.get(f"{url}{args[3]}/")
    assert result.status_code == HTTP_200_OK
    assert len(result.data) == args[4]
    assert result_before.status_code == HTTP_200_OK
    assert result_before.data["name"] == before["name"]
    assert result_before.data["name"] != after["name"]
    assert result_update.status_code == HTTP_200_OK
    assert result_after.status_code == HTTP_200_OK
    assert result_after.data["name"] != before["name"]
    assert result_after.data["name"] == after["name"]
