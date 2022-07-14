from .manager_serializier import ManagerDetailSerializers
from .qa_serializer import QADetailSerializers
from ..models import Managers, QAEngineer


class ManagerDetailSerializersForProjects(ManagerDetailSerializers):
    class Meta:
        model = Managers
        exclude = ['name', 'user', 'photo', 'projects', 'work_since', 'skill', 'english_level']


class QADetailSerializersForProjects(QADetailSerializers):
    class Meta:
        model = QAEngineer
        exclude = ['name', 'user', 'photo', 'projects', 'work_since', 'skill', 'english_level']
