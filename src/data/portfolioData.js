import vyomImage from '../assets/anchal/projects/vyom.png';
import bgiLaunchpadImage from '../assets/anchal/projects/bgi-launchpad.png';
import lexAiImage from '../assets/anchal/projects/lexai.png';
import compilerImage from '../assets/anchal/projects/compiler.png';
import javascriptCertificate from '../assets/anchal/certificates/javascript-fundamentals.jpeg';
import technovisionCertificate from '../assets/anchal/certificates/technovision-2026.jpeg';
import ideaHackathonCertificate from '../assets/anchal/certificates/idea-hackathon.jpeg';
import sqlCertificate from '../assets/anchal/certificates/sql-basic.jpeg';
import buildverseRunnerUpCertificate from '../assets/anchal/certificates/buildverse-runner-up.jpeg';
import bgiHackathonCertificate from '../assets/anchal/certificates/bgi-hackathon-runner-up.jpeg';
import buildverseSaasCertificate from '../assets/anchal/certificates/buildverse-saas-enterprise.jpeg';
import gfgCertificate from '../assets/anchal/certificates/gfg.jpg';
import nptelCertificate from '../assets/anchal/certificates/nptel.jpg';
import samsungCertificate from '../assets/anchal/certificates/samsung.jpg';

export const personalInfo = {
  name: 'Anchal Shukla',
  firstName: 'Anchal',
  brandName: 'Anchal Shukla',
  title: 'Full Stack Developer',
  location: 'Bhopal, Madhya Pradesh, India',
  phone: '+91 7999519713',
  emails: {
    primary: 'anchalshukla423@gmail.com',
    secondary: '',
  },
  summary:
    'Full Stack Developer focused on MERN, Java, and Spring Boot, with hands-on experience building production-style web and mobile applications end to end.',
  resumeUrl: '/Anchal_Shukla_Resume.pdf',
};

export const socialLinks = {
  github: 'https://github.com/anchal-shukla123',
  linkedin: 'https://linkedin.com/in/anchal-shukla-005757294',
  leetcode: 'https://leetcode.com/u/anchalshu2005',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/anchalshugis',
  instagram: '',
};

export const heroContent = {
  greeting: "Hi, I'm Anchal Shukla",
  titleHighlight: 'Full Stack Developer',
  subtitle:
    'I build scalable full-stack applications with React, React Native, Node.js, Java, Spring Boot, and modern cloud-ready backends.',
  ctaPrimary: { text: 'View My Work', href: '#projects' },
  ctaSecondary: {
    text: 'Contact Me',
    href: 'mailto:anchalshukla423@gmail.com?subject=Hiring Inquiry - Portfolio&body=Hello Anchal,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,',
  },
  ctaResume: { text: 'Download Resume', href: '/Anchal_Shukla_Resume.pdf' },
};

export const aboutContent = {
  heading: 'Hello!',
  bio: 'Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Anchal Shukla</span>, a final-year Computer Science Engineering student and full stack developer who enjoys building secure, responsive, and production-ready digital products.',
  techStack: ['React', 'Spring Boot', 'PostgreSQL', 'Java', 'Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs'],
};

export const skillsContent = {
  badge: 'My Process',
  heading: 'Here is how I turn ideas into production-ready software',
  description:
    'I move from problem understanding to clean architecture, fast iteration, testing, deployment, and measurable polish.',
  cards: [
    {
      number: '01',
      title: 'Research',
      text: 'I begin by understanding the users, project goals, constraints, security needs, and product scope before touching the architecture.',
    },
    {
      number: '02',
      title: 'Design',
      text: 'I shape responsive interfaces, database models, API contracts, and user flows that can scale beyond a prototype.',
    },
    {
      number: '03',
      title: 'Develop',
      text: 'I build with React, React Native, Node.js, Express, Java, Spring Boot, and reliable database integrations.',
    },
    {
      number: '04',
      title: 'Deploy',
      text: 'I test, optimize, and deploy applications using platforms like Vercel, Render, Railway, Supabase, AWS, Docker, and Neon.',
    },
  ],
  endText: 'Ready to ship!',
};

