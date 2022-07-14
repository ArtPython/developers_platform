# Generated by Django 3.2 on 2022-04-06 14:58

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('languages', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, default='description of <django.db.models.fields.CharField>', null=True)),
                ('mark', models.PositiveIntegerField(default=1, validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(1)])),
                ('status', models.CharField(choices=[('open', 'open'), ('close', 'close')], default='open', max_length=100)),
                ('fullstack', models.PositiveIntegerField(default=1)),
                ('backend', models.PositiveIntegerField(default=1)),
                ('frontend', models.PositiveIntegerField(default=1)),
                ('manager', models.PositiveIntegerField(default=1)),
                ('qa', models.PositiveIntegerField(default=1)),
                ('stack', models.ManyToManyField(default=None, to='languages.Languages')),
            ],
            options={
                'verbose_name_plural': 'Projects',
                'ordering': ['-id'],
            },
        ),
    ]