// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import laravelLogo from './assets/tech_logo/laravel.png';
import phpLogo from './assets/tech_logo/php.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import oopLogo from './assets/tech_logo/oop.jpg';
import herdLogo from './assets/tech_logo/herd.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/softy_black.png';
import agcLogo from './assets/company_logo/creative.png';
import newtonschoolLogo from './assets/company_logo/LearnHunter.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/cm.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/web_dig.png';
import taskremLogo from './assets/work_logo/recipe.png';
import npmLogo from './assets/work_logo/Screenshot 2025-05-01 213111.png';
import webverLogo from './assets/work_logo/Screenshot 2025-05-01 213430.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Laravel Framework', logo: laravelLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'PHP', logo: phpLogo },
      { name: 'OOP', logo: oopLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Herd', logo: herdLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Backend Developer",
      company: "Softvence Agency (BdCalling)",
      date: "September 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the PHP Laravel framework, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Jquery",
        "PHP",
        'OOP',
        "Tailwind CSS",
        "Bootstrap",
        "Laravel Framework",
        "MySQL",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Internship - Laravel Developer Course",
      company: "Criative IT",
      date: "July 2025 - September 2025",
      desc: "A comprehensive backend development course focused on Laravel, covering RESTful API development, MVC architecture, authentication, Eloquent ORM, and database management. Gained hands-on experience by building real-world applications and integrating frontend technologies like ReactJS.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Jquery",
        "PHP",
        'OOP',
        "Tailwind CSS",
        "Bootstrap",
        "Laravel Framework",
        "MySQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "First Course of Web Development",
      company: "LearnHunter",
      date: "June 2022 - July 2025",
      desc: "I Completed a comprehensive Web Development course covering both frontend and backend technologies. Gained hands-on experience in building dynamic and responsive websites using HTML, CSS, JavaScript, and jQuery. Developed full-stack applications with PHP and Laravel, applying Object-Oriented Programming (OOP) principles. Worked with MySQL databases and modern UI frameworks like Tailwind CSS and Bootstrap to design clean and user-friendly interfaces.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Jquery",
        "PHP",
        'OOP',
        "Tailwind CSS",
        "Bootstrap",
        "Laravel Framework",
        "MySQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Sept 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2015 - March 2016",
      grade: "87.5%",
      desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Real estate website", 
      description:"This Real Estate website is a full-stack web application designed to facilitate property listings, management, and user interactions. The platform allows users to browse and search for real estate properties, view detailed listings with images, and contact agents. It includes a responsive user-facing frontend built with React JS and a powerful admin dashboard developed in Laravel for managing properties, users, and inquiries. The backend is powered by Laravel and MySQL, with secure API integrations and a modern UI for seamless experience. Ideal for real estate agencies and property managers looking to digitize their operations.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript","PHP","Laravel Framework","API","MySQL",'React JS'],
      github: "https://github.com/mizanurmillon/prideridgehc",
      AdminDashboard: "https://prideridgehc.softvencefsd.xyz",
      webapp: "https://synergy-nvest.netlify.app/",
    },
    {
      id: 1,
      title: "Doctor Appointment Booking System",
      description:
        "A comprehensive Doctor Appointment Booking System that streamlines the process of scheduling medical appointments. Built with Laravel and PHP for a secure and scalable backend, and React.js for a dynamic and responsive frontend. The system features patient registration, doctor profiles, appointment management, real-time availability checking, and separate interfaces for users and administrators. Data is managed efficiently using MySQL, with robust API integration ensuring smooth communication between the frontend and backend.",
      image: csprepLogo,
      tags: ["HTML", "CSS", "JavaScript","PHP","Laravel Framework","API","MySQL",'React JS'],
      github: "https://github.com/mizanurmillon/jingduanyang",
      AdminDashboard: "https://jingduanyang.softvencefsd.xyz/",
      webapp: "https://mind-care-taupe.vercel.app/",
    },
    {
      id: 2,
      title: "Course Uploader System",
      description:
        "A web-based Course Uploader System designed to allow admins or instructors to easily upload, manage, and publish educational content. Built with Laravel and PHP for backend functionality and React.js for a modern and interactive frontend. The system supports features such as course categorization, video or document uploads, secure authentication, and a clean user interface. MySQL is used for reliable data storage, while RESTful APIs enable seamless integration between the client and server.",
      image: movierecLogo,
      tags: ["HTML", "CSS", "JavaScript","PHP","Laravel Framework","API","MySQL",'React JS'],
      github: "https://github.com/mizanurmillon/adem_laday.git",
      AdminDashboard: "https://dashboard.bjjsource.com/",
      webapp: "https://bjjsource.com/",
    },
    {
      id: 3,
      title: "Custom Product Packaging Web Site",
      description:
        "A dynamic and responsive e-commerce platform focused on custom product packaging solutions. Developed using Laravel and PHP for the backend and React.js for a sleek, interactive frontend. The system enables users to customize packaging products, place orders, and track status through a smooth and intuitive interface. Admins can manage products, orders, and customer data via a dedicated dashboard. The platform utilizes MySQL for data management and integrates APIs for real-time functionality and scalability.",
      image: npmLogo,
      tags: ["HTML", "CSS", "JavaScript","PHP","Laravel Framework","API","MySQL",'React JS'],
      github: "https://github.com/mizanurmillon/mjevora_backend.git",
      AdminDashboard: "https://admin.777bags.com/",
      webapp: "https://777bags.com/",
    },
    {
      id: 4,
      title: "Baby Bites to Golden Delights – Healthy Recipes & Tips for All thys",
      description:
        "A health-focused recipe-sharing platform designed to provide nutritious meal ideas and wellness tips for all age groups—from babies to seniors. Built with Laravel and PHP for a secure backend and React.js for a dynamic frontend experience. Users can browse recipes, read expert health tips, and contribute their own dishes. The system supports recipe categorization, user authentication, and API-driven content management, with MySQL ensuring reliable data storage.",
      image: taskremLogo,
      tags: ["HTML", "CSS", "JavaScript","PHP","Laravel Framework","API","MySQL",'React JS'],
      github: "https://github.com/mizanurmillon/mohammadhasanii_backend.git",
      webapp: "https://health-recipes-frontend.netlify.app",
    },
    {
      id: 5,
      title: "Mobile App for Alarm System For Backend",
      description:
        "A backend system developed for a mobile alarm application, ensuring reliable and secure management of user data, alarm configurations, and notifications. Built using Laravel and PHP for robust backend logic, with MySQL for efficient data storage. The system provides RESTful APIs to support real-time alarm scheduling, user authentication, and mobile app integration. React.js is used for administrative or web-based interfaces, enabling smooth monitoring and control functionalities.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript","PHP","Laravel Framework","API","MySQL",'React JS'],
      github: "https://github.com/mizanurmillon/theoa_backend.git",
      webapp: "https://theoa.softvencefsd.xyz/",
    },
    
  ];  