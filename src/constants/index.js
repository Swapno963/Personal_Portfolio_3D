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
    "Backend engineer building APIs, data systems, and controlled AI execution — then putting them on AWS with Docker, Terraform, and CI/CD.",
  pitch:
    "Python and Go backends, PostgreSQL, Docker, AWS, and CI/CD. Recent work: QueryMind, a LangGraph NL-to-SQL product with org RBAC, an MCP client for restaurant tools, and a policy layer so the LLM cannot authorize writes.",
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
      version: "devops_v1",
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
    role: "Backend: LangGraph agent, org RBAC, MCP client, multi-engine connections, read-only SQL.",
    description:
      "NL → SQL with schema inspection, sqlglot validation, a function denylist, and a deterministic policy layer: MCP for restaurant tools and writes, SQL only for reads. Chat never runs create/update/delete. Live demo and GitHub are the proof.",
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
        "QueryMind answers questions from a client database in plain English. The model may draft SQL or pick an MCP tool; a deterministic policy layer decides what is allowed. Chat never mutates. Writes never fall back to SQL.",
      problem:
        "Staff can describe the question they have. They should not need the schema, and an LLM must not be the authority for mutating production data.",
      users:
        "A service-provider admin owns the organization, connects the shared catalog, stores an optional encrypted MCP token, and creates members. Members ask questions and only see their own conversations. Each org’s connections never run against another org’s database.",
      constraints:
        "Fail closed. Empty allow-list means no SQL. The SQL agent is SELECT-only regardless of what the model emits. Chat denies create/update/delete. API/MCP writes require a matching tool and a confirmation retry. Capability matching uses the tool JSON schema, not the first listed name.",
      architecture: [
        "QueryMind’s own database: users, organizations, memberships, workspaces, conversations, hashed API keys, encrypted MCP token.",
        "Client database is separate. Admins connect PostgreSQL, MySQL, Oracle, or SQL Server with encrypted credentials and an allow-list of tables and columns.",
        "LangGraph: classify operation → policy → MCP capability match → either MCP execute or the existing SQL planner/schema/generate/validate/explain/critic/execute path.",
        "READ may use MCP when a tool can satisfy the request; otherwise the read-only SQL agent. Mutations require MCP on the API surface or they are denied.",
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
          body: "The model drafts SQL. sqlglot parses it in the engine dialect. Only a single SELECT is allowed. Tables and columns must be on the allow-list. Dangerous functions (pg_sleep, dblink, lo_import, …) are rejected. Normalized SQL is what runs — not the raw model string. Postgres SET TRANSACTION READ ONLY failures abort the execute.",
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
        "ReadOnlySQLExecutor: parse, permission check, function denylist, engine-specific read-only session, execute or stream.",
        "Classifier + policy + scored capability nodes in front of the existing SQL subgraph — the SQL agent was not rewritten.",
        "Chat path streams status (classify, policy, MCP or SQL steps) over SSE so the user sees the safety steps, not a magic box.",
      ],
      challenges: [
        "Prompting the whole schema does not survive a real client database. Table selection happens first, then validation, then read-only execute.",
        "ASGI tools used to advertise empty required lists because of Python defaults. QueryMind infers identity fields; ServeEasy now overlays catalog required on tools/list.",
        "EXPLAIN JSON is PostgreSQL/MySQL only. Oracle and SQL Server skip that step; AST validation still applies.",
      ],
      deploy: [
        "Runnable as a Django app with a QueryMind database plus a client database connection.",
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
    name: "ServeEasy",
    id: "restaurant_qr",
    slug: "restaurant-qr",
    project_category: "saas",
    hasCaseStudy: true,
    sourceStatus: "request",
    problem:
      "Each restaurant is a tenant. A QR code on a table should only ever create orders inside that restaurant’s menu, staff, and branch — never leak across accounts. Staff tools must be role-scoped, not ‘every waiter sees every admin action’.",
    role: "Backend: Django/DRF multi-tenant ordering plus an MCP server QueryMind can call.",
    description:
      "Multi-tenant restaurant QR ordering with staff roles, and an MCP server at /mcp: catalog required fields, HMAC write confirmation, JWT restaurant scope. Live: easyserve.clustorflow.com. Source on request.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "mcp", color: "green-text-gradient" },
      { name: "multi-tenant", color: "pink-text-gradient" },
    ],
    image: restaurantFlow,
    source_code_link: null,
    live_link: "https://easyserve.clustorflow.com",
    stack: ["Django", "DRF", "PostgreSQL", "MCP (streamable HTTP)", "JWT"],
    diagrams: [
      {
        src: restaurantFlow,
        alt: "Restaurant QR flow from table scan through tenant restaurant, order rules, and kitchen roles.",
      },
    ],
    screenshots: [],
    caseStudy: {
      summary:
        "ServeEasy is a multi-tenant restaurant product: QR ordering for diners, role-scoped staff tools, and an MCP server so QueryMind can list and call those tools without inventing them.",
      problem:
        "A waiter, chef, cashier, and owner do not share one permission set. Cross-restaurant leakage is a product failure, not a nice-to-have.",
      users:
        "Diners scan a table QR. Waiters, chefs, cashiers, and owners use staff tools. QueryMind is an MCP client, not a second ACL.",
      constraints:
        "Restaurant JWT is the tenant and the role. QueryMind must not add a second permission table or advertise tools the role cannot call.",
      architecture: [
        "Django/DRF app: restaurants, menus, tables, orders, staff, payments.",
        "MCP at /mcp (streamable HTTP) with JWT auth. tools/list is filtered by role; catalog required is overlaid on ASGI schemas.",
        "Writes require HMAC confirmed + confirmation_id (10 minute TTL). QueryMind retries that handshake once on the API surface.",
      ],
      decisions: [
        {
          title: "JWT is the ACL",
          body: "user.restaurant_id and role on the token scope every tool. QueryMind forwards Authorization; it does not filter the catalog a second time.",
        },
        {
          title: "Catalog required on ASGI list",
          body: "Python defaults used to make inputSchema.required empty. Overlaying TOOL_SPECS.required means get_order actually requires order_id.",
        },
        {
          title: "Confirmation stays HMAC",
          body: "Local execute_tool still checks the token. QueryMind-routed writes complete in one graph run by sending the confirmation once. The LLM cannot bind confirmed / confirmation_id.",
        },
      ],
      implementation: [
        "Role-filtered tool names: waiter reads, chef status, cashier mark paid, owner menu writes.",
        "Missing identity args return needs_parameters, not a guessed row.",
        "Replay of the same confirmation_id returns the saved result.",
      ],
      challenges: [
        "Thin tool schemas made QueryMind pick list_orders for ‘show order 123’. Scored matching plus catalog required closed that gap.",
        "Chat must stay read-only even when a write tool is on the server.",
      ],
      deploy: [
        "Live at easyserve.clustorflow.com. MCP path is /mcp.",
        "Application source is private; this page is the public write-up.",
      ],
      results: [
        "A restaurant product QueryMind can call without QueryMind inventing tools.",
        "In-process tests cover role-filtered tools/list, catalog required, and HMAC confirmation.",
      ],
      lessons: [
        "Do not advertise every tool and return 403. Filter the catalog.",
        "Do not let the model ‘know’ it must not call admin tools. The server is the ACL.",
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