export const technicalSkills = {
  categories: [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 92 },
        { name: 'Java', level: 88 },
        { name: 'SQL', level: 86 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 92 },
      ],
    },
    {
      title: 'Frontend & Mobile',
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'React Native', level: 88 },
        { name: 'Expo SDK', level: 86 },
        { name: 'Bootstrap', level: 84 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'Spring Boot', level: 86 },
        { name: 'REST APIs', level: 91 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 86 },
        { name: 'MySQL', level: 84 },
        { name: 'Redis', level: 78 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'Vercel', level: 90 },
        { name: 'Render', level: 86 },
        { name: 'Supabase', level: 84 },
        { name: 'Postman', level: 88 },
      ],
    },
    {
      title: 'Core Fundamentals',
      skills: [
        { name: 'Data Structures', level: 92 },
        { name: 'Algorithms', level: 90 },
        { name: 'OOP', level: 91 },
        { name: 'DBMS', level: 88 },
      ],
    },
  ],
};

export const projects = [
  {
    id: 'vyom',
    number: '01',
    badge: 'Flagship Mobile App',
    title: 'Vyom',
    description:
      'A React Native and Expo commerce platform for local sellers with product discovery, persistent carts, wishlists, multimedia social posts, seller storefronts, live-streaming commerce blocks, secure payment flows, and one-tap express checkout.',
    techTags: ['React Native', 'Expo SDK', 'Node.js', 'Express', 'PostgreSQL', 'Payments', 'Live Commerce'],
    image: vyomImage,
    imageAlt: 'Vyom mobile commerce app screenshot',
    links: {
      github: 'https://github.com/anchal-shukla123/Vyom-mobile-app/blob/main/README.md',
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: 'bgi-launchpad',
    number: '02',
    badge: 'Hackathon Project',
    title: 'BGI Launchpad',
    description:
      'A campus hub and community management platform with announcements, feedback, events, lost-and-found, admin workflows, REST APIs, a responsive React frontend, and a layered Java Spring Boot backend deployed in a production-like cloud setup.',
    techTags: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'AWS EC2', 'Docker', 'REST APIs'],
    image: bgiLaunchpadImage,
    imageAlt: 'BGI Launchpad dashboard screenshot',
    links: {
      github: 'https://github.com/anchal-shukla123/Bgi-launchpad-backend',
      demo: 'https://bgi-launchpad-frontend-zzxk.vercel.app',
    },
    isFlagship: false,
  },
  {
    id: 'lexai',
    number: '03',
    badge: 'AI Product',
    title: 'LexAI',
    description:
      'A contract review experience that helps users upload agreements, identify important clauses, flag risk areas, and generate plain-English review reports through a polished dashboard interface.',
    techTags: ['React.js', 'AI Workflow', 'Document Review', 'Dashboard UI', 'Risk Analysis'],
    image: lexAiImage,
    imageAlt: 'LexAI contract review system screenshot',
    links: {
      github: 'https://github.com/anchal-shukla123/LexAI',
      demo: 'https://lex-ai-frontend-opal.vercel.app/',
    },
    isFlagship: false,
  },
  {
    id: 'compiler',
    number: '04',
    badge: 'Developer Tool',
    title: 'CodeRunner Compiler',
    description:
      'A frontend-focused online compiler interface for writing, compiling, and running code across multiple programming languages with a modern, responsive developer experience.',
    techTags: ['React.js', 'Compiler UI', 'JavaScript', 'Python', 'C++', 'Java'],
    image: compilerImage,
    imageAlt: 'CodeRunner compiler landing screen screenshot',
    links: {
      github: 'https://github.com/anchal-shukla123/Online-Repository',
      demo: 'https://online-compiler-gold-gamma.vercel.app/',
    },
    isFlagship: false,
  },
];

