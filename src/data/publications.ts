// ───────────────────────────────────────────────────────────────
// PUBLICATIONS — the only file to edit when adding or changing a paper.
// Newest first within each year is not required: the site sorts by year.
//
// category:  'article' = peer-reviewed article
//            'working' = working paper   (section appears only if used)
//            'progress' = work in progress (section appears only if used)
//            'letter'  = letters and preprints
//            'other'   = book chapters, proceedings and reports
// venue:     may contain <i>…</i> for journal titles
// featured:  true = also shown on the homepage
// ───────────────────────────────────────────────────────────────
import type { Topic } from './topics';

export type Category = 'article' | 'working' | 'progress' | 'letter' | 'other';

export interface Publication {
  category: Category;
  year: number;
  title: string;
  authors: string;
  venue: string;
  doi?: string;
  url?: string;      // link when there is no DOI
  pdf?: string;      // open-access or own PDF
  pdfLabel?: string;
  summary?: string;
  topics: Topic[];
  featured?: boolean;
}

export const sections: { category: Category; title: string }[] = [
  { category: 'article', title: 'Peer-reviewed articles' },
  { category: 'working', title: 'Working papers' },
  { category: 'progress', title: 'Work in progress' },
  { category: 'letter', title: 'Letters and preprints' },
  { category: 'other', title: 'Book chapters, proceedings and reports' },
];

