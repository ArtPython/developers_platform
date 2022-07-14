# Generated by Django 3.2 on 2022-04-06 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SimpleModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='hello', max_length=30)),
                ('points', models.PositiveIntegerField(default=7)),
            ],
            options={
                'verbose_name_plural': 'SimpleModel',
            },
        ),
    ]
