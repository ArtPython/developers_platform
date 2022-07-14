import pytest
from rest_framework.response import Response
from .conftests import create_dev_to_language, to_language_url, created_language_to_data, \
    update_to_language_data  # , create_to_language_data
from rest_framework.status import HTTP_200_OK

# from .conftests import create_language, language_url, create_language_data, update_language_data
from tests.general_actions import update_something, create_something, delete_invalid, delete_valid


#
#
@pytest.fixture
def response_result(client) -> Response:
    result = client.get(to_language_url)
    return result


def test_get_to_languages(create_dev_to_language, response_result) -> None:
    assert response_result.status_code == HTTP_200_OK


def test_languages_amount(create_dev_to_language, response_result) -> None:
    assert len(response_result.data) == 1


@pytest.mark.django_db
def test_zero_amount_to_language(response_result) -> None:
    assert len(response_result.data) == 0


def test_delete_valid_language_to(client, create_dev_to_language) -> None:
    delete_valid(client, to_language_url, create_dev_to_language, 1, 1)


@pytest.mark.django_db
def test_delete_invalid_language_to(client) -> None:
    delete_invalid(client, to_language_url, 1)


def test_to_language_data(client, created_language_to_data) -> None:
    result = client.get(f"{to_language_url}1/")
    assert result.status_code == HTTP_200_OK
    assert result.data["developer"] == created_language_to_data["developer"]
    assert result.data["language"] == created_language_to_data["language"]
    assert result.data["mark"] == created_language_to_data["mark"]


# @pytest.mark.django_db
# def test_update(client, created_language_to_data, update_to_language_data) -> None:
#     result = client.get(f"{to_language_url}1/")
#     assert result.status_code == HTTP_200_OK
#     assert result.data["developer"] == created_language_to_data["developer"]
#     assert result.data["language"] == created_language_to_data["language"]
#     assert result.data["mark"] == created_language_to_data["mark"]
#     update = client.put(f"{to_language_url}1/", content_type="application/json")
#     print(created_language_to_data)
#     print('1111111111')
#     print(update_to_language_data)
#     assert update.status_code == HTTP_200_OK
#     result_after = client.get(f"{to_language_url}1/")
#     assert result_after.status_code == HTTP_200_OK
#     assert result_after.data["developer"] == update_to_language_data["developer"]
#     assert result_after.data["language"] == update_to_language_data["language"]
#     assert result_after.data["mark"] == update_to_language_data["mark"]

#
#
# def test_create_language_to(client, create_to_language_data) -> None:
#     create_something(client, to_language_url, create_to_language_data, 1)
#
#
# def test_update_language(client, update_language_data) -> None:
#     update_something(client, language_url, update_language_data[0], update_language_data[1], 1, 2)