export const experienceList = [
  {
    organization: 'BGI National Hackathon 2026',
    role: 'Team Leader - Runner-Up',
    duration: 'May 2026',
    skills: [
      'Led a team to Runner-Up among 600+ teams and 2,800+ candidates nationwide.',
      'Directed technical strategy, task delegation, presentation flow, and milestone delivery.',
      'Built around the theme of mobile and next-gen app innovation for local sellers and community engagement.',
    ],
    tech: ['Team Leadership', 'Product Strategy', 'React Native', 'Node.js', 'PostgreSQL'],
  },
  {
    organization: 'BuildVerse Hackathon 2026',
    role: 'Team Leader - 2nd Runner-Up Overall',
    duration: 'June 2026',
    skills: [
      'Delivered a scalable enterprise-focused solution with strong technical implementation and business impact.',
      'Won the SaaS & Enterprise Domain Award for a high-impact industry-oriented product.',
      'Balanced security, optimization, product usability, and reliable delivery under competition pressure.',
    ],
    tech: ['SaaS', 'Enterprise Systems', 'Security', 'Optimization', 'Pitching'],
  },
  {
    organization: 'Competitive Programming & DSA',
    role: 'Problem Solver',
    duration: 'Ongoing',
    skills: [
      'Secured Top 1% rank in NPTEL Data Structures and Algorithms with a Silver Badge.',
      'Completed the GFG 160 Days Challenge.',
      'Solved 700+ problems across LeetCode and GeeksforGeeks.',
    ],
    tech: ['DSA', 'Algorithms', 'Java', 'Problem Solving'],
  },
];

export const educationList = [
  {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
    duration: 'Sep 2023 - July 2027',
    score: 'CGPA: 8.39/10',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'M.P. Board',
    duration: 'July 2022 - April 2023',
    score: '89.4%',
  },
  {
    degree: 'Secondary (X)',
    institution: 'M.P. Board',
    duration: 'July 2020 - April 2021',
    score: '95%',
  },
];

export const certificates = {
  featured: [
    {
      name: 'BGI Hackathon 2026 Runner-Up',
      issuer: 'Bansal Group of Institutes',
      image: bgiHackathonCertificate,
    },
    {
      name: 'BuildVerse Hackathon 2026 - 2nd Runner-Up',
      issuer: 'LNCT Group Hackathon Club',
      image: buildverseRunnerUpCertificate,
    },
    {
      name: 'NPTEL Data Structures and Algorithms - Silver Badge',
      issuer: 'NPTEL',
      image: nptelCertificate,
    },
    {
      name: 'BuildVerse SaaS & Enterprise Domain Winner',
      issuer: 'BuildVerse Hackathon 2026',
      image: buildverseSaasCertificate,
    },
    {
      name: 'GFG 160 Days Challenge Completion',
      issuer: 'GeeksforGeeks',
      image: gfgCertificate,
    },
    {
      name: 'SQL Basic',
      issuer: 'HackerRank',
      image: sqlCertificate,
    },
    // {
    //   name: 'Mastering JavaScript Fundamentals',
    //   issuer: 'Geekster',
    //   image: javascriptCertificate,
    // },
    // {
    //   name: 'Idea Hackathon Codictive 3.0',
    //   issuer: 'BIST, IEEE, Sheryians Coding School',
    //   image: ideaHackathonCertificate,
    // },
    // {
    //   name: 'Samsung Galaxy AI Treasure Hunt 2026',
    //   issuer: 'Unstop',
    //   image: samsungCertificate,
    // },
  ],
  viewAllUrl: '/Anchal_Shukla_Resume.pdf',
};

export const education = {
  degree: 'B.Tech - Computer Science Engineering',
  institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
  cgpa: '8.39/10',
  graduation: '2027',
  twelfth: '12th M.P. Board - 89.4%',
  tenth: '10th M.P. Board - 95%',
};

export const footerContent = {
  taglines: [
    'Full Stack Development',
    'React - React Native - Java - Spring Boot',
    'Production-ready Web & Mobile Applications',
  ],
  credential: 'B.Tech CSE - CGPA 8.39',
  copyright: `Copyright ${new Date().getFullYear()} Anchal Shukla | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
};



