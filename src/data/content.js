// ─────────────────────────────────────────────────────────────
// Everything you'd want to edit lives in this file.
// Change the text here and the site updates — no component edits needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Saravanan R',
  role: 'Automation Analyst',
  location: 'Bengaluru, India',
  email: 'saravanan17021997@gmail.com',
  phone: '+91 86680 26319',
  phoneHref: '+918668026319',
  resume: '/Saravanan_R_Resume.pdf',
  lede: [
    "I build the plumbing that lets a business run without people pushing it along.",
    "At an IT hardware distributor I built and run the technical stack — connecting an ERP to dashboards, a mobile app and WhatsApp so work that used to be manual now happens on its own.",
  ],
};

// Nodes in the architecture diagram. `detail` shows when a node is selected.
export const systemNodes = {
  bc: {
    id: 'bc',
    label: 'Dynamics 365 Business Central',
    sub: 'ERP · REST · OData · webhooks',
    kind: 'source',
    detail: {
      title: 'The ERP, and the integration layer on top of it',
      body: 'Every invoice, customer, item and vendor record starts here. I integrate with it over REST and OData — handling the OAuth token lifecycle, pagination, and a throughput ceiling that caps hard at 10,000 records if you do not page explicitly. Webhooks push events out the moment something is posted, so downstream systems react instead of polling.',
      points: [
        'REST + OData integration for invoices, customers, items, vendors',
        'OAuth token lifecycle, pagination, rate limit handling',
        'Webhook subscriptions for event-driven flows',
        'BC administration — users, permission sets, role assignments, access control',
      ],
    },
  },
  trackolap: {
    id: 'trackolap',
    label: 'TrackOlap',
    sub: 'field GPS · API',
    kind: 'source',
    detail: {
      title: 'Field sales tracking',
      body: 'GPS visit data from the field sales team, pulled in through automated API workflows and reconciled against the customer master so visits can be reported per salesperson and per customer.',
      points: [
        'Scheduled API pulls into the database',
        'Employee and customer mapping across two systems',
        'Visit reporting joined to live ERP sales data',
      ],
    },
  },
  n8n: {
    id: 'n8n',
    label: 'n8n automation layer',
    sub: '39 workflows · Docker · Traefik · Linux VPS',
    kind: 'hub',
    detail: {
      title: 'The automation layer — where everything meets',
      body: 'Thirty-nine production workflows on a self-hosted n8n instance, running in Docker behind Traefik on a Linux VPS I manage myself. This is the orchestration layer: it listens for events, calls APIs, transforms payloads, retries what fails, and routes the result to whichever system needs it.',
      points: [
        '39 workflows across sync, delivery, authentication and reporting',
        'Event-driven and scheduled triggers, retries and error branches',
        'Upsert-based sync so dashboards never read a half-empty table',
        'Self-hosted infrastructure — deployments, monitoring, disk, backups',
      ],
    },
  },
  supabase: {
    id: 'supabase',
    label: 'Supabase',
    sub: 'Postgres · auth · storage',
    kind: 'store',
    detail: {
      title: 'Database, authentication and storage',
      body: 'Schema design, SQL functions, RPC endpoints and row-level security policies. The important decision here: access rules live in the database, not the browser. A salesperson only gets their own rows even if the frontend were bypassed entirely.',
      points: [
        'Schema design, SQL functions and RPC endpoints',
        'Row-level security enforcing per-user data scope',
        'Edge Functions for server-side auth logic',
        'Private storage buckets with signed URLs for invoice PDFs',
      ],
    },
  },
  dashboard: {
    id: 'dashboard',
    label: 'Sales dashboard',
    sub: 'React · role-scoped · drill-down',
    kind: 'output',
    detail: {
      title: 'Live sales dashboard',
      body: 'Three tiers of access on the same data. A salesperson sees their own numbers, a product manager sees their brand, an admin sees everything — and the rules are enforced in Postgres rather than in the UI. Users drill from brand down to division, salesperson, customer and finally a single invoice, then export what they need themselves.',
      points: [
        'React 18 + Vite, three role-scoped access tiers',
        'Drill-down from brand → division → salesperson → customer → invoice',
        'CSV export so sales teams pull their own reports',
        'Scheduled cache that pre-computes admin summaries, cutting ERP load',
      ],
    },
  },
  app: {
    id: 'app',
    label: 'Customer mobile app',
    sub: 'PWA · Play Store · Firebase push',
    kind: 'output',
    detail: {
      title: 'Customer-facing mobile app',
      body: 'A progressive web app published to the Google Play Store, with live ERP data behind it and Firebase push notifications. The platform blocked external chart libraries and stripped characters from inline scripts, so every chart in it is hand-drawn SVG built to work inside those constraints.',
      points: [
        'Published and maintained on Google Play Console',
        'Live ERP data via the n8n layer',
        'Firebase push notifications for order and invoice alerts',
        'Hand-built SVG charting to work around platform restrictions',
      ],
    },
  },
  whatsapp: {
    id: 'whatsapp',
    label: 'WhatsApp — invoices, OTP, bot',
    sub: 'Meta API · Gallabox · Chatbase',
    kind: 'output',
    detail: {
      title: 'WhatsApp as a delivery and support channel',
      body: 'Three things run over the Meta WhatsApp Business API: automated invoice delivery triggered by ERP webhooks, one-time-password login for staff, and a customer support bot that answers common questions and hands off to a real salesperson when it cannot.',
      points: [
        'Webhook-triggered invoice and credit memo delivery with PDF attachments',
        'Deduplication log so no customer is ever sent the same invoice twice',
        'OTP authentication verified server-side, not in the browser',
        'Bot flows in Gallabox, AI assistant trained on Chatbase across multiple LLM models',
      ],
    },
  },
};

