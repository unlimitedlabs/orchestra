from django.core.urlresolvers import reverse

from orchestra.tests.helpers import OrchestraAuthenticatedTestCase
from orchestra.tests.helpers.fixtures import StaffingResponseFactory
from orchestra.tests.helpers.fixtures import WorkerFactory


class StaffRequestBase(OrchestraAuthenticatedTestCase):
    template = ''
    url_reverse = ''
    __test__ = False

    def setUp(self):
        super().setUp()
        self.request_client, self.user = self.authenticate_user()
        self.staffing_response = StaffingResponseFactory(
            request__task__step__is_human=True,
            request__communication_preference__worker__user=self.user)
        self.url_kwargs = {
            'staffing_request_id': self.staffing_response.request.pk
        }
        self.url = reverse(self.url_reverse, kwargs=self.url_kwargs)

    def assert_response(self, response, status_code=200, template=None):
        self.assertEqual(response.status_code, status_code)
        if template is None:
            template = self.template
        self.assertTemplateUsed(response, template)

    def test_get(self):
        response = self.request_client.get(self.url)
        self.assert_response(response)

    def test_unauthenticated_request(self):
        new_worker = WorkerFactory()
        comm_pref = self.staffing_response.request.communication_preference
        comm_pref.worker = new_worker
        comm_pref.save()

        response = self.request_client.get(self.url)
        self.assert_response(response, status_code=404,
                             template='orchestra/error.html')

    def test_unauthorized_request(self):
        self.request_client.logout()

        response = self.request_client.get(self.url)
        login_url = '{}?next={}'.format(reverse('auth_login'), self.url)
        self.assertRedirects(response, login_url)


class AcceptStaffRequestTest(StaffRequestBase):
    __test__ = True
    template = 'communication/staffing_request_accepted.html'
    url_reverse = 'orchestra:communication:accept_staffing_request'


class RejectStaffRequestTest(StaffRequestBase):
    __test__ = True
    template = 'communication/staffing_request_rejected.html'
    url_reverse = 'orchestra:communication:reject_staffing_request'
