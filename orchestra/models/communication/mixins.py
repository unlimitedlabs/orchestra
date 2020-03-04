class CommunicationPreferenceMixin(object):

    @classmethod
    def get_default_methods(cls):
        """
            We want to set every value in the bitfield to 1.
        """
        return 2 ** len(cls.COMMUNICATION_METHODS) - 1

    def get_descriptions(self):
        key = self.CommunicationType(self.communication_type)
        return self.COMMUNICATION_TYPE_DESCRIPTIONS[key]

    def can_slack(self):
        """
            Boolean of whether or not the Worker wants slack messages
            for the CommunicationType.
        """
        return self.methods.slack

    def can_email(self):
        """
            Boolean of whether or not the Worker wants email messages
            for the CommunicationType.
        """
        return self.methods.email

    def __str__(self):
        return '{} - {} - {}'.format(
            self.worker,
            self.methods,
            self.get_descriptions().get('short_description')
        )


class StaffBotRequestMixin(object):

    def get_request_cause_description(self):
        return self.RequestCause(self.request_cause).description

    def get_request_status_description(self):
        return self.Status(self.status).description

    def __str__(self):
        return '{} - {} - {}'.format(
            self.task,
            self.get_request_cause_description(),
            self.get_request_status_description()
        )


class StaffingRequestInquiryMixin(object):

    def __str__(self):
        return '{} - {}'.format(
            self.communication_preference.worker,
            self.request.task.id
        )


class StaffingResponseMixin(object):

    def __str__(self):
        return '{} - {} - {}'.format(
            self.request_inquiry,
            self.is_available,
            self.is_winner
        )

    def _mark_staffbot_request_complete(self, request):
        from orchestra.models import StaffBotRequest
        request.status = StaffBotRequest.Status.COMPLETE.value
        request.save()

    def save(self, *args, **kwargs):
        from orchestra.models import StaffingRequestInquiry
        request = self.request_inquiry.request
        if self.is_winner:
            self._mark_staffbot_request_complete(request)
        else:
            inquiries = (StaffingRequestInquiry.objects
                .filter(request=request)
                .exclude(id=self.request_inquiry.id))
            responded_inquiries = inquiries.filter(
                responses__isnull=False)
            print(responded_inquiries.count(), inquiries.count())
            if responded_inquiries.count() >= inquiries.count() - 1:
                self._mark_staffbot_request_complete(request)
        super().save(*args, **kwargs)
