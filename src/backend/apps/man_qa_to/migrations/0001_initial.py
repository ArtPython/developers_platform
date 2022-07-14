# Generated by Django 3.2 on 2022-04-07 09:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projects', '0002_alter_projects_mark'),
        ('managers_qa', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='QAToProject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stats', models.BooleanField(default=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.projects')),
                ('qa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='managers_qa.qaengineer')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ManagerToProject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stats', models.BooleanField(default=True)),
                ('manager', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='managers_qa.managers')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.projects')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]