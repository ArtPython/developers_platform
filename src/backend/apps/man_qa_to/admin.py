from django.contrib import admin
from .models import QAToProject, ManagerToProject

admin.site.register(QAToProject)
admin.site.register(ManagerToProject)
