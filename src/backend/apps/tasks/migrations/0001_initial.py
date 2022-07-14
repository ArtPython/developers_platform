# Generated by Django 3.2 on 2022-04-07 06:48

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projects', '0002_alter_projects_mark'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('status', models.CharField(choices=[('open', 'open'), ('close', 'close')], default='open', max_length=7)),
                ('about', models.TextField(default='about this task')),
                ('purpose', models.CharField(choices=[('developer', 'developer'), ('qa', 'qa'), ('manager', 'manager')], default='developer', editable=False, max_length=9)),
                ('expire', models.DateField(default=django.utils.timezone.now)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='projects.projects')),
            ],
            options={
                'verbose_name_plural': 'Tasks',
            },
        ),
    ]