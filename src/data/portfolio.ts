/**
 * Central portfolio data — generated from Devi  R's resume (Saravanan_R_Automation_Engineer.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here is added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Saravanan R',
  displayName: 'Saravanan R',
  firstName: 'SARAVANAN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SARAVANAN ORIGINAL',
  role: 'Automation Engineer',
  tagline: ['Automation Engineer', 'n8n', 'Business Central'],
  intro:
    'Automation Engineer with 9+ years of work experience, including 2.5+ years building end-to-end automation systems for a computer hardware distributor. Built workflow automation in n8n, ERP integration with Microsoft Dynamics 365 Business Central, WhatsApp automation, a sales dashboard, a customer mobile app and AI chatbots. Comfortable working from the database and API layer to the frontend and mobile delivery.',
  location: 'Bengaluru, Karnataka',
  email: 'saravanan17021997@gmail.com',
  phone: '8668026319',
  links: {
    portfolio: 'https://saravananresume.vercel.app',
    github: 'https://github.com/saravanan17021997',
  },
  resumePdf: '/assets/Saravanan_R_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Saravanan R',
  },
  interests: ['n8n automation', 'ERP integration', 'AI chatbots'],
};

export const education = [
  {
    school: 'University of Madras',
    place: '',
    degree: 'B.Com — Information System Management',
    period: '2014 – 2017',
    score: 'B.Com',
  },
];

export const experience = [
  {
    company: 'Supreme Computers India Pvt. Ltd.',
    role: 'Digital Transformation Lead (Automation Engineer)',
    place: '',
    period: 'Mar 2025 – Present',
    points: [
      'Designed and maintain production automation workflows on a self-hosted n8n instance running on Docker.',
      'Built an automated WhatsApp system (Meta Business API) that sends invoices and credit memos as PDF attachments to customers, triggered by ERP webhooks.',
      'Integrated Microsoft Dynamics 365 Business Central through REST API for live invoice, customer, item and vendor data.',
      'Administer Business Central end to end: user creation, permission sets, role assignments and access control.',
      'Built a WhatsApp-based OTP login and verification system for employees using the Meta WhatsApp Business API and Supabase, with database-level access controls.',
      'Designed WhatsApp chatbot flows in n8n and Gallabox with automated routing and human handoff. Trained an AI customer assistant on Chatbase across multiple LLM models and refined prompts to improve accuracy.',
      'Built and published a customer mobile app and PWA on the Google Play Store, with a Supabase backend, live data from n8n and Firebase push notifications.',
      'Manage Microsoft 365 and SharePoint: user provisioning, licence allocation, security permissions, Teams channels, billing and the public partner price book portal.',
    ],
  },
  {
    company: 'Stats Perform',
    role: 'Data Analyst',
    place: '',
    period: '2020 – 2025',
    points: [
      'Handled international inbound and outbound voice, chat and email support, including escalations.',
      'Worked with application proxy, MFA, SSO and IAM. Troubleshot VMware issues including snapshots and virtual machine network configuration.',
      'Prepared and maintained MIS reports and project plans.',
      'Trained and mentored team members and managed day-to-day process support as shift lead.',
    ],
  },
  {
    company: 'Xalvadors Leads',
    role: 'Email Executive',
    place: '',
    period: '2018 – 2019',
    points: [
      'Handled email marketing, customer care and email support operations.',
      'Worked with email service providers AWS, SendGrid and SparkPost, including API key integration.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when there is no public repository — the GitHub button is hidden. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'whatsapp-invoices',
    title: 'WhatsApp Invoice Delivery',
    year: '2025',
    genre: 'Automation • WhatsApp API • ERP',
    logline: 'Invoices and credit memos reach customers on WhatsApp as PDFs, triggered by ERP webhooks.',
    stack: ['n8n', 'WhatsApp Business API', 'Business Central', 'Webhooks', 'Docker'],
    build: [
      'Built an automated WhatsApp system (Meta Business API) that sends invoices and credit memos as PDF attachments to customers, triggered by ERP webhooks.',
      'Runs as a production workflow on a self-hosted n8n instance on Docker.',
    ],
    features: ['Invoices as PDF attachments', 'Credit memos sent the same way', 'Triggered by ERP webhooks', 'Self-hosted n8n on Docker'],
    metrics: [
      { value: 'PDF', label: 'invoices & credit memos' },
      { value: 'Webhook', label: 'triggered from the ERP' },
      { value: 'Meta', label: 'WhatsApp Business API' },
    ],
    palette: crimson,
    motif: 'flow',
  },
  {
    id: 'whatsapp-otp',
    title: 'WhatsApp OTP Login',
    year: '2025',
    genre: 'Security • WhatsApp API • Supabase',
    logline: 'A WhatsApp-based OTP login and verification system for employees.',
    stack: ['WhatsApp Business API', 'Supabase'],
    build: [
      'Built a WhatsApp-based OTP login and verification system for employees using the Meta WhatsApp Business API and Supabase, with database-level access controls.',
    ],
    features: ['OTP sent over WhatsApp', 'Employee verification', 'Database-level access controls'],
    metrics: [
      { value: 'OTP', label: 'login & verification' },
      { value: 'DB', label: 'level access controls' },
    ],
    palette: violet,
    motif: 'shield',
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots & Assistant',
    year: '2025',
    genre: 'AI • Chatbots • n8n',
    logline: 'WhatsApp chatbot flows with routing and human handoff, plus an AI customer assistant.',
    stack: ['n8n', 'Gallabox', 'Chatbase', 'LLMs'],
    build: [
      'Designed WhatsApp chatbot flows in n8n and Gallabox with automated routing and human handoff.',
      'Trained an AI customer assistant on Chatbase across multiple LLM models and refined prompts to improve accuracy.',
    ],
    features: ['Automated routing', 'Human handoff', 'Multiple LLM models tested on Chatbase', 'Prompt refinement for accuracy'],
    metrics: [
      { value: 'n8n', label: 'and Gallabox flows' },
      { value: 'Multi', label: 'LLM models on Chatbase' },
    ],
    palette: ocean,
    motif: 'tenants',
  },
  {
    id: 'customer-app',
    title: 'Customer Mobile App',
    year: '2025',
    genre: 'Mobile • PWA • Supabase',
    logline: 'A customer mobile app and PWA published on the Google Play Store.',
    stack: ['GoodBarber PWA', 'Google Play Console', 'Supabase', 'n8n', 'Firebase'],
    build: [
      'Built and published a customer mobile app and PWA on the Google Play Store, with a Supabase backend, live data from n8n and Firebase push notifications.',
    ],
    features: ['Published on Google Play', 'Supabase backend', 'Live data from n8n', 'Firebase push notifications'],
    metrics: [
      { value: 'Play', label: 'Store published' },
      { value: 'Live', label: 'data from n8n' },
    ],
    palette: jade,
    motif: 'flow',
  },
  {
    id: 'business-central',
    title: 'Business Central Integration',
    year: '2025',
    genre: 'ERP • REST API • Administration',
    logline: 'Live invoice, customer, item and vendor data from Dynamics 365 Business Central, plus full administration.',
    stack: ['Dynamics 365 Business Central', 'REST API', 'n8n'],
    build: [
      'Integrated Microsoft Dynamics 365 Business Central through REST API for live invoice, customer, item and vendor data.',
      'Administer Business Central end to end: user creation, permission sets, role assignments and access control.',
    ],
    features: ['Live invoice, customer, item and vendor data', 'User creation', 'Permission sets and role assignments', 'Access control'],
    metrics: [
      { value: 'REST', label: 'API integration' },
      { value: 'End to end', label: 'administration' },
    ],
    palette: amber,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

/** Resume highlights (the resume lists no awards, so these are facts from the work experience). */
export const achievements: Achievement[] = [
  {
    id: 'google-play',
    title: 'Published on Google Play',
    org: 'Supreme Computers',
    detail: 'Built and published a customer mobile app and PWA on the Google Play Store.',
    laurel: 'Published',
  },
  {
    id: 'production-n8n',
    title: 'Production automation',
    org: 'Supreme Computers',
    detail: 'Designed and maintain production workflows on a self-hosted n8n instance running on Docker.',
    laurel: 'In Production',
  },
  {
    id: 'shift-lead',
    title: 'Shift Lead',
    org: 'Stats Perform',
    detail: 'Trained and mentored team members and managed day-to-day process support as shift lead.',
    laurel: 'Leadership',
  },
];

