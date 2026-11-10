// ───────────────────────────────────────────────────────────────
// TEACHING — edit here to add courses, lectures or talks.
// Groups appear in the order listed; empty groups are hidden.
// ───────────────────────────────────────────────────────────────

export interface TeachingItem {
  period: string;      // shown in the left column, e.g. '2025–present'
  role: string;
  title: string;       // course, programme or talk title
  where: string;
  note?: string;
}

export const teaching: { title: string; items: TeachingItem[] }[] = [
  {
    title: 'University teaching',
    items: [
      { period: '2025–', role: 'Teaching Assistant', title: 'Principles of Microeconomics (BSc)', where: 'Nova School of Business and Economics, since September 2025' },
      { period: '2025–', role: 'Grader', title: 'Economics of Healthcare Systems', where: 'Nova School of Business and Economics' },
    ],
  },
  {
    title: 'Executive education and invited lectures',
    items: [
      {
        period: '2026', role: 'Invited Faculty', title: 'Value-Based Healthcare: From Theory to Practice',
        where: 'Leadership in Healthcare Delivery, 12th edition, Nova SBE Executive Education / Roche, April 2026',
        note: 'Costing, value-based pricing and reimbursement frameworks, including their application to digital health.',
      },
      { period: '2025', role: 'Lecturer', title: 'Advanced Training in Analytical Accounting for the Portuguese NHS', where: 'Nova SBE / ACSS' },
      { period: '2022', role: 'Invited Lecturer', title: 'Workshop on Value-Based Healthcare Concepts and Knowledge', where: 'Postgraduate Course, NOVA Medical School' },
    ],
  },
  {
    title: 'Invited talks',
    items: [
      { period: '2025', role: 'Invited Speaker', title: 'Cost Measurement in Value-Based Healthcare: Strategies for Sustainable Pricing & Reimbursement', where: 'JoinHealth Spring Welcome Webinar, Health Cluster Portugal, March 2025' },
    ],
  },
];
