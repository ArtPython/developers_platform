import pytest
from .conftests import create_developer_with_language, developer_url, create_developer_without_language, create
from rest_framework.response import Response


@pytest.fixture
def response_result(client) -> Response:
    result = client.get(developer_url)
    return result


# def test_create_developer(client, create_developer_with_language) -> None:
#     create(client, create_developer_with_language, 1, 1)


def test_create_developer_without_language(client, create_developer_without_language) -> None:
    create(client, create_developer_without_language, 1, 0)
