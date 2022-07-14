from django.contrib import admin
from .models import Developers


class DevelopersAdmin(admin.ModelAdmin):
    # fields = ['photo', 'name', 'purpose']  # ---> order
    fieldsets = [  # ---> for retrieve
        (None, {'fields': ['photo']}),
        ('main info', {'fields': ['name', 'work_since', 'user']}),
        ('technologies info', {'fields': ['stack', 'frameworks']}),
        ('projects info', {'fields': ['projects', 'tasks']}),
        ('skill info', {'fields': ['skill', 'english_level']}),
    ]
    list_display = ('name', 'skill', 'role')  # ---> see in a list
    list_filter = ['name']
    search_fields = ['english_level']
    list_display_links = ('name',)


admin.site.register(Developers, DevelopersAdmin)
# admin.site.register(Developers)