// Wires between nodes: [fromId, toId]
export const systemEdges = [
  ['bc', 'n8n'],
  ['trackolap', 'n8n'],
  ['n8n', 'supabase'],
  ['n8n', 'dashboard'],
  ['n8n', 'app'],
  ['n8n', 'whatsapp'],
  ['supabase', 'dashboard'],
];

export const caseStudies = [
  {
    tag: 'runs daily',
    title: 'WhatsApp invoice delivery',
    problem:
      'Around a hundred invoices are billed a day. Any customer who wanted their copy meant somebody finding the invoice, downloading the PDF and sending it by hand.',
    built:
      'When an invoice is posted in the ERP, a webhook fires into an n8n workflow. It pulls the invoice detail, fetches the PDF, stores it with a signed URL, and sends it to the customer on WhatsApp through the Meta Business API — invoice number, amount and document attached, within seconds of billing.',
    hard:
      'Sending messages was never the hard part. Not sending the same one twice was. Retries after a timeout, or a webhook firing twice, would mean duplicate invoices landing on a customer. A log table in the database is checked before every send. It has run six days a week without a duplicate. The messaging platform also caches files by name, so filenames carry a timestamp — without that, customers were receiving the wrong PDF.',
    stack: ['Meta WhatsApp Business API', 'n8n', 'webhooks', 'Supabase storage'],
  },
  {
    tag: '3 access tiers',
    title: 'Live sales dashboard',
    problem:
      'Sales data lived in the ERP, which meant waiting on someone to export it — and nobody could be given direct access without seeing everybody else’s numbers.',
    built:
      'A React dashboard reading live ERP data, with three roles scoped at the database layer. Drill-down runs from brand to division to salesperson to customer to an individual invoice, with CSV export at every level.',
    hard:
      'Admin logins were slow because every one of them hit the ERP live. A scheduled job now pre-computes the admin summary on a fixed cycle and the dashboard reads the cache instead. Separately, a month of figures came out wrong because the ERP API silently caps at 10,000 records — it does not error, it just stops. Pagination has to be explicit.',
    stack: ['React 18', 'Vite', 'row-level security', 'Postgres RPC'],
  },
  {
    tag: 'on Play Store',
    title: 'Customer mobile app',
    problem:
      'Customers wanted their order and invoice history without calling someone to ask for it.',
    built:
      'A progressive web app published to the Play Store, backed by live ERP data through the automation layer, with Firebase push notifications for order and invoice events.',
    hard:
      'The app platform sanitises HTML and strips characters out of inline scripts, and blocks external chart libraries from CDNs. Large scripts had to be hosted externally and embedded, icons inlined as SVG, and every chart hand-drawn rather than pulled from a library.',
    stack: ['GoodBarber PWA', 'Play Console', 'Firebase', 'hand-built SVG'],
  },
  {
    tag: 'customer-facing',
    title: 'WhatsApp login and AI support bot',
    problem:
      'Staff needed a login that did not mean another password, and customers were asking the same handful of questions over and over.',
    built:
      'One-time-password login over WhatsApp, verified in Edge Functions on the server so the browser cannot claim a role it does not hold. On the customer side, a bot flow in Gallabox routes common queries, and an AI assistant trained on Chatbase answers open questions about products and warranties.',
    hard:
      'The ongoing work is not building the bot, it is tuning it. Reading real conversations, finding where the answer was wrong or unhelpful, and adjusting the prompt or the training sources. The bot hands off to a salesperson rather than guessing when it reaches its limit.',
    stack: ['OTP auth', 'Edge Functions', 'Gallabox', 'Chatbase', 'prompt tuning'],
  },
];

