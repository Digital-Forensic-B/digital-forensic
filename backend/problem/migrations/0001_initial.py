# Generated by Django 5.0 on 2024-08-13 02:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Problem',
            fields=[
                ('problemID', models.AutoField(primary_key=True, serialize=False)),
                ('pType', models.CharField(max_length=128)),
                ('pTitle', models.CharField(max_length=128)),
                ('pContent', models.TextField()),
                ('pFile', models.CharField(max_length=500)),
                ('pAnswer', models.CharField(max_length=500)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('userID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.user')),
            ],
            options={
                'db_table': 'problem',
            },
        ),
    ]
