export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AISatelliteDataOperationsAssistant', ownership: 'Cases source capabilities and workflows', coverage: ['Cases', 'Incidents', 'Units'] },
  { name: 'AISatelliteDataOperationsOperations', ownership: 'Incidents source capabilities and workflows', coverage: ['Schedules', 'Evidence', 'Permits'] },
  { name: 'AISatelliteDataOperationsAnalytics', ownership: 'Units source capabilities and workflows', coverage: ['Approvals', 'Resources', 'Compliance'] },
  { name: 'AISatelliteDataOperationsWorkflow', ownership: 'Schedules source capabilities and workflows', coverage: ['Alerts', 'Analytics', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Cases', value: '84', note: 'Active' },
  { label: 'Incidents', value: '61', note: 'Open' },
  { label: 'Units', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Cases operating view', 'Incidents operating view', 'Units operating view', 'Schedules operating view', 'Evidence operating view', 'Permits operating view', 'Approvals operating view', 'Resources operating view'];
export const workflowHighlights = ['Cases workflow with records, approvals, audit, and reporting', 'Incidents workflow with records, approvals, audit, and reporting', 'Units workflow with records, approvals, audit, and reporting', 'Schedules workflow with records, approvals, audit, and reporting', 'Evidence workflow with records, approvals, audit, and reporting'];
