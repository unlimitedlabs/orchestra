# Generated by Django 2.2.9 on 2020-03-30 19:21

from django.db import migrations, models

def migrate_request_status(apps, schema_editor):
    StaffBotRequest = apps.get_model('orchestra', 'StaffBotRequest')
    StaffingResponse = apps.get_model('orchestra', 'StaffingResponse')
    StaffingRequestInquiry = apps.get_model('orchestra', 'StaffingRequestInquiry')

    DONE_SENDING_INQUIRIES = 1
    CLOSED = 2

    requests = (StaffBotRequest.objects.all()
                .exclude(status=CLOSED))
    for request in requests:
        responses = StaffingResponse.objects.filter(
                        request_inquiry__request=request)
        has_winner = responses.filter(is_winner=True).exists()
        if has_winner:
            request.status = CLOSED
        elif request.status == DONE_SENDING_INQUIRIES:
            inquiries = (
                StaffingRequestInquiry.objects.filter(request=request)
            ).distinct()
            num_inquired_workers = len(
                set(inquiries.values_list(
                    'communication_preference__worker__id', flat=True)
                    )
            )
            responded_inquiries = inquiries.filter(
                responses__isnull=False).distinct()
            num_responded_workers = len(
                set(responded_inquiries.values_list(
                    'communication_preference__worker__id', flat=True)
                    )
            )

            if num_responded_workers >= num_inquired_workers:
                request.status = CLOSED
    StaffBotRequest.objects.bulk_update(list(requests), ['status'])


class Migration(migrations.Migration):

    dependencies = [
        ('orchestra', '0082_task_tags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staffbotrequest',
            name='status',
            field=models.IntegerField(choices=[(0, 'sending inquiries'), (1, 'done sending inquiries'), (2, 'closed')], default=0),  # append-only
        ),
        migrations.RunPython(migrate_request_status),  # manually-reviewed
    ]