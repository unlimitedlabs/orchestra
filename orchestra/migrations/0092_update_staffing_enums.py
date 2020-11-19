# Generated by Django 2.2.13 on 2020-11-19 19:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orchestra', '0091_workerpreferences'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staffbotrequest',
            name='request_cause',
            field=models.IntegerField(choices=[(0, 'user'), (1, 'task policy'), (2, 'restaff')]),
        ),
        migrations.AlterField(
            model_name='staffingrequestinquiry',
            name='communication_method',
            field=models.IntegerField(choices=[(0, 'slack'), (1, 'email'), (2, 'already opted in')]),
        ),
    ]