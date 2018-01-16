# -*- coding: utf-8 -*-
# Generated by Django 1.9.13 on 2018-01-16 15:23
from __future__ import unicode_literals

from django.db import models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orchestra', '0073_remove_worker_staffing_priority'),
    ]

    operations = [
        migrations.AddField(
                model_name='todo',
                name='start_by_datetime',
                field=models.DateTimeField(blank=True, null=True),
            ),
        migrations.AddField(
            model_name='todo',
            name='due_datetime',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
