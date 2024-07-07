import {
  Readers_Realm,
  backend,
  blogify,
  creator,
  css,
  figma,
  git,
  html,
  javascript,
  lws_cart,
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
    id: "work",
    title: "Work",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Lws Cart",
    description:
      "This is a comprehensive e-commerce platform developed using Next.js, React, and Tailwind CSS. The platform includes user authentication, product listings, a detailed product view, and shopping cart functionality,It is designed to be responsive, SEO-friendly, and includes internationalization for both Bengali and English.",
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
    image: lws_cart,
    source_code_link: "https://github.com/Swapno963/lwskart",
    live_site_link: "https://lwskart-nine.vercel.app/en",
  },
  {
    name: "BlogiFy",
    description:
      "Implemented an Enhanced Authentication and Profile Editing system using JWT token-based authentication, enabling users to securely edit their profiles. Developed Dynamic Blog Loading functionality with infinite scroll feature, facilitating seamless loading of blogs. ",
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
    source_code_link: "https://github.com/Swapno963/BlogiFy_Backend",
    live_site_link: "https://blogify-teal-three.vercel.app/",
  },
  {
    name: "Reader Realm",
    description:
      "Implementing a timeout mechanism for user sessions, automatically logging users out after 5 minutes of inactivity and limiting sessions to 30 minutes. Users can borrow books, leave reviews, and return them, with a profile feature enabling monitoring of borrowing activity and managing loan return dates.",
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
    image: tasker,
    source_code_link: "https://github.com/Swapno963/Readers_Realm",
    live_site_link: "https://readers-realm.onrender.com/",
  },

  {
    name: "Effortless Plan",
    description:
      "On the homepage, users can view features and reviews. They can create tasks displayed in a table format. Additionally, an authentication system has been implemented.",
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
    image: Readers_Realm,
    source_code_link: "https://github.com/Swapno963/EffortlessPlan",
    live_site_link: "https://effortless-plan.onrender.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };
