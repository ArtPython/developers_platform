from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from apps.developers.models import Developers
from apps.developers.serializers.developer_serializer import DevelopersSerializers


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username
        token['admin'] = user.is_superuser
        if Developers.objects.filter(user=user):
            token['info'] = DevelopersSerializers(Developers.objects.filter(
                user=user), many=True).data[0]
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
