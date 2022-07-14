from django.contrib import admin
from .models import DevToProject, DevToLanguage, DevToFramework

admin.site.register(DevToProject)
admin.site.register(DevToLanguage)
admin.site.register(DevToFramework)
