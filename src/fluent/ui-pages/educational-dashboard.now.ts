import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import educationalDashboard from '../../client/index.html';

export const educational_dashboard = UiPage({
  $id: Now.ID['educational_dashboard'],
  endpoint: 'x_1917234_educatio_dashboard.do',
  description: 'Educational Management System Dashboard - Modern React-based interface for managing students, teachers, courses, and enrollments',
  category: 'general',
  html: educationalDashboard,
  direct: true
})