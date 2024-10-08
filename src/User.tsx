import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandWhatsapp,
  IconMail 
} from "@tabler/icons-react";

const Info = {
  name: "Raja Mathiyalagan",
  stack: ["FrontEnd Developer"],
  bio: "As a frontend developer,I am dedicated to crafting beautiful, functional, and intuitive user interfaces that engage and delight users.My approach to development is collaborative and user-centered, ensuring that the end result meets your needs and satisfies your users. I am constantly expanding my knowledge and skills to stay up-to-date with the latest trends and best practices in the industry.By the way I love to build the frontend with ReactJs. And the combination of react and tailwind CSS is always satisfying for me!!.",
  Profile: "Hero",
};

const ProjectInfo = [
  {
    title: "Ekart E-comm App",
    desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
    image: "Ekart",
    live: true,
    technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
    link: "https://code-mars.github.io/Ekart/",
    github: "https://github.com/Code-Mars/Ekart/",
  },
  {
    title: "Facebook Clone",
    desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    image: "Facebook",
    live: false,
    technologies: [
      "React",
      "Springboot",
      "MongoDB",
      "Tailwind",
      "Tabler-Icons",
      "Firebase",
    ],
    link: "https://github.com/Code-Mars/Facebook-Clone",
    github: "https://github.com/Code-Mars/Facebook-Clone",
  },
  {
    title: "Spotify Clone",
    desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    image: "Spotify",
    live: false,
    technologies: [
      "React",
      "Springboot",
      "Tailwind",
      "Tabler-Icons",
      "MongoDB",
      "Firebase",
    ],
    link: "https://github.com/Code-Mars/Spotify-Clone",
    github: "https://github.com/Code-Mars/Spotify-Clone",
  },
  {
    title: "Travel Tracker",
    desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
    image: "Travel",
    live: false,
    technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
    link: "https://github.com/Code-Mars/Travel-Tracker",
    github: "https://github.com/Code-Mars/Travel-Tracker",
  },
  {
    title: "Instagram Clone",
    desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    image: "Instagram",
    live: false,
    technologies: [
      "React",
      "Springboot",
      "Tailwind",
      "Heroicons",
      "Firebase",
      "MongoDB",
    ],
    link: "https://github.com/Code-Mars/Instagram-Clone",
    github: "https://github.com/Code-Mars/Instagram-Clone",
  },
  {
    title: "CodeX Code Editor",
    desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
    image: "CodeX",
    live: false,
    technologies: ["React", "Tailwind", "Ace Editor"],
    link: "https://github.com/Code-Mars/CodeX",
    github: "https://github.com/Code-Mars/CodeX",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "React Native",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "AWS Amplify",
      "Node JS",
      "Express JS",
      "MySQL",
      "MongoDB",
      "Firebase",
      "SQLite",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"],
  },
];
const socialLinks = [
  { link: "https://github.com/Raja0514", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/raja-mathiyalagan-56b741227/",
    icon: IconBrandLinkedin,
  },
  { link: "", icon: IconBrandWhatsapp },

  { link: "mailto:rajamr1987@gmail.com", icon: IconMail },
  {
    link: "http://www.youtube.com/@mucatcode3468",
    icon: IconBrandYoutube,
  },
];

const ExperienceInfo = [
  {
    role: "Zen Class FullStack Developer Program",
    link: "https://www.guvi.in/",
    company: "Guvi",
    date: "July 2021 - November 2022",
    desc: " Throughout this course, I've take a first look at the core technologies of HTML, CSS, and Javascript and explore the concepts that underpin how the internet works, I have gained invaluable knowledge and skills in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I've learned how to create dynamic user interfaces, integrate APIs, manage databases and deploy the site.",
    skills:
      "https://www.guvi.in/certificate?id=17750u096Ph31969L8&download=true",
  },
  {
    role: "Namaste React Live Course",
    link: "https://namastedev.com/",
    company: "NamasteDEV.com",
    date: "Dec 2022 - Feb 2023",
    desc: "From this course I've learned ReactJS deeply.And get familiar with Function Based Component,Class Based Component and React Hooks,Virtual DOM,Redux Toolkit and many more deeply.And explore how Bundlers like a Parcel,Vite and Create React App   works in browser.Also i learn from this course how to handle the Live API like a Swiggy API and YouTube API using this API's i have Done Projects.",
    skills:
      "https://drive.google.com/file/d/13o9IpQaitrFlc5IXSTv4WPubRoSs5Lnx/view",
  },
];
const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