export const experience = [
  {
    when: 'Mar 2025 – Present',
    role: 'Digital Transformation Lead',
    org: 'Supreme Computers',
    bullets: [
      'Built and maintain 39 production automation workflows on a self-hosted n8n instance.',
      'Administer Dynamics 365 Business Central end to end — users, permission sets, roles and access control — and integrate it over REST and OData for live invoice, customer, item and vendor data.',
      'Designed and maintain the Supabase backend: schema, RPC functions, Edge Functions, authentication and storage.',
      'Built an in-house CRM and dashboard on Supabase for the sales teams.',
      'Led the company-wide email migration to Microsoft 365; administer SharePoint, Teams, licensing and the partner price book portal.',
    ],
  },
  {
    when: '2020 – 2025',
    role: 'Data Analyst',
    org: 'Stats Perform',
    bullets: [
      'Handled international voice, chat and email support including escalations.',
      'Administered security groups, Azure virtual machines and Windows Servers; worked with MFA, SSO and IAM.',
      'Prepared MIS reports and project plans; trained and mentored team members.',
    ],
  },
  {
    when: '2018 – 2019',
    role: 'Email Executive',
    org: 'Xalvadors Leads',
    bullets: [
      'Ran email marketing and customer support operations.',
      'Worked with AWS, SendGrid and SparkPost including API key integration.',
    ],
  },
];

export const skillGroups = [
  { title: 'Automation and integration', items: 'n8n, REST APIs, OData, webhooks, data pipelines, scheduled jobs' },
  { title: 'Business systems', items: 'Dynamics 365 Business Central, Power BI, MIS reporting' },
  { title: 'Building things', items: 'React, JavaScript, Supabase, PostgreSQL, PWA development' },
  { title: 'Messaging and AI', items: 'Meta WhatsApp Business API, Gallabox, Chatbase, prompt engineering' },
  { title: 'Servers and cloud', items: 'Linux, Docker, Traefik, Azure VM, Firebase, Google Play Console' },
  { title: 'Microsoft administration', items: 'Microsoft 365, SharePoint, Teams, email migration, MFA, SSO, IAM' },
];

export const education = {
  when: '2014 – 2017',
  degree: 'B.Com, Information System Management',
  school: 'University of Madras',
};
