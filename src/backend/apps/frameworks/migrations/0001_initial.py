# Generated by Django 3.2 on 2022-04-06 13:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('languages', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Frameworks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('photo', models.ImageField(blank=True, default=None, null=True, upload_to='frameworks')),
                ('language', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='languages.languages')),
            ],
            options={
                'verbose_name_plural': 'Frameworks',
            },
        ),
    ]
