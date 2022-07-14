from django.db import models


class SimpleModel(models.Model):
    name = models.CharField(max_length=30, default="hello")
    points = models.PositiveIntegerField(default=7)

    def __str__(self) -> str:
        return str(self.name)

    class Meta:
        verbose_name_plural = "SimpleModel"
