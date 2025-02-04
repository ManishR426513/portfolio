export const METADATA = {
  author: "Manish Rawat",
  title: "Portfolio | Manish Rawat",
  description:
    "Manish Rawat is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubhporwal24",
  keywords: [
    "Manish Rawat",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  //"A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: manishrawat0711@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/manish-rawat-477142300/",
  },
  {
    name: "github",
    url: "https://github.com/DeveloperManishR",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com",
  },
  {
    name: "twitter",
    url: "https://x.com",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  // {
  //   name: "Airbnb",
  //   image: "/projects/airbnb.webp",
  //   blurImage: "/projects/blur/airbnb-blur.webp",
  //   description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
  //   gradient: ["#F14658", "#DC2537"],
  //   url: "https://shubh73-airbnb.vercel.app/",
  //   tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  // },
  // {
  //   name: "Medium",
  //   image: "/projects/medium.webp",
  //   blurImage: "/projects/blur/medium-blur.webp",
  //   description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
  //   gradient: ["#FFA62E", "#EA4D2C"],
  //   url: "https://shubh73-medium.vercel.app/",
  //   tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  // },
  // {
  //   name: "Inshorts",
  //   image: "/projects/inshorts.webp",
  //   blurImage: "/projects/blur/airbnb-blur.webp",
  //   description:
  //     "Conversational Voice Controlled React News Application using Alan AI 🎙",
  //   gradient: ["#000066", "#6699FF"],
  //   url: "https://shubh73-inshorts.netlify.app/",
  //   tech: ["react", "chakra-ui", "alan"],
  // },
  // {
  //   name: "Tesla",
  //   image: "/projects/tesla.webp",
  //   blurImage: "/projects/blur/tesla-blur.webp",
  //   description: "A Tesla React Native App 🏎️",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://github.com/shubh73/tesla",
  //   tech: ["react"],
  // },

  // {
  //   name: "Side Hustl",
  //   image: "/projects/tesla.webp",
  //   blurImage: "/projects/blur/tesla-blur.webp",
  //   description: "SideHustl connects busy people (Creatrs) with skilled workers (Hustlrs) for any task, big or small.",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://github.com/shubh73/tesla",
  //   tech: ["react"],
  // },


  {
    "name": "Gym Website",
    "image": "/projects/michaelchandler.png",
    "blurImage": "/projects/blur/michaelchandler.png",
    "description": "A high-energy gym website built for fitness enthusiasts. Features an engaging UI, interactive elements, and Mapbox integration for location tracking.",
    "gradient": ["#F14658", "#DC2537"],
    "url": "https://www.michaelchandler.com/",
    "tech": ["react", "nextjs", "tailwindcss", "mapbox"]
  },
  {
    "name": "Ag Infra",
    "image": "/projects/aginfra.png",
    "blurImage": "/projects/blur/aginfra.png",
    "description": "A sleek Medium UI clone with a modern, distraction-free reading experience. Built using Next.js and Tailwind CSS.",
    "gradient": ["#FFA62E", "#EA4D2C"],
    "url": "https://agsinfra.in",
    "tech": ["typescript", "nextjs", "tailwindcss"]
  },
  {
    "name": "Kelowna Boat",
    "image": "/projects/boat.png",
    "blurImage": "/projects/blur/boat.png",
    "description": "A premium boat rental website with a seamless booking experience. Features Alan AI voice search and a clean UI.",
    "gradient": ["#000066", "#6699FF"],
    "url": "https://kelownaboatcharters.ca",
    "tech": ["react", "chakra-ui", "alan"]
  },
  {
    "name": "Moody Girl",
    "image": "/projects/modgirl.png",
    "blurImage": "/projects/blur/modgirl.png",
    "description": "A stylish fashion startup offering trendy collections. Designed for modern women with a smooth shopping experience.",
    "gradient": ["#142D46", "#2E4964"],
    "url": "https://moodygirl.in",
    "tech": ["react"]
  }
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  Delimp : [
    {
      title: "Delimp Technology",
      description:
        "I embarked on my professional journey as a Frontend Developer at Delimp Technology, where I honed my skills in crafting seamless user experiences.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-lg font-semibold">
          Pioneering digital innovation, one interface at a time.
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "At Delimp, I mastered essential frontend technologies, including HTML, CSS, SASS, Photoshop, jQuery, and more, setting the foundation for my growth.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-lg font-semibold">
          Crafting pixel-perfect experiences.
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for enhanced performance and user engagement, I led the migration of the Dukaan App from native to React Native for iOS and Android. This transition resulted in a significant boost in app performance and user engagement.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-lg font-semibold">
          Engineering seamless cross-platform solutions.
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I redesigned the seller web dashboard, reducing bounce rates. Additionally, I optimized the build process, significantly decreasing bundle size and improving overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-lg font-semibold">
          Enhancing efficiency, elevating experiences.
        </div>
      ),
    },
  ],
  
  TOK : [
    {
      title: "Team Of Keys",
      description:
        "Began my career as a Backend Developer, specializing in building scalable APIs, optimizing database performance, and enhancing system architecture to deliver seamless user experiences.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-4 text-center">
          <p className="text-lg font-semibold">"Great systems are built on strong backends."</p>
          <p className="text-sm opacity-75 mt-2">Crafting efficient, scalable, and secure backend solutions.</p>
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Advanced my backend development skills by mastering Node.js, database management, and cloud integration. Gained experience in API development, authentication, and server-side optimization.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white px-4 text-center">
          <p className="text-lg font-semibold">Backend Developer</p>
          <p className="text-sm opacity-75 mt-2">Optimizing performance, security, and scalability.</p>
        </div>
      ),
    },
  ],
  
  
  SPACENOS: [
    {
      title: "Spacenos",
      description:
        "A dynamic startup dedicated to creating innovative products that make the world a better place.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
