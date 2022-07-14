from django.db import models
from apps.projects.models import Projects, project_status
from django.utils.timezone import now

tasks_purpose = [
    ('developer', 'developer'),
    ('qa', 'qa'),
    ('manager', 'manager'),
]


class Tasks(models.Model):
    name = models.CharField(max_length=100)
    project = models.ForeignKey(Projects, on_delete=models.CASCADE, blank=True, null=True)
    status = models.CharField(max_length=7, choices=project_status, default='open')
    about = models.TextField(default='about this task')
    purpose = models.CharField(max_length=9, choices=tasks_purpose,
                               default='developer')
    expire = models.DateField(default=now)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Tasks'
