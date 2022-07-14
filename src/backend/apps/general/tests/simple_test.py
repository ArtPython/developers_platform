import pytest
from rest_framework.status import HTTP_200_OK, HTTP_401_UNAUTHORIZED, HTTP_403_FORBIDDEN, HTTP_201_CREATED
from django.contrib.auth.models import User
import django.contrib.auth

url = 'http://127.0.0.1:8000/simple/'
url2 = 'http://127.0.0.1:8000/simple2/'
url3 = 'http://127.0.0.1:8000/simple3/'


@pytest.fixture
def create_user():
    User = django.contrib.auth.get_user_model()
    user = User.objects.create_user('username', password='userpassword')
    user.is_superuser = False
    user.is_staff = False
    user.save()


@pytest.fixture
def create_super_user():
    User = django.contrib.auth.get_user_model()
    user = User.objects.create_user('username2', password='userpassword2')
    user.is_superuser = True
    user.is_staff = True
    user.save()


@pytest.fixture
def get_token(db, client, create_user):
    data = {
        "username": "username",
        "password": "userpassword"
    }
    res = client.post('http://127.0.0.1:8000/api/token/', data)
    toke = res.data["access"]
    result = f'Bearer {toke}'
    return result


@pytest.fixture
def get_super_token(db, client, create_super_user):
    data = {
        "username": "username2",
        "password": "userpassword2"
    }
    res = client.post('http://127.0.0.1:8000/api/token/', data)
    toke = res.data["access"]
    result = f'Bearer {toke}'
    return result


@pytest.mark.django_db
def test_unauthorized(client) -> None:
    response = client.get(url)
    assert response.status_code == HTTP_401_UNAUTHORIZED
# id
# ABJBnNSzuqvUwsLGIfEgsVlpbdmveEISlv6Z2BPxdliTN0UerV
# secret
# rG9RFdOUNXh8AyvTowydtZvQQs3ZQPZlWKywBPFJ
# @pytest.mark.django_db
# def test_authorized_user(client, get_token) -> None:
#     token = get_token
#     response = client.get(url, HTTP_AUTHORIZATION=token)
#     assert response.status_code == HTTP_200_OK
#
#
# @pytest.mark.django_db
# def test_authorized_user_superuser(get_token, client) -> None:
#     token = get_token
#     response = client.get(url2, HTTP_AUTHORIZATION=token)
#     assert response.status_code == HTTP_403_FORBIDDEN
#
#
# @pytest.mark.django_db
# def test_superuser(get_super_token, client) -> None:
#     token = get_super_token
#     response = client.get(url2, HTTP_AUTHORIZATION=token)
#     assert response.status_code == HTTP_200_OK
#
#
# @pytest.mark.django_db
# def test_custom_permission(db, client):
#     res_1 = client.get(url3)
#     res_2 = client.post(url3, {"name": "name", "points": 1})
#     res_3 = client.get(f"{url3}1/")
#     res_4 = client.put(f"{url3}1/", {"name": "name", "points": 2})
#     assert res_1.status_code == HTTP_200_OK
#     assert res_2.status_code == HTTP_201_CREATED
#     assert res_3.status_code == HTTP_200_OK
#     assert res_4.status_code == HTTP_401_UNAUTHORIZED
