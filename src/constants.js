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
import csprepLogo from './assets/work_logo/Screenshot_4.png';
import movierecLogo from './assets/work_logo/web_dig.png';
import taskremLogo from './assets/work_logo/recipe.png';
import npmLogo from './assets/work_logo/Screenshot 2025-05-01 213111.png';
import webverLogo from './assets/work_logo/Screenshot 2025-10-19 170644.png';


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
      img: bsaLogo,
      school: "Canadian University of Bangladesh",
      date: "present",
      grade: "N/A",
      desc: "I am currently pursuing my Bachelor's degree in Computer Science (B.Sc.) at the Canadian University of Bangladesh. Throughout my studies, I have explored various subjects including Data Structures and Algorithms, Web Development, and Database Management Systems. These courses have provided me with both theoretical knowledge and practical experience in software development. I have also worked on projects that apply classroom concepts to real-world challenges, enhancing my problem-solving and coding skills.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 1,
      img: glaLogo,
      school: "Thakurgaon Polytechnic Institute",
      date: "2020-2024",
      grade: "3.15 CGPA",
      desc: "I completed the Diploma in Engineering with Computer Science from Thakurgaon Polytechnic Institute, under the Dhaka board, where I studied Engineering with Computer Science.",
      degree: "Diploma in Engineering with Computer Science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Baliadangi Pilot Model High School",
      date: "2018-2020",
      grade: "3.89 CGPA",
      desc: "I completed my class 10 education from Baliadangi Pilot Model High School, under the Dinajpur board, where I studied Science.",
      degree: "(SSC) - Secondary School Certificate",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Service Provider Management System (flutter app backend and App landing page)", 
      description:"A comprehensive Service Provider Management System built with Laravel for the backend and Flutter for the mobile app frontend. This system includes an intuitive admin dashboard for managing users, services, and provider activities, as well as a responsive landing page to promote the app. The backend provides secure APIs to support seamless app functionality and real-time data handling.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript","PHP","Laravel Framework","API","MySQL",'flutter'],
      github: "https://github.com/mizanurmillon/paddydyna_backend.git",
      AdminDashboard: "https://dashboard.nixrly.com/",
      webapp: "https://nixrly.com/",
    },
    {
      id: 1,
      title: "Multi vendor e-commerce website (Laravel backend and React)",
      description:
        "A scalable multi-vendor e-commerce platform built using Laravel and React JS. This system allows multiple vendors to register, manage their stores, and sell products through a centralized marketplace. It includes features like product management, order tracking, vendor commissions, admin control panel, and a responsive user interface for both customers and sellers. The backend provides secure APIs to support seamless app functionality and real-time data handling.",
      image: csprepLogo,
      tags: ["HTML", "CSS", "JavaScript","PHP","Laravel Framework","API","MySQL",'React JS'],
      github: "https://github.com/mizanurmillon/Sustainable-Trades",
      AdminDashboard: "https://melissabooth123.softvencefsd.xyz",
      webapp: "https://sustainable-trades.vercel.app/",
    },
    {
      id: 2,
      title: "Course Uploader System",
      description:
        "A web-based Course Uploader System designed to allow admins or instructors to easily upload, manage, and publish educational content. Built with Laravel and PHP for backend functionality and React.js for a modern and interactive frontend. The system supports features such as course categorization, video or document uploads, secure authentication, and a clean user interface. MySQL is used for reliable data storage, while RESTful APIs enable seamless integration between the client and server.",
      image: movierecLogo,
      tags: ["HTML", "CSS", "JavaScript","PHP","Laravel Framework","API","MySQL",'React JS'],
      github: "https://github.com/mizanurmillon/adam_leddy.git",
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
      github: "https://github.com/mizanurmillon/sevens_llc.git",
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
      github: "https://github.com/mizanurmillon/healthy-care-recipes.git",
      webapp: "https://healthy-care-recipes.vercel.app/",
    },
    {
      id: 5,
      title: "Plant Website",
      description:
        "Plant Website is a modern, responsive web application designed to showcase a variety of plants and gardening products. Built with HTML, CSS, TailwindCSS, and JavaScript, the website features an attractive layout, smooth navigation, and interactive elements to enhance user experience. Visitors can explore different plants, learn about their care, and enjoy a visually appealing, mobile-friendly design.",
      image: webverLogo,
      tags: ["HTML", "CSS", "tailwindcss","JavaScript"],
      github: "https://github.com/mizanurmillon/Plant-website.git",
      webapp: "https://plantwebs.netlify.app/",
    },
    
  ];  
