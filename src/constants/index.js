import {
  mobile,
  backend,
  creator,
  web,
  meraki,
  cooking,
  educationArch,
  querymindFlow,
  shopverseArch,
  restaurantFlow,
  shopverseDocker,
  shopverseInventory,
  shopverseUserApi,
} from "../assets";

export const profile = {
  name: "Swapno Mondol",
  shortRole: "Backend Engineer",
  role: "Backend Engineer · APIs, data, and production systems",
  oneLiner:
    "Backend engineer building APIs and data-heavy systems, then putting them on AWS with Docker, Terraform, and CI/CD.",
  pitch:
    "Python and Go backends, PostgreSQL, Docker, AWS, and CI/CD — I design, deploy, and debug systems that have to stay up.",
  chips: ["Go", "Python", "PostgreSQL", "Docker", "AWS", "Terraform", "GitHub Actions"],
  email: "swapno963@gmail.com",
  github: "https://github.com/Swapno963",
  linkedin: "https://www.linkedin.com/in/swapno-mondol-me",
  resume: "/Swapno-Mondol-Backend-DevOps.pdf",
  resume_version: "backend_v1",
  location: "Dhaka, Bangladesh",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "API & data modeling",
    icon: web,
  },
  {
    title: "Production deployment",
    icon: backend,
  },
  {
    title: "Background jobs & reliability",
    icon: mobile,
  },
  {
    title: "Multi-tenant product systems",
    icon: creator,
  },
];

