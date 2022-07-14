from rest_framework.viewsets import ModelViewSet
from .seriazliers.simple_serializers import SimpleSerializers
from .models.simple_model import SimpleModel
from django.db import connection, reset_queries
import time
import functools
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from backend.custom_permissions import SimplePermission


# ----------------------------
# from rest_framework_simplejwt.tokens import RefrehToken

# ----------------------------

# heroku config:set DEBUG_COLLECTSTATIC=1
class SimpleViewSet(ModelViewSet):
    queryset = SimpleModel.objects.all()
    serializer_class = SimpleSerializers
    permission_classes = [IsAuthenticated]


class SimpleViewSet2(ModelViewSet):
    queryset = SimpleModel.objects.all()
    serializer_class = SimpleSerializers
    permission_classes = [IsAdminUser]


class SimpleViewSet3(ModelViewSet):
    queryset = SimpleModel.objects.all()
    serializer_class = SimpleSerializers
    permission_classes = [SimplePermission]


def query_debugger(func):
    @functools.wraps(func)
    def inner_func(*args, **kwargs):
        reset_queries()

        start_queries = len(connection.queries)

        start = time.perf_counter()
        result = func(*args, **kwargs)
        end = time.perf_counter()

        end_queries = len(connection.queries)

        print(f"Function : {func.__name__}")
        print(f"Number of Queries : {end_queries - start_queries}")
        print(f"Finished in : {(end - start):.2f}s")
        return result

    return inner_func
