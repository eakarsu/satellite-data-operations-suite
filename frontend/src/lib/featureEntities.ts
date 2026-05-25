export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['records', 'Cases Records', 'Cases priority queue', 'Open', 'Cases exception list', 'Public Lead', '$0'],
  ['incidents', 'Incidents Records', 'Incidents priority queue', 'Review', 'Incidents exception list', 'Public Lead', '$0'],
  ['units', 'Units Records', 'Units priority queue', 'Action needed', 'Units exception list', 'Public Lead', '$0'],
  ['schedules', 'Schedules Records', 'Schedules priority queue', 'Open', 'Schedules exception list', 'Public Lead', '$0'],
  ['evidence', 'Evidence Records', 'Evidence priority queue', 'Review', 'Evidence exception list', 'Operations Lead', '$0'],
  ['permits', 'Permits Records', 'Permits priority queue', 'Action needed', 'Permits exception list', 'Operations Lead', '$0'],
  ['approvals', 'Approvals Records', 'Approvals priority queue', 'Open', 'Approvals exception list', 'Operations Lead', '$0'],
  ['resources', 'Resources Records', 'Resources priority queue', 'Review', 'Resources exception list', 'Operations Lead', '$0'],
  ['compliance', 'Compliance Records', 'Compliance priority queue', 'Action needed', 'Compliance exception list', 'Governance Lead', '$0'],
  ['alerts', 'Alerts Records', 'Alerts priority queue', 'Open', 'Alerts exception list', 'Governance Lead', '$0'],
  ['analytics', 'Analytics Records', 'Analytics priority queue', 'Review', 'Analytics exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
