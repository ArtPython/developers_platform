# from rest_framework.test import APIClient
# import pytest
# from rest_framework.status import HTTP_429_TOO_MANY_REQUESTS, HTTP_200_OK
#
#
# @pytest.fixture
# def client(db) -> APIClient:
#     from rest_framework.test import APIClient
#     client = APIClient()
#     return client
#
#
# def test_throttling(client) -> None:
#     """
#     amount of request should be less than 100 in a day
#     """
#     amount_of_responses = 0
#     response = ''
#     for request in range(150):
#         get_request = client.get('http://127.0.0.1:8000/languages/')
#         if get_request.status_code == HTTP_200_OK:
#             amount_of_responses += 1
#         else:
#             response = get_request.status_code
#     assert amount_of_responses == 100
#     assert response == HTTP_429_TOO_MANY_REQUESTS
