# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-06 21:57
from __future__ import unicode_literals

from operator import itemgetter

from dateutil.parser import parse
from django.db import migrations, models

# NOTE(jrbotros): change import or copy into migration if code moves/changes
from orchestra.tests.helpers.iterations import verify_iterations

import logging
logger = logging.getLogger(__name__)


class SnapshotType:
    SUBMIT = 0
    ACCEPT = 1
    REJECT = 2

class IterationStatus:
    PROCESSING = 0
    REQUESTED_REVIEW = 1
    PROVIDED_REVIEW = 2

class AssignmentStatus:
    PROCESSING = 0
    SUBMITTED = 1
    FAILED = 2

# Map snapshot types onto iteration statuses
snapshot_type_to_iteration_status = {
    SnapshotType.SUBMIT: IterationStatus.REQUESTED_REVIEW,
    SnapshotType.ACCEPT: IterationStatus.REQUESTED_REVIEW,
    SnapshotType.REJECT: IterationStatus.PROVIDED_REVIEW,
}

def get_ordered_snapshots(task):
    task_snapshots = []
    for assignment in task.assignments.all():
        assignment_snapshots = assignment.snapshots.get('snapshots')
        if assignment_snapshots is None:
            continue
        for assignment_snap_index, snapshot in enumerate(assignment_snapshots):
            snapshot['assignment'] = assignment
            # Keep track of the snapshot's index relative to the assignment
            snapshot['assignment_snap_index'] = assignment_snap_index
            task_snapshots.append(snapshot)
    return sorted(task_snapshots, key=itemgetter('datetime'))


def snapshots_to_iterations(apps, schema_editor):
    Iteration = apps.get_model('orchestra', 'Iteration')
    Task = apps.get_model('orchestra', 'Task')
    TaskAssignment = apps.get_model('orchestra', 'TaskAssignment')

    for task in Task.objects.all():
        task_snapshots = get_ordered_snapshots(task)
        for task_snap_index, snapshot in enumerate(task_snapshots):
            assignment = snapshot['assignment']
            iteration = Iteration.objects.create(
                assignment=assignment,
                end_datetime=parse(snapshot['datetime']),
                submitted_data=snapshot['data'],
                status=snapshot_type_to_iteration_status[snapshot['type']])
            if snapshot['assignment_snap_index'] == 0:
                # Snapshot is the first for its assignment, so its start
                # datetime will be the same as its assignment
                # NOTE: This should cover the case where task_snap_index == 0
                iteration.start_datetime = assignment.start_datetime
            else:
                iteration.start_datetime = (
                    task_snapshots[task_snap_index - 1]['datetime'])
            iteration.save()

        processing_assignments = task.assignments.filter(
            status=AssignmentStatus.PROCESSING)
        if processing_assignments.exists():
            if processing_assignments.count() > 1:
                logger.error(
                    'Task {} has too many processing assignments'.format(
                        task.id))
            else:
                # If task has a processing assignment, create a final
                # processing iteration
                processing_assignment = processing_assignments.first()
                if (not task_snapshots
                        or not processing_assignment.iterations.exists()):
                    final_start_datetime = processing_assignment.start_datetime
                else:
                    final_start_datetime = task_snapshots[-1]['datetime']
                iteration = Iteration.objects.create(
                    assignment=processing_assignment,
                    start_datetime=final_start_datetime,
                    status=IterationStatus.PROCESSING)

        try:
            verify_iterations(task.id)
        except AssertionError:
            logger.error('Iterations invalid for task {}.'.format(task.id))


class Migration(migrations.Migration):

    dependencies = [
        ('orchestra', '0027_create_time_entries_for_snapshots'),
    ]

    operations = [
        migrations.AlterField(
            model_name='iteration',
            name='status',
            field=models.IntegerField(choices=[(0, 'Processing'), (1, 'Requested Review'), (2, 'Provided Review')], default=0),
        ),
        migrations.RunPython(snapshots_to_iterations)
    ]
