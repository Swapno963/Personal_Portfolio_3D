import {
  AnalyzeHub,
  Readers_Realm,
  backend,
  blogify,
  creator,
  css,
  figma,
  git,
  global_goods,
  html,
  javascript,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tasker,
  tesla,
  threejs,
  typescript,
  web,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Next js",
    icon: mobile,
  },
  {
    title: "React js",
    icon: backend,
  },
  {
    title: "Django",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as within that short period of time, but  he made it possible.",
    name: "Rakib Khan",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Swapno does.",
    name: "Sujos Nag",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Swapno optimized our website, our user experience increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Global Goods",
    description:
      "This is a SEO-friendly e-commerce platform supports 2 languages",
    features: [
      { id: 1, text: "Jwt based authientication" },
      { id: 2, text: "Show new arrival and related products" },
      { id: 3, text: "Automatic pdf download wile checkout" },
    ],

    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Custom hook",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: global_goods,
    frontend_code_link: "https://github.com/Swapno963/Global_Goods",
    backend_code_link: null,
    live_site_link: "https://lwskart-nine.vercel.app/en",
  },
  {
    name: "BlogiFy",
    description:
      "Developed Dynamic Blog Loading functionality with infinite scroll feature, facilitating seamless loading of blogs. ",
    features: [
      { id: 1, text: "Custom hook for authientication" },
      { id: 2, text: "Debouncing for searching products" },
      { id: 3, text: "Ligng and Dark mode supported" },
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django(DRF)",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blogify,
    frontend_code_link: "https://github.com/Swapno963/Blogify_Frontend",
    backend_code_link: "https://github.com/Swapno963/BlogiFy_Backend",
    live_site_link: "https://blogify-teal-three.vercel.app/",
  },
  {
    name: "AnalyzeHub",
    description:
      "This is the frontend of the Dashboard App, built with React and utilizing D3.js for data visualization.",
    features: [
      { id: 1, text: "Interactive data visualizations with D3.js" },
      {
        id: 2,
        text: "Dynamic dashboards with bar charts, pie charts, line charts, box plots, and tables",
      },
      { id: 3, text: "API integration for data analysis" },
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django(DRF)",
        color: "green-text-gradient",
      },
      {
        name: "D3",
        color: "pink-text-gradient",
      },
    ],
    image: AnalyzeHub,
    frontend_code_link: "https://github.com/Swapno963/AnalyzeHub-Frontend",
    backend_code_link: "https://github.com/Swapno963/AnalyzeHub-Backend",
    live_site_link: "https://analyze-hub-frontend.vercel.app/",
  },
  {
    name: "Reader Realm",
    description:
      "A library management app, where user can borrow, return books.",
    features: [
      { id: 1, text: "Implementing a timeout mechanism for user sessions" },
      { id: 2, text: "Users can borrow books, leave reviews" },
      {
        id: 3,
        text: "monitoring of borrowing activity and managing loan return dates.",
      },
    ],
    tags: [
      {
        name: "Django(MVT)",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Readers_Realm,
    frontend_code_link: null,
    backend_code_link: "https://github.com/Swapno963/Readers_Realm",
    live_site_link: "https://readers-realm.onrender.com/",
  },
  {
    name: "Effortless Plan",
    description:
      "On the homepage, users can view features and reviews. They can create tasks displayed in a table format. Additionally, an authentication system has been implemented.",
    features: [
      { id: 1, text: "authentication system has been implemented" },
      { id: 2, text: "Add,delete tasks " },
      { id: 3, text: "User can view tasks displayed in a table format." },
    ],

    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tasker,
    frontend_code_link: null,
    backend_code_link: "https://github.com/Swapno963/EffortlessPlan",
    live_site_link: "https://effortless-plan.onrender.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };
