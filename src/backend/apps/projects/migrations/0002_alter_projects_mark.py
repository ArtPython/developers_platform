# Generated by Django 3.2 on 2022-04-07 06:48

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='mark',
            field=models.PositiveIntegerField(default=6, validators=[django.core.validators.MaxValueValidator(12), django.core.validators.MinValueValidator(1)]),
        ),
    ]