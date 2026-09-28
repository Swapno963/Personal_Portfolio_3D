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
  magicstreamArch,
  blogifyArch,
  shopverseDocker,
  shopverseInventory,
  shopverseUserApi,
} from "../assets";

export const profile = {
  name: "Swapno Mondol",
  shortRole: "Backend Engineer",
  role: "Backend Engineer · APIs, data, and production systems",
  oneLiner:
    "Backend engineer building APIs, data systems, and controlled AI execution — then putting them on AWS with Docker, Terraform, and CI/CD.",
  pitch:
    "Python and Go backends, PostgreSQL, Docker, AWS, and CI/CD. Recent work: QueryMind (LangGraph NL-to-SQL with fail-closed validation), ServeEasy (QR ordering on its own EC2, with Prometheus, Grafana, and Loki on a second host), and MagicStream (Go/Gin movie catalog with cookie JWT).",
  chips: ["Python", "Django", "PostgreSQL", "LangGraph", "MCP", "Docker", "AWS"],
  email: "swapno963@gmail.com",
  github: "https://github.com/Swapno963",
  linkedin: "https://www.linkedin.com/in/swapno-mondol-me",
  resume: "/Swapno-Mondol-Backend-Engineer.pdf",
  resume_version: "backend_v3",
  resumes: [
    {
      id: "backend",
      label: "Backend",
      href: "/Swapno-Mondol-Backend-Engineer.pdf",
      version: "backend_v3",
      downloadName: "Swapno-Mondol-Backend-Engineer.pdf",
    },
    {
      id: "devops",
      label: "DevOps",
      href: "/Swapno-Mondol-DevOps-Engineer.pdf",
      version: "devops_v3",
      downloadName: "Swapno-Mondol-DevOps-Engineer.pdf",
    },
  ],
  location: "Mirpur 2, Dhaka, Bangladesh",
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
    items: ["Python (Django, DRF, FastAPI)", "Go (Gin)", "REST APIs", "AuthN/AuthZ", "LangGraph / MCP client"],
  },
  {
    title: "Databases",
    level: "Strong",
    items: [
      "PostgreSQL",
      "MySQL / Oracle / SQL Server (adapters)",
      "Redis",
      "Schema design, allow-lists, transactions",
    ],
  },
  {
    title: "Infra & DevOps",
    level: "Intermediate → strong",
    items: [
      "Docker / Compose",
      "Linux",
      "GitHub Actions",
      "Nginx",
      "Prometheus / Grafana",
      "Loki / Alertmanager",
    ],
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
      "Policy-gated AI execution (MCP vs SQL)",
      "SQL allow-lists and function denylist",
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
      "Education SaaS, ServeEasy, QueryMind, and ShopVerse run as compose stacks so local and EC2 look the same.",
  },
  {
    title: "GitHub Actions before images move",
    detail:
      "Education and ServeEasy: tests, then publish SHA-tagged images to ECR. ServeEasy uses api-* on serveeasy-backend and web-* on serveeasy-frontend. Publish runs only after CI succeeds on main.",
  },
  {
    title: "Terraform for the box the app sits on",
    detail:
      "VPC, subnets, security groups, and EC2 for the education, QueryMind, and ServeEasy stacks — including ServeEasy’s second observability host.",
  },
  {
    title: "Nginx + dedicated hosts",
    detail:
      "QueryMind and ServeEasy each own an EC2 + nginx path (chatapp vs easyserve). Workers and backups stay off the request path where the product needs them.",
  },
  {
    title: "Observability off the app box",
    detail:
      "ServeEasy’s t3.micro exports Node Exporter, cAdvisor, API, and Postgres metrics. A second t3.small runs Prometheus, Grafana, Loki, and Alertmanager. Alerts cover CPU, memory, disk, restarts, API 5xx, and Postgres connections. No pager yet, and app logs stay on the app host.",
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
    role: "Backend: LangGraph agent, org RBAC, MCP client, multi-engine connections, read-only SQL, Docker/Terraform deploy.",
    description:
      "NL → SQL with schema inspection, sqlglot validation, no SELECT *, statement timeout, and a row cap. Deterministic policy: MCP for restaurant tools/writes, SQL only for reads. Chat never runs create/update/delete. Live demo and GitHub are the proof.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "langgraph", color: "green-text-gradient" },
      { name: "sql-safety", color: "pink-text-gradient" },
    ],
    image: querymindFlow,
    source_code_link: "https://github.com/Swapno963/Query-Mind",
    live_link: "https://chatapp.clustorflow.com",
    stack: [
      "Django / DRF",
      "LangGraph",
      "PostgreSQL / MySQL / Oracle / SQL Server",
      "sqlglot",
      "MCP client",
      "SSE streaming",
      "Docker / Nginx",
      "GitHub Actions",
      "Terraform",
    ],
    diagrams: [
      {
        src: querymindFlow,
        alt: "QueryMind flow from a natural-language question through operation classification, policy routing, MCP or SQL, then schema inspection, validation, and read-only execution.",
      },
    ],
    screenshots: [],
    caseStudy: {
      summary:
        "QueryMind answers questions from a client database in plain English. The model may draft SQL or pick an MCP tool; a deterministic policy layer decides what is allowed. Chat never mutates. Writes never fall back to SQL. Client business rows stay in the client DB — QueryMind only stores users, orgs, connections, schema cache, and history.",
      problem:
        "Staff can describe the question they have. They should not need the schema, and an LLM must not be the authority for mutating production data.",
      users:
        "A service-provider admin owns the organization, connects the shared catalog, stores an optional encrypted MCP token, and creates members. Members ask questions and only see their own conversations. Each org’s connections never run against another org’s database.",
      constraints:
        "Fail closed. Empty allow-list means no SQL. SELECT-only, no SELECT *, single statement, read-only transactions, statement timeout, and a row cap — regardless of what the model emits. Chat denies create/update/delete. API/MCP writes require a matching tool and a confirmation retry. Capability matching uses the tool JSON schema, not the first listed name.",
      architecture: [
        "QueryMind’s own database: users, organizations, memberships, workspaces, conversations, hashed API keys, encrypted MCP token.",
        "Client database is separate. Admins connect PostgreSQL, MySQL, Oracle, or SQL Server with encrypted credentials and an allow-list of tables and columns.",
        "LangGraph: classify operation → policy → MCP capability match → either MCP execute or the SQL planner/schema/generate/validate/explain/critic/execute path.",
        "READ may use MCP when a tool can satisfy the request; otherwise the read-only SQL agent. Mutations require MCP on the API surface or they are denied.",
        "Packaging: Docker, Nginx, GitHub Actions, and Terraform on the LangGraph deploy path (dedicated EC2 at chatapp.clustorflow.com).",
      ],
      decisions: [
        {
          title: "Two databases on purpose",
          body: "QueryMind metadata is not the client’s OLTP data. Mixing them would make tenancy and backups dishonest.",
        },
        {
          title: "Policy is code, not a prompt",
          body: "The LLM extracts structured intent. A Python policy table decides MCP vs SQL. There is no graph edge from a failed MCP write to SQL generation. Chat is read-only even if a write tool exists.",
        },
        {
          title: "Scored tool match, not first-match",
          body: "ServeEasy lists list_orders before get_order. Scoring prefers get_* when the user supplied an id, list_* for collections, and mark_order_paid for payment wording. A specific tool with missing args clarifies instead of silently calling list_*.",
        },
        {
          title: "Generate → validate → execute for reads",
          body: "The model drafts SQL. sqlglot parses it in the engine dialect. Only a single SELECT is allowed — no SELECT *. Tables and columns must be on the allow-list. Dangerous functions (pg_sleep, dblink, lo_import, …) are rejected. Normalized SQL is what runs — not the raw model string. Postgres SET TRANSACTION READ ONLY failures abort the execute.",
        },
        {
          title: "MCP as the business-logic boundary",
          body: "Org admins save the ServeEasy /mcp URL and an optional encrypted restaurant token for chat reads. API clients can still send X-MCP-Authorization; the header wins. Tools are listed at request time. Writes retry once with HMAC confirmed + confirmation_id. The LLM cannot supply those fields.",
        },
        {
          title: "Org admin vs member",
          body: "Signup is credentials only; product choice happens in onboarding. Admins manage users, the shared workspace, the MCP URL, and the stored token. Conversations stay private to the author. Deactivated members cannot use existing API keys.",
        },
      ],
      implementation: [
        "Schema discovery per engine, then filtering to selected tables before the prompt.",
        "ReadOnlySQLExecutor: parse, permission check, function denylist, engine-specific read-only session, timeout + row cap, execute or stream.",
        "Classifier + policy + scored capability nodes in front of the existing SQL subgraph — the SQL agent was not rewritten.",
        "Chat path streams status (classify, policy, MCP or SQL steps) over SSE so the user sees the safety steps, not a magic box.",
      ],
      challenges: [
        "Prompting the whole schema does not survive a real client database. Table selection happens first, then validation, then read-only execute.",
        "ASGI tools used to advertise empty required lists because of Python defaults. QueryMind infers identity fields; ServeEasy now overlays catalog required on tools/list.",
        "EXPLAIN JSON is PostgreSQL/MySQL only. Oracle and SQL Server skip that step; AST validation still applies.",
      ],
      deploy: [
        "Docker + Nginx + GitHub Actions + Terraform on a dedicated EC2 (separate from ServeEasy).",
        "Live: chatapp.clustorflow.com. No demo password or shared customer dataset is published here.",
      ],
      results: [
        "A backend that treats SQL generation as a privileged compiler pass, not as ‘let the model talk to Postgres’.",
        "Unit tests cover RBAC isolation, engine dialect validation, denylist, reject-without-allow-list, reject writes/DDL, READ→MCP vs READ→SQL, confirmation retry, and deny-on-unmatched mutations.",
      ],
      lessons: [
        "Safety is the product. If validation or policy is optional, this is just a text-to-SQL toy.",
        "The model can misunderstand intent. Verb overrides plus a SELECT-only executor are the hard boundaries for SQL.",
        "I still would not expose a SQL write path ‘for convenience’. Compensation and approvals belong in MCP/business APIs.",
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
      "Four FastAPI services (user, product, inventory, order) with Postgres-only inventory, SELECT FOR UPDATE locks, and pending orders when reservation fails. Lab system — no live storefront, no payment service, no saga/outbox yet.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
    ],
    image: shopverseArch,
    source_code_link: "https://github.com/Swapno963/Microservice-with-FastAPI",
    live_link: null,
    stack: ["FastAPI", "PostgreSQL", "MongoDB", "Docker Compose", "JWT", "Nginx (optional)"],
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
        "ShopVerse is a FastAPI microservice backend I use to practice the parts of commerce that actually hurt: inventory correctness, service boundaries, and what you skip on purpose. It is not a live storefront. Payment and a storefront UI are intentionally absent.",
      problem:
        "User, catalog, stock, and orders have different consistency needs. Treating them as one CRUD database hides the failure modes.",
      users:
        "API consumers of user, product, inventory, and order services. No public shoppers; this is a backend system.",
      constraints:
        "Synchronous HTTP between services so the system stays debuggable. Event-driven compensation is designed, not shipped.",
      architecture: [
        "User, product, and order services store documents in MongoDB.",
        "Inventory is the only service on PostgreSQL — ACID, row locks (SELECT FOR UPDATE), transactional history.",
        "Each service has its own multi-stage Docker image. Compose brings the mesh up for local and lab deploys.",
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
        "JWT auth on the user service (register, login, refresh, profile, addresses).",
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
    name: "ServeEasy",
    id: "restaurant_qr",
    slug: "restaurant-qr",
    project_category: "saas",
    hasCaseStudy: true,
    sourceStatus: "writeup",
    problem:
      "Each restaurant is a tenant. A QR code on a table should only ever create orders inside that restaurant’s menu, staff, and branch — never leak across accounts. Staff tools must be role-scoped, not ‘every waiter sees every admin action’.",
    role: "Backend + deploy: Django/DRF multi-tenant ordering, MCP server, Next.js UI, dedicated EC2/ECR pipeline.",
    description:
      "Multi-tenant QR ordering with staff roles, streamable MCP at /mcp, and a dedicated EC2 stack (nginx → Django API + Next.js). A second EC2 in the same VPC runs Prometheus, Grafana, Loki, and Alertmanager. Application source is private. Live: easyserve.clustorflow.com.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "mcp", color: "green-text-gradient" },
      { name: "multi-tenant", color: "pink-text-gradient" },
    ],
    image: restaurantFlow,
    source_code_link: "https://github.com/Swapno963/serveeasy-observability",
    live_link: "https://easyserve.clustorflow.com",
    stack: [
      "Django / DRF",
      "Next.js",
      "PostgreSQL",
      "MCP (streamable HTTP)",
      "JWT",
      "Docker Compose",
      "Nginx",
      "AWS EC2 / ECR",
      "Terraform",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Loki",
      "Alertmanager",
    ],
    diagrams: [
      {
        src: restaurantFlow,
        alt: "Restaurant QR flow from table scan through tenant restaurant, order rules, and kitchen roles.",
      },
    ],
    screenshots: [],
    caseStudy: {
      summary:
        "ServeEasy is a multi-tenant restaurant product on its own EC2: QR ordering, role-scoped staff tools, and an MCP server QueryMind can call. A second t3.small in the same VPC watches the app host. There is no second app instance, no autoscaling, and no automatic remediation.",
      problem:
        "A waiter, chef, cashier, and owner do not share one permission set. Cross-restaurant leakage is a product failure, not a nice-to-have.",
      users:
        "Diners scan a table QR. Waiters, chefs, cashiers, and owners use staff tools. QueryMind is an MCP client, not a second ACL.",
      constraints:
        "Restaurant JWT is the tenant and the role. QueryMind must not add a second permission table. HTTP :80 is a private pilot; TLS before real guest traffic. The app host is a t3.micro with hard memory caps and Postgres limited to 40 connections. Monitoring stays on a separate t3.small so Prometheus does not compete with the database.",
      architecture: [
        "Django/DRF API: restaurants, menus, tables, orders, staff, payments (trial + manual billing; QueryMind quota enforced in API).",
        "Next.js UI on the same origin via nginx (/ → web:3000, /api /mcp /health → api:8000).",
        "MCP at /mcp (streamable HTTP, ASGI/Gunicorn+Uvicorn). tools/list filtered by role; catalog required overlaid on ASGI schemas.",
        "Writes require HMAC confirmed + confirmation_id (10 minute TTL). QueryMind retries that handshake once on the API surface. ServeEasy calls QueryMind’s messages API; QueryMind’s org MCP URL points at ServeEasy /mcp.",
        "Terraform in the same VPC: app EC2 (t3.micro) and observability EC2 (t3.small, 20 GiB encrypted disk).",
        "Prometheus scrapes the app private IP every 15 seconds: Node Exporter :9100, API /metrics/ on :9101, Postgres exporter :9187, cAdvisor :8088. Those ports accept traffic only from the observability security group.",
        "Grafana on :3000 is provisioned with host, API, and Postgres dashboards. Loki stores the observability host’s container logs. Alloy on that host ships them. App container logs stay on the app server.",
        "Alertmanager receives CPU, memory, disk, restart, API 5xx, and Postgres connection alerts. The receiver has no email or chat target yet.",
      ],
      decisions: [
        {
          title: "JWT is the ACL",
          body: "user.restaurant_id and role on the token scope every tool. QueryMind forwards Authorization; it does not filter the catalog a second time.",
        },
        {
          title: "Dedicated EC2, not QueryMind’s box",
          body: "/opt/serveeasy, compose project serveeasy. ECR repositories serveeasy-backend (api-*) and serveeasy-frontend (web-*). Different public IP and DNS from chatapp.clustorflow.com. Publish workflows run only after CI succeeds on main. Deploy is still started by hand.",
        },
        {
          title: "Catalog required on ASGI list",
          body: "Python defaults used to make inputSchema.required empty. Overlaying TOOL_SPECS.required means get_order actually requires order_id.",
        },
        {
          title: "Confirmation stays HMAC",
          body: "Local execute_tool still checks the token. QueryMind-routed writes complete in one graph run by sending the confirmation once. The LLM cannot bind confirmed / confirmation_id.",
        },
        {
          title: "Monitoring on a second host",
          body: "The app box has about 1 GiB. Prometheus, Loki, and Grafana would steal that from Postgres. Terraform adds a t3.small. Prometheus keeps 7 days. Replacing that instance deletes the metrics and logs, because they live on its disk.",
        },
        {
          title: "Alerts without a pager",
          body: "Rules fire for CPU above 85%, memory or disk below 15%, a ServeEasy container restarting more than twice in 15 minutes, API 5xx above 5% while traffic is flowing, and Postgres above 32 of 40 connections. Alertmanager groups them. Nothing emails or pages yet.",
        },
      ],
      implementation: [
        "Role-filtered tool names: waiter reads, chef status, cashier mark paid, owner menu writes.",
        "Missing identity args return needs_parameters, not a guessed row.",
        "Replay of the same confirmation_id returns the saved result.",
        "GHA publish workflows for API and web; deploy workflow pulls tagged images onto the ServeEasy host.",
        "API counter serveeasy_http_requests_total by method and status. No latency histogram.",
        "Provisioned Grafana dashboards: host CPU, memory, and disk; API request rate and 5xx ratio; Postgres connections and exporter up.",
        "ServeEasy does not run Redis, so there is no Redis exporter.",
      ],
      challenges: [
        "Thin tool schemas made QueryMind pick list_orders for ‘show order 123’. Scored matching plus catalog required closed that gap.",
        "Chat must stay read-only even when a write tool is on the server.",
        "WSGI runserver is not enough for streamable MCP — ASGI is required for QueryMind as a client.",
        "Grafana :3000 and Alertmanager :9093 are open to the internet, with a Grafana password and sign-up disabled. There is no TLS. The same metrics view is also reachable at /api/metrics/ through nginx.",
        "Alloy only ships logs from the observability host. An API traceback is still in Docker json logs on the app server, capped at 10 MiB times three files.",
      ],
      deploy: [
        "Live at easyserve.clustorflow.com. MCP path is /mcp. Same-origin API at /api/.",
        "Application source is private. The public observability repo is the live stack: Compose, scrape config, alert rules, and the three Grafana dashboards. github.com/Swapno963/serveeasy-observability.",
      ],
      results: [
        "A restaurant product QueryMind can call without QueryMind inventing tools.",
        "In-process tests cover role-filtered tools/list, catalog required, and HMAC confirmation.",
        "Repeatable publish → ECR → EC2 deploy path separate from QueryMind.",
        "A dashboard that separates host pressure, a container restart loop, API 5xx, and Postgres connection use before SSH.",
      ],
      lessons: [
        "Do not advertise every tool and return 403. Filter the catalog.",
        "Do not let the model ‘know’ it must not call admin tools. The server is the ACL.",
        "Two products on two hosts beats one shared nginx that forgets which compose project owns :80.",
        "Do not put the metrics stack on the same 1 GiB host as Postgres. Do not claim a pager, HA, or app-log search that is not wired.",
      ],
    },
  },
  {
    name: "MagicStream",
    id: "magicstream",
    slug: "magicstream",
    project_category: "backend",
    hasCaseStudy: true,
    sourceStatus: "public",
    problem:
      "Build a portfolio-grade movie catalog in Go without pretending to be a video CDN — auth, recommendations, and admin review ranking still have to be honest.",
    role: "Backend: Go/Gin REST API, MongoDB, JWT cookie auth, optional OpenAI ranking with fallback.",
    description:
      "Same-origin Go API + MongoDB + static UI. HTTP-only JWT cookies, paginated catalog, YouTube trailers after sign-in, genre-overlap recommendations, and admin review ranking with an OpenAI side path that falls back to the admin selection.",
    tags: [
      { name: "go", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "jwt", color: "pink-text-gradient" },
    ],
    image: magicstreamArch,
    source_code_link: "https://github.com/Swapno963/Movie-Streaming-App-with-Go",
    live_link: null,
    stack: [
      "Go / Gin",
      "MongoDB 7",
      "JWT (HTTP-only cookies)",
      "LangChainGo / OpenAI (optional)",
      "Docker Compose",
      "GitHub Actions",
    ],
    diagrams: [
      {
        src: magicstreamArch,
        alt: "MagicStream architecture: static frontend to Gin API to MongoDB, with optional OpenAI ranking fallback.",
      },
    ],
    screenshots: [],
    caseStudy: {
      summary:
        "MagicStream is a same-origin movie catalog MVP: Go REST API, MongoDB, cookie JWT auth, and a small static frontend. Trailers are YouTube embeds. OpenAI can classify a staff review; missing or invalid model output stores the admin-selected ranking instead.",
      problem:
        "Need a clean Go backend story: layered packages, real auth tiers, and AI as an optional side path — not a Netflix clone with fake streaming claims.",
      users:
        "Public visitors browse the catalog. Signed-in users open detail/trailers and get genre-overlap recommendations. Admins add movies and update staff reviews.",
      constraints:
        "No Redis, queues, or Kubernetes. Authorization is middleware, not a hidden UI link. GET /movies returns a paginated object (frontend still accepts a legacy array).",
      architecture: [
        "Browser → static UI on :8080 → Gin API (same origin) → MongoDB.",
        "Optional OpenAI ranking path with allow-list validation and admin fallback.",
        "Packages: routes, controllers, middleware, ranking, database — no extra framework.",
      ],
      decisions: [
        {
          title: "HTTP-only cookies over localStorage tokens",
          body: "Access (24h) and refresh (7d) cookies. Refresh must match the token stored on the user document so logout or rotation invalidates the cookie even if the JWT has not expired.",
        },
        {
          title: "AI as a side path",
          body: "Core catalog, auth, and playback never call OpenAI. Only admin review updates try classification; garbage or timeout falls back to the admin ranking.",
        },
        {
          title: "Auth tiers in middleware",
          body: "Public catalog/auth/health. Authenticated detail and recommendations. Admin writes. Hiding an Add Movie button is not a security control.",
        },
      ],
      implementation: [
        "Register/login/logout/refresh and GET /me with bcrypt passwords.",
        "Paginated catalog with title search and genre filter.",
        "Authenticated movie detail + YouTube trailer; deterministic ‘For you’ recommendations.",
        "Admin add movie and update review; /health and /ready (Mongo ping).",
        "Docker Compose for API + Mongo; GHA format, vet, test, build.",
      ],
      challenges: [
        "Breaking change on GET /movies pagination — documented and dual-supported in the bundled frontend.",
        "First account matching ADMIN_EMAIL becomes ADMIN; everyone else is USER.",
      ],
      deploy: [
        "docker compose up --build → http://localhost:8080.",
        "Public GitHub: Movie-Streaming-App-with-Go. No production host claimed.",
      ],
      results: [
        "A walkable Go API with cookie auth, readiness checks, and an honest AI boundary.",
        "CI keeps gofmt, vet, test, and build on the critical path.",
      ],
      lessons: [
        "Portfolio MVPs should state what they are not (video CDN) as clearly as what they are.",
        "Optional AI that can fail closed is safer than making playback depend on a model.",
      ],
    },
  },
  {
    name: "Blogify",
    id: "blogify",
    slug: "blogify",
    project_category: "fullstack",
    hasCaseStudy: true,
    sourceStatus: "public",
    problem:
      "A blogging product needs real auth, author-only writes, and social actions — not a tutorial CRUD dump with a fake ‘deployed’ badge.",
    role: "Full-stack: Django/DRF API, React SPA, JWT client handling, Docker packaging.",
    description:
      "Full-stack blogging: Django REST (JWT, posts, search, likes, comments, favorites, paginated infinite scroll) plus a React SPA for feed, writing, and profiles. API packaged with Docker; frontend on Vercel.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "jwt", color: "pink-text-gradient" },
    ],
    image: blogifyArch,
    source_code_link: "https://github.com/Swapno963/BlogiFy_Backend",
    live_link: null,
    stack: [
      "Django / DRF",
      "SimpleJWT",
      "PostgreSQL",
      "Gunicorn / Docker",
      "React / Vite",
      "React Router",
      "Axios",
    ],
    diagrams: [
      {
        src: blogifyArch,
        alt: "Blogify architecture: React SPA talking to a Django REST API backed by PostgreSQL.",
      },
    ],
    screenshots: [],
    caseStudy: {
      summary:
        "Blogify is a personal blogging product: DRF API for auth and social posts, React SPA for the feed and editor. Author-only edit/delete, access + refresh tokens on the client, and Docker packaging for the API.",
      problem:
        "Need a complete SPA + API loop — register, write, scroll, comment, favorite — with permissions that match authorship, not ‘logged in can edit anything’.",
      users:
        "Readers browse and search publicly. Authors register, write, edit their own posts, and manage profile/avatar. Comments are public to read; write/delete requires login and ownership.",
      constraints:
        "Two repos (API + frontend). No shared demo credentials in docs — register your own account.",
      architecture: [
        "React SPA (Vite, React Router, Axios) → Django REST API → PostgreSQL.",
        "JWT access + refresh on the client; private write route redirects to login.",
        "API deployed historically on Railway/Render; frontend on Vercel.",
      ],
      decisions: [
        {
          title: "Author-only mutations",
          body: "Edit and delete are scoped to the post author. Comments follow the same ownership rule for delete.",
        },
        {
          title: "Pagination for infinite scroll",
          body: "List endpoints return pages the SPA can append — not one giant dump of every post.",
        },
        {
          title: "Separate frontend and backend repos",
          body: "Deploy and iterate independently. Frontend: github.com/Swapno963/Blogify_Frontend.",
        },
      ],
      implementation: [
        "Register/login, profile/bio and avatar updates.",
        "CRUD on own posts; search; most-liked; favorites.",
        "Comments: public read; authenticated write/delete own.",
        "Docker packaging for the API deploy path.",
      ],
      challenges: [
        "Token refresh on the client has to stay silent on page navigation without leaking expired sessions into write routes.",
        "Media/avatar URLs must resolve against the deployed API origin, not localhost assumptions.",
      ],
      deploy: [
        "API: Docker + Gunicorn (Railway/Render historically). Frontend: Vercel.",
        "No public demo password. Clone and register locally or against a deployed API.",
      ],
      results: [
        "A complete blogging loop I can demo end-to-end: auth, feed, write, social actions.",
        "Public backend and frontend repos that match the case study.",
      ],
      lessons: [
        "Full-stack portfolio work is strongest when permissions and deploy story are explicit.",
        "Infinite scroll without real pagination is just a fake.",
      ],
    },
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