const skillGroups = [
  {
    title: "Backend",
    level: "Strong",
    items: ["Python (Django, DRF, FastAPI)", "Go (Gin)", "REST APIs", "AuthN/AuthZ"],
  },
  {
    title: "Databases",
    level: "Strong",
    items: ["PostgreSQL", "Redis", "MongoDB (working)", "Schema design & transactions"],
  },
  {
    title: "Infra & DevOps",
    level: "Intermediate → strong",
    items: ["Docker / Compose", "Linux", "GitHub Actions", "Nginx"],
  },
  {
    title: "Cloud",
    level: "Intermediate",
    items: ["AWS (EC2, S3, ECR)", "Terraform", "VPC / security groups"],
  },
  {
    title: "Architecture",
    level: "Working knowledge",
    items: [
      "Service boundaries",
      "Background workers (Asynq)",
      "Polyglot persistence",
      "Multi-tenant data models",
    ],
  },
  {
    title: "Frontend",
    level: "Working knowledge",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Learning",
    level: "Familiar — not a core claim",
    items: ["Kubernetes"],
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Meraki Innovation",
    icon: meraki,
    iconBg: "#1d1836",
    date: "Jan 2025 – Present",
    points: [
      "Owned a configurable production dashboard: operators compose widgets from internal databases, external databases, and APIs instead of waiting on a new screen for every report.",
      "Implemented multi-engine data access, dynamic tables, and RBAC so widget data and replacement workflows stay inside each tenant’s permissions.",
      "Designed document versioning with revision history so operational records stay auditable instead of being overwritten in place.",
      "Owned CI/CD and Terraform-based deploys across on-prem Windows Server and AWS so releases are repeatable, not one-off copies.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Cooking Station",
    icon: cooking,
    iconBg: "#2a1f16",
    date: "Sep 2024 – Dec 2024",
    points: [
      "Maintained a live Django MVT product: bugfixes, features, and admin workflows that staff actually used.",
      "Redesigned parts of the schema under changing production requirements instead of layering more patches on a model that no longer matched the business.",
      "Integrated third-party APIs and scheduled jobs so operational work did not sit inside a single request/response cycle.",
    ],
  },
];

const productionProofs = [
  {
    title: "Docker Compose as the unit of deploy",
    detail:
      "Education SaaS and ShopVerse run as compose stacks (API, workers, Postgres, Redis) so local and EC2 look the same.",
  },
  {
    title: "GitHub Actions before images move",
    detail:
      "Education pipeline: format, vet, lint, tests, security scan, then publish SHA-tagged images to ECR.",
  },
  {
    title: "Terraform for the box the app sits on",
    detail:
      "VPC, subnets, security groups, and EC2 for the education stack — infrastructure is code, not a console click-path.",
  },
  {
    title: "Nginx + workers + backups",
    detail:
      "Reverse proxy in front of Next.js and the Go API, Redis/Asynq off the request path, Postgres dumps to object storage.",
  },
];

const projects = [
  {
    name: "Education Institutions SaaS",
    id: "education_saas",
    slug: "education-saas",
    project_category: "backend",
    hasCaseStudy: true,
    sourceStatus: "writeup",
    problem:
      "Multi-branch schools were running academic and admin work across ad-hoc tools. They needed one role-based system for students, classes, fees, assessments, and notifications.",
    role: "Backend and deploy: Go APIs, Postgres, workers, Docker, Terraform, GitHub Actions.",
    description:
      "Go/Gin APIs, PostgreSQL, Redis/Asynq workers, Docker, Terraform, and GitHub Actions to ECR on EC2. Closest artifact to a real backend + DevOps interview loop.",
    tags: [
      { name: "go", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "terraform", color: "pink-text-gradient" },
    ],
    image: educationArch,
    source_code_link:
      "https://github.com/Swapno963/SaaS-Education-Platform-Case-Study",
    live_link: null,
    stack: [
      "Go / Gin",
      "PostgreSQL",
      "Redis / Asynq",
      "Next.js",
      "Docker Compose",
      "Nginx",
      "AWS EC2 / ECR / S3",
      "Terraform",
      "GitHub Actions",
    ],
    diagrams: [
      {
        src: educationArch,
        alt: "Education SaaS architecture: Nginx in front of Next.js and a Go API, with Postgres, Redis workers, S3 backups, and GitHub Actions to ECR.",
      },
    ],
    screenshots: [],
    caseStudy: {
      summary:
        "A school operations platform I designed and operate as a production-shaped stack: Go APIs, Postgres on EC2, background jobs, and a CI/CD path from GitHub Actions to ECR to Docker Compose. Application source is private; the public case-study repo is the write-up.",
      problem:
        "Branch admins, teachers, and students needed one system for classes, attendance, assessments, fees, and notifications. Spreadsheets and one-off apps do not survive multi-branch role boundaries.",
      users:
        "Branch admins (operations), teachers (classwork), students (their own academic data). Access is role-based. No real student records are shown here.",
      constraints:
        "Small team, cost-sensitive, needed shipping speed without pretending we were running Kubernetes. Database and app sharing one EC2 was an accepted MVP tradeoff — documented, not hidden.",
      architecture: [
        "Internet → Nginx → Next.js UI and Go API.",
        "Go API talks to PostgreSQL, Redis (Asynq workers), and object storage.",
        "CI: GitHub Actions format/vet/lint/test; main also security-scans, builds, and publishes SHA-tagged images to ECR.",
        "Deploy: compose stack on EC2 after a manual deploy workflow selects frontend and backend image tags.",
      ],
      decisions: [
        {
          title: "Go + Gin, handler → repository",
          body: "HTTP handlers stay thin. Persistence lives in repositories so domain logic is not glued to Gin context. That made auth middleware and background jobs share the same data access path.",
        },
        {
          title: "Postgres on EC2, not RDS — yet",
          body: "Self-hosted Postgres in Compose was cheaper and faster to stand up. Persistent volume, cron dumps, restore runbook. At 10× load I would move the database to RDS first — the app is already stateless enough for that cut.",
        },
        {
          title: "Redis / Asynq instead of cron-in-request",
          body: "Fees, notifications, and other fan-out work cannot sit in a request timeout. Workers consume Asynq jobs so the API can return quickly and retries happen off the user path.",
        },
        {
          title: "GHA → ECR → Compose, not a laptop deploy",
          body: "Every main build is an image with a SHA tag. EC2 pulls those tags. Secrets stay in GitHub Actions and host env files — not in the repo, and not on this site.",
        },
      ],
      implementation: [
        "AuthN/AuthZ middleware on the Go API.",
        "Schema and query work in PostgreSQL, including migrations.",
        "Non-root containers, minimal images, vulnerability scanning in CI.",
        "Nginx routes UI vs API. Health checks after deploy.",
        "Daily Postgres dumps toward S3 for recovery.",
      ],
      challenges: [
        "Single EC2 is a single point of failure. Documented. Next reliability step is decoupling the database, then putting an ALB in front of more than one app instance.",
        "Manual deploy after images land in ECR is slower than GitOps. It is also explicit — no silent production mutate from a feature branch.",
      ],
      deploy: [
        "Terraform provisions VPC, subnets, security groups, and EC2.",
        "GitHub Actions publishes images to ECR; a deploy workflow updates Compose on the host.",
        "Nginx terminates the public path. Workers run beside the API, not inside it.",
      ],
      results: [
        "A system I can walk through end-to-end: API, jobs, database, CI, image publish, and host deploy.",
        "Public evidence is the architecture write-up and this page. Implementation source is available on request.",
      ],
      lessons: [
        "Do not bind the design to one instance even if you start on one instance: files go to S3, backups go to S3, app stays stateless.",
        "I would not claim Prometheus, Loki, or OpenTelemetry as shipped. Those are next, not now.",
        "At 10× load: RDS, then load-balanced app nodes, then containers-as-a-service if operations demand it — not EKS on day one.",
      ],
    },
  },
  {
    name: "QueryMind",
    id: "querymind",
    slug: "querymind",
    project_category: "ai",
    hasCaseStudy: true,
    sourceStatus: "public",
    problem:
      "People need answers from a client database in plain English. An LLM cannot be allowed to run arbitrary SQL against production data.",
    role: "Backend: schema inspection, SQL generation, validation, and read-only execution.",
    description:
      "NL → SQL with schema inspection, sqlglot validation, table allow-lists, and read-only execution. Distinct from CRUD. No public hosted demo — architecture and GitHub are the proof.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "sql-safety", color: "pink-text-gradient" },
    ],
    image: querymindFlow,
    source_code_link: "https://github.com/Swapno963/Query-Mind",
    live_link: null,
    stack: ["Django", "PostgreSQL", "sqlglot", "SSE streaming", "LLM-assisted SQL"],
    diagrams: [
      {
        src: querymindFlow,
        alt: "QueryMind flow from a natural-language question through schema inspection, SQL generation, validation, and read-only execution.",
      },
    ],
    screenshots: [],
    caseStudy: {
      summary:
        "QueryMind does not store the client’s business rows. It connects to a client database, reads schema, turns a question into SQL, validates that SQL, and only then executes it under a read-only transaction.",
      problem:
        "Analysts and staff can describe the question they have. They should not need to know the schema, and the model should not be able to change data.",
      users:
        "Organization members who attach a database connection. Each connection is tenant-scoped so Customer A’s question never runs on Customer B’s database.",
      constraints:
        "Fail closed. Empty allow-list means no query. Writes are not a feature. Large schemas cannot all be dumped into a prompt.",
      architecture: [
        "QueryMind’s own Postgres: users, organizations, connections, cached schema, query history.",
        "Client database is separate. Credentials are stored for the connection, not mixed into QueryMind’s product tables.",
        "Pipeline: identify connection → load/filter schema → generate SQL → validate → execute read-only → return rows / explanation.",
      ],
      decisions: [
        {
          title: "Two databases on purpose",
          body: "QueryMind metadata is not the client’s OLTP data. Mixing them would make tenancy and backups dishonest.",
        },
        {
          title: "Generate → validate → execute",
          body: "The model drafts SQL. sqlglot parses it. Only a single SELECT is allowed. Tables must be on the allow-list. Normalized SQL is what actually runs — not the raw model string.",
        },
        {
          title: "Read-only transaction + timeout + row cap",
          body: "SET TRANSACTION READ ONLY, statement_timeout, and a max row count. Streaming exists so large results do not require loading everything at once.",
        },
        {
          title: "What the model is not allowed to do",
          body: "No DELETE/UPDATE/INSERT, no multiple statements, no tables outside the allow-list, no execution if the allow-list is empty. Invalid SQL fails closed instead of ‘trying it anyway’.",
        },
      ],
      implementation: [
        "Schema discovery from database metadata, then filtering to selected tables before the prompt.",
        "ReadOnlySQLExecutor: parse, permission check, read-only txn, execute or stream.",
        "Chat path streams status (schema, generate, validate, execute) over SSE so the user sees the safety steps, not a magic box.",
      ],
      challenges: [
        "Prompting the whole schema does not survive a real client database. Table selection has to happen first.",
        "A hosted demo is not public. I am not going to invent a live URL. GitHub and this write-up are the evidence.",
      ],
      deploy: [
        "Runnable as a Django app with a QueryMind database plus a client database connection.",
        "No production IP, demo password, or shared student/customer dataset is published here.",
      ],
      results: [
        "A backend that treats SQL generation as a privileged compiler pass, not as ‘let the model talk to Postgres’.",
        "Tests cover reject-without-allow-list, reject writes, and fail-closed invalid SQL.",
      ],
      lessons: [
        "Safety is the product. If validation is optional, this is just a text-to-SQL toy.",
        "I still would not expose a write path ‘for convenience’. Compensation and approvals are a different system.",
      ],
    },
  },
  {
    name: "ShopVerse",
    id: "shopverse",
    slug: "shopverse",
    project_category: "backend",
    hasCaseStudy: true,
    sourceStatus: "public",
    problem:
      "Inventory is a scarce resource. A generic e-commerce clone that updates stock with a naive UPDATE will oversell the moment two orders land together.",
    role: "Backend: FastAPI services, polyglot persistence, inventory transactions.",
    description:
      "FastAPI microservices with Postgres-only inventory, row locks, and pending orders when reservation fails. A production-shaped learning system — not a live marketplace. Outbox/saga is an explicit next step.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
    ],
    image: shopverseArch,
    source_code_link: "https://github.com/Swapno963/Microservice-with-FastAPI",
    live_link: null,
    stack: ["FastAPI", "PostgreSQL", "MongoDB", "Docker Compose", "JWT"],
    diagrams: [
      {
        src: shopverseArch,
        alt: "ShopVerse services: User, Product, Inventory with Postgres locks, and Order remaining pending if reservation fails.",
      },
    ],
    screenshots: [
      {
        src: shopverseDocker,
        alt: "Docker Compose services for ShopVerse running locally.",
      },
      {
        src: shopverseInventory,
        alt: "Inventory service API: reserve, release, adjust, and history under transactions.",
      },
      {
        src: shopverseUserApi,
        alt: "User service API for registration, login, and token management.",
      },
    ],
    caseStudy: {
      summary:
        "ShopVerse is a FastAPI microservice backend I use to practice the parts of commerce that actually hurt: inventory correctness, service boundaries, and what you skip on purpose. It is not a live storefront.",
      problem:
        "User, catalog, stock, and orders have different consistency needs. Treating them as one CRUD database hides the failure modes.",
      users:
        "API consumers of user, product, inventory, and order services. No public shoppers; this is a backend system.",
      constraints:
        "Synchronous HTTP between services so the system stays debuggable. Event-driven compensation is designed, not shipped.",
      architecture: [
        "User, product, and order services store documents in MongoDB.",
        "Inventory is the only service on PostgreSQL — ACID, row locks, transactional history.",
        "Each service has its own Docker image. Compose brings the mesh up for local and lab deploys.",
      ],
      decisions: [
        {
          title: "Postgres only where overselling is fatal",
          body: "Inventory uses transactions and SELECT FOR UPDATE. Product/user/order can evolve as documents. Polyglot persistence is a decision, not a résumé keyword.",
        },
        {
          title: "Reservation failure leaves the order pending",
          body: "If stock cannot be reserved, the order does not pretend it succeeded. The client can retry. I did not hide this behind a fake 201.",
        },
        {
          title: "HTTP now, outbox later",
          body: "Critical reservation stays synchronous. Email, audit, analytics can become events later. Outbox/saga is the known gap — I would rather say that than claim a distributed transaction I did not build.",
        },
      ],
      implementation: [
        "JWT auth on the user service.",
        "Inventory: create, reserve, release, adjust (transactional); low-stock and history (read).",
        "Order create checks availability, reserves, then stores a pending order.",
        "Cancel releases inventory when the order is still cancellable.",
      ],
      challenges: [
        "Two services and two databases means you will see ‘order pending, stock unchanged’ under failure. That is the honest state.",
        "Row locks protect correctness and will limit write throughput. I would add atomic UPDATEs and read models before adding Kafka for fashion.",
      ],
      deploy: [
        "docker compose up --build. Multi-stage images. docker ps is the lab evidence, not a production SLA.",
      ],
      results: [
        "A walkable example of inventory as a scarce resource, not as an integer column on a product document.",
        "Public GitHub with architecture notes that match the code.",
      ],
      lessons: [
        "Interviewers care that I know what I did not build yet.",
        "Consistency is a per-service choice. Making everything ‘eventual’ is how you oversell.",
      ],
    },
  },
  {
    name: "Restaurant QR Ordering SaaS",
    id: "restaurant_qr",
    slug: "restaurant-qr",
    project_category: "saas",
    hasCaseStudy: false,
    sourceStatus: "request",
    problem:
      "Each restaurant is a tenant. A QR code on a table should only ever create orders inside that restaurant’s menu, staff, and branch — never leak across accounts.",
    role: "Backend: Django/DRF multi-tenant data model and ordering constraints.",
    description:
      "Multi-tenant restaurant QR ordering: tenant-scoped models, staff roles, and order isolation in Django/DRF. The interesting part is the data model, not the UI. Source on request.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "drf", color: "green-text-gradient" },
      { name: "multi-tenant", color: "pink-text-gradient" },
    ],
    image: restaurantFlow,
    source_code_link: null,
    live_link: null,
    stack: ["Django", "DRF", "PostgreSQL"],
    diagrams: [
      {
        src: restaurantFlow,
        alt: "Restaurant QR flow from table scan through tenant restaurant, order rules, and kitchen roles.",
      },
    ],
    screenshots: [],
  },
];

const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

export {
  services,
  skillGroups,
  experiences,
  productionProofs,
  projects,
  getProjectBySlug,
};