export const publications: Publication[] = [
  // ── Peer-reviewed articles ─────────────────────────────────
  {
    category: 'article', year: 2026, featured: true, topics: ['digital', 'markets'],
    title: 'Beyond the app: a marketness assessment of digital health, sports, and well-being – a systematic review',
    authors: 'von Hafe, F., Santos, A. R., Londral, A. R., Silva, A. M., Lopes, J., Carvalho, N., Ferreira, S., & Azevedo, S.',
    venue: '<i>Frontiers in Digital Health</i>, 8, 1871114',
    doi: '10.3389/fdgth.2026.1871114',
    summary: 'Digital health, sports and well-being solutions often fail to sustain use, even when they are effective. This systematic review applies a marketness framework, which assesses how fully a market is constituted against four criteria, to 17 empirical studies grouped into condition management, lifestyle and behaviour, and physical activity solutions. None of the three categories met all four criteria, suggesting that investment, regulatory and participation decisions are often made without a clear picture of the underlying market conditions.',
  },
  {
    category: 'article', year: 2026, featured: true, topics: ['delivery', 'evaluation'],
    title: 'What to measure for monitoring and decision-making in a case management intervention for emergency department high-users: different stakeholder priorities',
    authors: 'von Hafe, F., Loureiro, D., Azevedo, S., Januário, A., Lourenço, M., Mesquita, A., Guede-Fernández, F., & Londral, A. R.',
    venue: '<i>BMC Health Services Research</i>',
    doi: '10.1186/s12913-026-15460-8',
    summary: 'Evaluations of case management for frequent emergency department users usually take the provider’s perspective and rely on hospital utilisation indicators. Using participatory action research in a Portuguese programme (GRHU), we defined 22 indicators and found that board members, emergency department leadership and programme managers prioritised different ones, while only nine could be fully measured with routine hospital data. For the highest-ranked measurable outcome, emergency department visits, the observed one-year reduction in visit costs exceeded delivery costs in a before-after comparison (ratio of 1.22).',
  },
  {
    category: 'article', year: 2026, featured: true, topics: ['evaluation', 'digital'],
    title: 'Mapping methodologies for economic evaluation of digital health technologies: a scoping review',
    authors: 'Santos, A. R., von Hafe, F., Sampaio, F., Londral, A. R., & Perelman, J.',
    venue: '<i>Value in Health</i>, 29(2), 311–323',
    doi: '10.1016/j.jval.2025.09.012',
    summary: 'Digital health technologies challenge conventional economic evaluation because of their diverse functions, evolving nature and indirect impact pathways. This scoping review maps the methodological frameworks proposed for their economic evaluation across study design, comparators, time horizon, perspective, effectiveness measures, cost components and uncertainty analysis. It finds substantial variation, including limited attention to productivity costs, and calls for flexible, lifecycle-aligned evaluation models and standardised guidance.',
  },
  {
    category: 'article', year: 2025, topics: ['markets'],
    title: 'Legal frameworks for blockchain applications: a comparative study with implications for innovation in Europe',
    authors: 'von Hafe, F., Wagle, Y., Guede-Fernández, F., Giordano, A. P., Silva, L., & Azevedo, S.',
    venue: '<i>Frontiers in Blockchain</i>, 8, 1655230',
    doi: '10.3389/fbloc.2025.1655230',
    summary: 'Blockchain applications operate across borders, but European jurisdictions regulate them in very different ways. This study compares six geographies, three with blockchain-specific regulators (Switzerland, Liechtenstein and Malta) and three that adapt general rules (the EU, Estonia and Portugal), across legal maturity, asset classification, taxation, anti-money laundering rules and supervision. It then discusses how these divergences may affect the scaling-up of innovation.',
  },
  {
    category: 'article', year: 2023, topics: ['variation'],
    title: 'Initial steps for the Portuguese Atlas of geographical variation in healthcare',
    authors: 'von Hafe, F., Azevedo, S., Fragata, J., & Londral, A. R.',
    venue: '<i>Research in Health Services &amp; Regions</i>, 2(1), 7',
    doi: '10.1007/s43999-023-00022-w',
    summary: 'This study tested whether a geographical variation analysis of Portuguese healthcare could be built from publicly available National Health Service data, comparing the 18 mainland districts. The largest variation was found in the share of hip surgeries performed within 48 hours of admission, which ranged from about 19% to 84% across districts. The results point to the need for a national benchmarking system and a wider discussion with clinicians, patients, providers and policymakers.',
  },
  {
    category: 'article', year: 2023, topics: ['public'],
    title: 'The First Quantification of the Carbon Footprint of the Portuguese National Health Service: A Positive but Insufficient Step Forward',
    authors: 'Costa, E., Conceição, D. V. N. da, von Hafe, F., & Millett, C.',
    venue: '<i>Portuguese Journal of Public Health</i>, 41(2), 81–82',
    doi: '10.1159/000530426',
    summary: 'A commentary on the first quantification of the carbon footprint of the Portuguese National Health Service, which recognises it as a positive step while arguing that it is not sufficient on its own.',
  },
  {
    category: 'article', year: 2022, topics: ['delivery', 'evaluation'],
    title: 'Case management intervention of high users of the emergency department of a Portuguese hospital: a before-after design analysis',
    authors: 'Gonçalves, S., von Hafe, F., Martins, F., Menino, C., Guimarães, M. J., Mesquita, A., Sampaio, S., & Londral, A. R.',
    venue: '<i>BMC Emergency Medicine</i>, 22, 159',
    doi: '10.1186/s12873-022-00716-3',
    summary: 'This study evaluates GRHU, a multidisciplinary case-management programme for emergency department high users (more than ten visits a year) at a Portuguese hospital, using a before-after design. For 88 patients, emergency visits, outpatient appointments, hospitalisations and costs are compared over 12 months before and after enrolment. Total costs were about 44% lower after enrolment, with falls in emergency and inpatient costs partly offset by higher outpatient costs.',
  },
  {
    category: 'article', year: 2022, topics: ['digital', 'delivery'],
    title: 'Scaling-up digital follow-up care services: collaborative development and implementation of Remote Patient Monitoring pilot initiatives to increase access to follow-up care',
    authors: 'Azevedo, S., Guede-Fernández, F., von Hafe, F., Dias, P., Lopes, I., Cardoso, N., Coelho, P., Santos, J., Fragata, J., Vital, C., Semedo, H., Gualdino, A., & Londral, A.',
    venue: '<i>Frontiers in Digital Health</i>, 4, 1006447',
    doi: '10.3389/fdgth.2022.1006447',
    summary: 'During the COVID-19 pandemic, remote patient monitoring pilots were scaled up quickly and often without planning. This paper shows how a participatory action research approach involving nurses, physicians, developers and researchers can guide the scale-up of remote monitoring for surgical follow-up care. Of the 15 technological features identified, the team classified 11 as essential for the scaled-up service.',
  },
  {
    category: 'article', year: 2021, featured: true, topics: ['public'],
    title: 'Formal home care use and spousal health outcomes',
    authors: 'Gonçalves, J., von Hafe, F., & Filipe, L.',
    venue: '<i>Social Science &amp; Medicine</i>, 287, 114373',
    doi: '10.1016/j.socscimed.2021.114373',
    pdf: 'https://eprints.lancs.ac.uk/id/eprint/161011/1/Formal_home_care_use_and_spousal_health_outcomes.pdf',
    pdfLabel: 'Accepted manuscript (PDF)',
    summary: 'Using data from the Survey of Health, Ageing and Retirement in Europe (SHARE), this study matches new users of formal home care with non-users to examine how paid professional care relates to the health of the user’s spouse. After accounting for baseline differences and potential confounding changes, it concludes that formal home care is unlikely to affect spousal physical or mental health in the short run.',
  },

  // ── Letters and preprints ──────────────────────────────────
  {
    category: 'letter', year: 2026, topics: ['evaluation', 'digital'],
    title: 'Author Reply [reply to Methodological Frameworks for Economic Evaluation of Digital Health Interventions]',
    authors: 'Santos, A. R., von Hafe, F., Sampaio, F., Londral, A. R., & Perelman, J.',
    venue: '<i>Value in Health</i>, 29(9), 1741–1742. Letter',
    doi: '10.1016/j.jval.2026.04.015',
  },
  {
    category: 'letter', year: 2025, topics: ['markets'],
    title: 'Blockchain-Based Skin Marketplaces in Counter-Strike 2: A Comprehensive Survey',
    authors: 'Antunes, R., Dias, P., von Hafe, F., Wagle, Y., Silva, L., Guede-Fernandez, F., & Azevedo, S.',
    venue: 'SSRN preprint',
    doi: '10.2139/ssrn.5389950',
  },

  // ── Book chapters, proceedings and reports ─────────────────
  {
    category: 'other', year: 2024, topics: ['public'],
    title: 'The impact of developing green and exercise-friendly spaces in deprived neighborhoods on health and healthy lifestyles: A systematic literature review',
    authors: 'von Hafe, F., Gonçalves, J., & Mateus, C.',
    venue: 'In <i>Environmental Health Behavior: Concepts, Determinants, Impacts, and Research Methods</i>. Elsevier, pp. 147–163. Book chapter',
  },
  {
    category: 'other', year: 2024, topics: ['markets', 'digital'],
    title: 'Exploring socio-economic networks characteristics in the virtual sports market: A systematic review',
    authors: 'von Hafe, F., Azevedo, S., Freitas, L., Cação, H., Viveiros, G., & Londral, A. R.',
    venue: 'In <i>Book of Abstracts, 11th International Conference on Business Servitization</i>, pp. 337–345. Conference proceedings',
  },
  {
    category: 'other', year: 2023, topics: ['delivery'],
    title: 'Popularizing Terminology Using Social Networks: Keeping Citizens Informed About Value in Health Care',
    authors: 'Silva, R., von Hafe, F., Azevedo, S., Guede-Fernández, F., & Londral, A. R.',
    venue: '<i>CEUR Workshop Proceedings</i>, vol. 3427. Conference proceedings',
    url: 'https://ceur-ws.org/Vol-3427/short1.pdf',
  },
  {
    category: 'other', year: 2023, topics: ['variation'],
    title: 'Atlas da Variação em Saúde no Serviço Nacional de Saúde Português – 2018',
    authors: 'Londral, A., Fragata, J., von Hafe, F., Azevedo, S., Oliosi, E., Guede, F., & Silva, R.',
    venue: 'Value for Health CoLAB. Report',
  },
];
