from django.contrib import admin
from .models import Languages


class LanguagesAdmin(admin.ModelAdmin):
    # fields = ['photo', 'name', 'purpose']  # ---> order
    fieldsets = [
        (None, {'fields': ['photo']}),
        ('main information', {'fields': ['name', 'purpose']}),
    ]
    list_display = ('name', 'purpose')


admin.site.register(Languages, LanguagesAdmin)
