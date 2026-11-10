// ───────────────────────────────────────────────────────────────
// PERSONAL DETAILS — edit here to update name, roles, bio, links.
// ───────────────────────────────────────────────────────────────

export const site = {
  name: 'Francisco von Hafe',
  url: 'https://franciscovonhafe.github.io',
  email: 'franciscopbvonhafe@gmail.com',
  location: 'Lisbon, Portugal',
  cv: { href: '/cv/Francisco-von-Hafe-CV.pdf', updated: 'October 2026' },
  description:
    'Francisco von Hafe is an Economist at Value for Health CoLAB and a PhD candidate in Economics at Nova School of Business and Economics, working on health economics, digital health and value-based healthcare.',

  // Shown under the name on the homepage, in this order.
  roles: [
    { text: 'Economist at', org: 'Value for Health CoLAB', href: 'https://vohcolab.org/' },
    { text: 'PhD Candidate in Economics at', org: 'Nova School of Business and Economics', href: 'https://www.novasbe.unl.pt/' },
  ],

  // Homepage biography: one string per paragraph.
  bio: [
    'I am an applied microeconomist working in health economics. I study how economic incentives, stakeholder priorities and market mechanisms shape healthcare decisions, the delivery of care, and the adoption of new health technologies, including digital health.',
    'At Value for Health CoLAB (VOH.CoLAB), I work on applied projects in economic evaluation, cost analysis, reimbursement and the implementation of digital health services. My doctoral research at Nova SBE combines econometric analysis, systematic evidence synthesis and stakeholder-based methods. I am also a researcher at the Comprehensive Health Research Center (CHRC), NOVA Medical School.',
  ],

  // `topic` links the interest to a colour (see src/data/topics.ts).
  interests: [
    { label: 'Health economics' },
    { label: 'Healthcare markets and economic incentives', topic: 'markets' },
    { label: 'Digital health and innovation adoption', topic: 'digital' },
    { label: 'Economic evaluation and cost analysis', topic: 'evaluation' },
    { label: 'Value-based healthcare and healthcare delivery', topic: 'delivery' },
    { label: 'Variation in clinical practice', topic: 'variation' },
  ],

  affiliations: [
    { name: 'Value for Health CoLAB', href: 'https://vohcolab.org/', role: 'Economist, since 2020', detail: 'Lisbon, Portugal' },
    { name: 'Nova School of Business and Economics', href: 'https://www.novasbe.unl.pt/', role: 'PhD Candidate in Economics, since 2023', detail: 'NOVA University Lisbon' },
    { name: 'Comprehensive Health Research Center', role: 'Integrated Researcher', detail: 'NOVA Medical School' },
    { name: 'Health Economics & Management Knowledge Center', role: 'Member', detail: 'Nova SBE' },
  ],

  profiles: [
    { label: 'ORCID', text: '0000-0001-6047-2817', href: 'https://orcid.org/0000-0001-6047-2817' },
    { label: 'Google Scholar', text: 'Google Scholar profile', href: 'https://scholar.google.com/citations?user=SYpG5nMAAAAJ&hl=en' },
    { label: 'Ciência Vitae', text: '0B18-58D6-09B6', href: 'https://www.cienciavitae.pt/portal/en/0B18-58D6-09B6' },
    { label: 'LinkedIn', text: 'linkedin.com/in/franciscovonhafe', href: 'https://www.linkedin.com/in/franciscovonhafe/' },
    { label: 'Nova SBE', text: 'Nova SBE profile', href: 'https://www.novasbe.unl.pt/en/faculty-research/faculty/faculty-detail/id/1324' },
  ],
};