export type Certification = { issuer: string; name: string; link: string };

/** The resume lists no certifications. Add real ones here and the section appears. */
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'automation',
    title: 'Automation & Integration',
    subtitle: 'Workflows, APIs and messaging',
    skills: [
      { name: 'n8n', mono: 'n8', note: 'Self-hosted, Docker' },
      { name: 'REST API', mono: 'Ap' },
      { name: 'Webhooks', mono: 'Wh' },
      { name: 'WhatsApp Business API', mono: 'Wa', note: 'Meta' },
    ],
  },
  {
    id: 'erp',
    title: 'ERP',
    subtitle: 'Administration and API integration',
    skills: [{ name: 'Dynamics 365 Business Central', mono: 'BC' }],
  },
  {
    id: 'development',
    title: 'Development',
    subtitle: 'Frontend and version control',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'JavaScript', mono: 'JS' },
      { name: 'Git', mono: 'Gi' },
      { name: 'GitHub', mono: 'GH' },
    ],
  },
  {
    id: 'backend',
    title: 'Database & Backend',
    subtitle: 'Data and push messaging',
    skills: [
      { name: 'Supabase', mono: 'Sb' },
      { name: 'Firebase', mono: 'Fb' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    subtitle: 'Delivery to customers',
    skills: [
      { name: 'GoodBarber PWA', mono: 'GB' },
      { name: 'Google Play Console', mono: 'GP' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Chatbots',
    subtitle: 'Assistants and prompts',
    skills: [
      { name: 'Chatbase', mono: 'Cb' },
      { name: 'Gallabox', mono: 'Ga' },
      { name: 'AI prompt writing', mono: 'AI' },
    ],
  },
  {
    id: 'm365',
    title: 'Microsoft 365',
    subtitle: 'Workplace administration',
    skills: [
      { name: 'SharePoint', mono: 'Sp' },
      { name: 'Teams', mono: 'Tm' },
      { name: 'User & licence administration', mono: 'M3' },
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting',
    subtitle: 'Dashboards and MIS',
    skills: [
      { name: 'Power BI', mono: 'PB' },
      { name: 'MIS reports', mono: 'MI' },
    ],
  },
];

/** Where each skill appears in the work on the resume. */
export const skillEvidence: Record<string, string[]> = {
  n8n: ['WhatsApp Invoice Delivery', 'AI Chatbots & Assistant', 'Customer Mobile App'],
  'REST API': ['Business Central Integration'],
  Webhooks: ['WhatsApp Invoice Delivery'],
  'WhatsApp Business API': ['WhatsApp Invoice Delivery', 'WhatsApp OTP Login'],
  'Dynamics 365 Business Central': ['Business Central Integration', 'WhatsApp Invoice Delivery'],
  Supabase: ['WhatsApp OTP Login', 'Customer Mobile App'],
  Firebase: ['Customer Mobile App'],
  'GoodBarber PWA': ['Customer Mobile App'],
  'Google Play Console': ['Customer Mobile App'],
  Chatbase: ['AI Chatbots & Assistant'],
  Gallabox: ['AI Chatbots & Assistant'],
  'AI prompt writing': ['AI Chatbots & Assistant'],
  SharePoint: ['Supreme Computers — Microsoft 365 administration'],
  Teams: ['Supreme Computers — Microsoft 365 administration'],
  'MIS reports': ['Stats Perform — Data Analyst'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2014 – 2017',
    synopsis: 'B.Com in Information System Management at the University of Madras.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'B.Com, Information System Management — University of Madras.',
        tags: ['B.Com', 'Information Systems'],
        runtime: '2014 – 2017',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'First Job',
    period: '2018 – 2019',
    synopsis: 'Email Executive at Xalvadors Leads.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Email Executive',
        description: 'Handled email marketing, customer care and email support operations. Worked with AWS, SendGrid and SparkPost, including API key integration.',
        tags: ['AWS', 'SendGrid', 'SparkPost'],
        runtime: '2018 – 2019',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Stats Perform',
    period: '2020 – 2025',
    synopsis: 'Data Analyst at Stats Perform, growing into a shift lead.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Support & Escalations',
        description: 'Handled international inbound and outbound voice, chat and email support, including escalations.',
        tags: ['Voice', 'Chat', 'Email'],
        runtime: '2020 – 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Identity & Infrastructure',
        description: 'Worked with application proxy, MFA, SSO and IAM. Troubleshot VMware issues including snapshots and virtual machine network configuration.',
        tags: ['MFA', 'SSO', 'IAM', 'VMware'],
        runtime: '2020 – 2025',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'Shift Lead',
        description: 'Prepared MIS reports and project plans. Trained and mentored team members and managed day-to-day process support.',
        tags: ['MIS reports', 'Project plans', 'Mentoring'],
        runtime: '2020 – 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Automation Engineer',
    period: 'Mar 2025 – Present',
    synopsis: 'Digital Transformation Lead at Supreme Computers India Pvt. Ltd.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'n8n & WhatsApp',
        description: 'Production workflows on self-hosted n8n, WhatsApp invoice delivery and WhatsApp OTP login.',
        tags: ['n8n', 'WhatsApp API', 'Supabase'],
        runtime: 'Mar 2025 – Present',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Business Central',
        description: 'REST API integration and end-to-end administration of Dynamics 365 Business Central.',
        tags: ['Business Central', 'REST API'],
        runtime: 'Mar 2025 – Present',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'Chatbots & Mobile',
        description: 'WhatsApp chatbots, an AI assistant on Chatbase, and a customer app on Google Play.',
        tags: ['Gallabox', 'Chatbase', 'Firebase'],
        runtime: 'Mar 2025 – Present',
        palette: ocean,
      },
      {
        code: 'S04 E04',
        title: 'Microsoft 365',
        description: 'User provisioning, licence allocation, security permissions, Teams channels, billing and the public partner price book portal.',
        tags: ['SharePoint', 'Teams', 'M365'],
        runtime: 'Mar 2025 – Present',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core tool', title: 'n8n', detail: 'Self-hosted on Docker • production workflows', palette: crimson },
  { label: 'The ERP', title: 'Business Central', detail: 'REST API integration and administration', palette: amber },
  { label: 'Messaging', title: 'WhatsApp API', detail: 'Invoices, OTP login and chatbots', palette: jade },
  { label: 'Published', title: 'Google Play', detail: 'Customer mobile app and PWA', palette: ocean },
  { label: 'Backend', title: 'Supabase', detail: 'OTP login and app backend', palette: violet },
  { label: 'AI', title: 'Chatbase', detail: 'Multiple LLM models, refined prompts', palette: crimson },
  { label: 'Experience', title: '9+ years', detail: 'Work experience', palette: amber },
  { label: 'Leadership', title: 'Shift Lead', detail: 'Stats Perform', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Now',
    title: 'Automation Engineer',
    lines: ['Digital Transformation Lead', 'Supreme Computers India Pvt. Ltd. · Mar 2025 – Present'],
    chips: ['n8n', 'Docker', 'Business Central'],
  },
  {
    kicker: 'Skills',
    title: 'API to mobile.',
    lines: ['n8n, REST API, Webhooks, WhatsApp Business API', 'React, Supabase, Firebase · Chatbase, Gallabox'],
    chips: ['n8n', 'WhatsApp API', 'Supabase', 'React', 'Firebase'],
  },
  {
    kicker: 'Projects',
    title: `${projects.length} Originals`,
    lines: ['WhatsApp invoice delivery · WhatsApp OTP login', 'AI chatbots · Customer mobile app · Business Central'],
  },
  {
    kicker: 'Before',
    title: 'Stats Perform',
    lines: ['Data Analyst · 2020 – 2025', 'Support, IAM, VMware, MIS reports, shift lead'],
  },
  {
    kicker: 'Education',
    title: 'B.Com',
    lines: ['Information System Management', 'University of Madras · 2014 – 2017'],
  },
];

export type ProfileId = 'saravanan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'saravanan',
    name: 'Saravanan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, highlights & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & work', palette: violet },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Highlights', card: 'My Highlights', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
