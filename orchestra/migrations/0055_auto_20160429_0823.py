# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-29 08:23
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orchestra', '0054_add_slack_ids'),
    ]

    operations = [
        migrations.RemoveField(  # manually-reviewed
            model_name='staffingrequest',
            name='worker',
        ),
        migrations.AddField(
            model_name='staffingrequest',
            name='communication_preference',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='orchestra.CommunicationPreference'),
        ),
        migrations.AlterField(
            model_name='communicationpreference',
            name='communication_type',
            field=models.IntegerField(choices=[(0, 'task_status_change'), (1, 'new_task_available')]),
        ),
    ]
