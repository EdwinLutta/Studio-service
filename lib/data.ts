import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import Peer from "@/public/CRM.jpg";
import GroceryApp from "@/public/GroceryApp.jpg";
import LaundryServiceApp from "@/public/LaundryApp.jpg";
import MedicalApp from "@/public/medicalApp.jpg";
import reserveBarCode from "@/public/LaundryApp.jpg";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Experience",
    hash: "/Experience",
  },
  {
    name: "Training",
    hash: "/training-program",
  },
  {
    name: "Pricing",
    hash: "/pricing",
  },
  {
    name: "About",
    hash: "/aboutUs",
  },
  {
    name: "Contact",
    hash: "/contact",
  },
] as const;

export const servicesData = [
  {
    title: "Web Development",
    description:
      "We design and build modern, responsive, and high-performing websites tailored to businesses and individuals.",
  },
  {
    title: "Web Applications",
    description:
      "We develop powerful and scalable web applications with custom features, dashboards, user authentication, and integrations.",
  },
  {
    title: "Mobile Applications",
    description:
      "We create intuitive mobile experiences that help businesses connect with their customers across devices.",
  },
  {
    title: "Digital Solutions",
    description:
      "From custom software to business systems and digital products, we build solutions designed around your specific needs.",
  },
  {
    title: "Creative & Digital Content",
    description:
      "We help businesses strengthen their digital presence through creative content, branding, and digital experiences.",
  },
] as const;

export const trainingPrograms = [
  {
    title: "Technology & IT",
    description:
      "Practical technology programs designed to help learners develop relevant technical and digital skills.",
    icon: "Code2",
    programs: [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "Data Analysis",
      "Information Technology",
      "Cybersecurity Fundamentals",
    ],
  },
  {
    title: "Project Management",
    description:
      "Develop the skills required to plan, coordinate, execute, and manage projects effectively.",
    icon: "ClipboardCheck",
    programs: [
      "Project Management Fundamentals",
      "Project Planning",
      "Agile & Scrum",
      "Team Coordination",
      "Project Documentation",
      "Risk Management",
    ],
  },
  {
    title: "Data & Analytics",
    description:
      "Build practical skills for working with data, generating insights, and supporting better business decisions.",
    icon: "ChartNoAxesCombined",
    programs: [
      "Data Analysis",
      "Data Visualization",
      "Business Intelligence",
      "Data Reporting",
      "Excel for Data Analysis",
      "Analytics Fundamentals",
    ],
  },
  {
    title: "Business & Entrepreneurship",
    description:
      "Training designed to help learners understand business operations, entrepreneurship, and professional development.",
    icon: "BriefcaseBusiness",
    programs: [
      "Entrepreneurship",
      "Business Management",
      "Business Development",
      "Digital Business",
      "Marketing Fundamentals",
      "Business Strategy",
    ],
  },
  {
    title: "Administration & Professional Skills",
    description:
      "Practical programs focused on administrative, organizational, communication, and workplace skills.",
    icon: "UsersRound",
    programs: [
      "Office Administration",
      "Administrative Management",
      "Customer Service",
      "Professional Communication",
      "Records Management",
      "Office Productivity",
    ],
  },
  {
    title: "Digital & Creative Skills",
    description:
      "Creative and digital programs designed for people looking to develop valuable modern workplace skills.",
    icon: "Palette",
    programs: [
      "Graphic Design",
      "UI/UX Design",
      "Digital Content Creation",
      "Social Media Management",
      "Digital Marketing",
      "Branding Fundamentals",
    ],
  },
] as const;

export const pricingData = [
  {
    id: "starter",
    name: "Starter",
    description:
      "For individuals and businesses looking to establish a professional digital presence.",
    price: "$800",
    period: "Starting from",
    buttonText: "Get Started",
    buttonLink: "/contact",
    popular: false,
    features: [
      "Professional responsive website",
      "Modern and user-friendly design",
      "Up to 5 custom pages",
      "Mobile and tablet optimization",
      "Contact form integration",
      "Basic SEO setup",
      "Social media integration",
      "Post-launch support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "For growing businesses that need a more powerful website or custom digital solution.",
    price: "$1,500",
    period: "Starting from",
    buttonText: "Start Your Project",
    buttonLink: "/contact",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced custom website or web application",
      "Up to 10 custom pages",
      "Custom features and integrations",
      "User authentication",
      "Database integration",
      "Admin dashboard",
      "Enhanced SEO and performance optimization",
      "Extended post-launch support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "For businesses requiring advanced and scalable digital solutions.",
    price: "$2,500",
    period: "Starting from",
    buttonText: "Let's Talk",
    buttonLink: "/contact",
    popular: false,
    features: [
      "Everything in Pro",
      "Fully customized web application",
      "Advanced backend development",
      "Custom API integrations",
      "Mobile app development options",
      "Advanced dashboard",
      "Scalable architecture",
      "Priority support",
      "Dedicated project consultation",
    ],
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer - YeahsTech Agency",
    location: "Remote",
    description:
      "Developed and implemented numerous software solutions tailored to client needs. In collaboration with my team, developed an innovative offline app for a club. This initiative significantly drove productivity gains to 10X than before, A significant achievement was the design of robust management systems for several clients which foster development to about 55%.These systems increased productivity and introduced measures to prevent any potential malpractices or theft, thereby fortifying the interests of our clients’ companies. Maintained and updated existing applications, ensuring seamless integration.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Graphic Design - Obent media",
    location: "Abuja / remote",
    description:
      "I worked as a graphics desginer at a priniting press and later freelanced for a media company remotely.",
    icon: React.createElement(IoLogoDesignernews),
    date: "2020",
  },
  {
    title: "Meta Fullstack Mobile Certificate",
    location: "Online",
    description:
      "I have successfully completed the Meta Fullstack Mobile Development course and earned a certificate in recognition of my knowledge and skills in mobile development. This online program provided me with a solid foundation in the latest technologies and best practices for building high-quality mobile applications.",
    icon: React.createElement(TbCertificate),
    date: "2023",
  },
  {
    title: "Full-Stack Web & Mobile Developer",
    location: "Remote",
    description:
      "This role presented me with numerous challenges, but I was able to overcome them and successfully create a Reservation Web & Mobile app called Peer. Peer was complicated app to create as I had update the codebase with some new feaures and packages.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    id: "0",
    title: "Doctor Appointment Mobile App",
    description:
      "This is a complete mobile app for healthcare and online doctor consultation services. It is suitable for hospitals, clinics, medical centers, telemedicine platforms, healthcare startups, and personal doctor booking applications",
    info: "To launch the Mobile app below, you must first install Expo Go on an Android device so as to test the app live on your device. Then from the app scan the barcode and you have the access to the mobile app.",

    screenShots: [
      {
        image: require("/public/bookingApp.jpeg").default,
      },
      { image: require("/public/bookingApp.jpeg").default },
      { image: require("/public/bookingApp.jpeg").default },
      {
        image: require("/public/bookingApp.jpeg").default,
      },
      {
        image: require("/public/bookingApp.jpeg").default,
      },
      {
        image: require("/public/bookingApp.jpeg").default,
      },
      {
        image: require("/public/bookingApp.jpeg").default,
      },
      {
        image: require("/public/bookingApp.jpeg").default,
      },
      {
        image: require("/public/bookingApp.jpeg").default,
      },
    ],
    tags: [
      {
        image: require("/public/html.png").default,
      },
      { image: require("/public/Css.png").default },
      { image: require("/public/javascript.png").default },
      {
        image: require("/public/react.png").default,
      },
      {
        image: require("/public/firebase.png").default,
      },
      {
        image: require("/public/expo.png").default,
      },
    ],
    imageUrl: MedicalApp,
    barCode: reserveBarCode,
  },
  {
    id: "1",

    title: "Laundry Service App",
    description:
      "This is is made for services like regular wash, wash & iron, and dry cleaning. The app shows offers, discounts, and special bundles. Users can explore services, check details, and place orders.",
    sourceCode: "https://github.com/NueltCodes/VStrim",
    liveSite: "https://v-strim.vercel.app/",
    tags: [
      {
        image: require("/public/html.png").default,
      },
      { image: require("/public/Css.png").default },
      {
        image: require("/public/react.png").default,
      },
      {
        image: require("/public/typescript.png").default,
      },
      {
        image: require("/public/trpc.png").default,
      },
      {
        image: require("/public/nextjs.png").default,
      },
      {
        image: require("/public/tailwindcss.png").default,
      },
      {
        image: require("/public/mysql-logo.png").default,
      },
      {
        image: require("/public/prisma.png").default,
      },
    ],
    imageUrl: LaundryServiceApp,
  },
  {
    id: "2",

    title: "Peer",
    description:
      "Engineered a Web platform enabling users to effortlessly book accommodations worldwide. Introduced engaging animations to elevate user experience and the integration of dynamic filter functionalities. Implemented a dynamic system where Hosts gets to see the number of traffic their home are getting either from registered users or unregistered users. Peer makes it easy to plan your next getaway.",
    logins: "test@gmail.com",
    password: "12345678",
    sourceCode: "https://github.com/NueltCodes/peer",
    liveSite: "https://peer-startup.vercel.app/",
    tags: [
      {
        image: require("/public/html.png").default,
      },
      { image: require("/public/Css.png").default },
      {
        image: require("/public/javascript.png").default,
      },
      {
        image: require("/public/react.png").default,
      },
      {
        image: require("/public/typescript.png").default,
      },
      {
        image: require("/public/nextjs.png").default,
      },
      {
        image: require("/public/mongodb.png").default,
      },
      {
        image: require("/public/tailwindcss.png").default,
      },
      {
        image: require("/public/prisma.png").default,
      },
    ],
    imageUrl: Peer,
  },

  {
    id: "3",

    title: "Grocery Mobile App",
    description:
      "Grocery Shop is a mobile app designed for grocery delivery and food shopping apps. It includes clean and simple screens that help users browse products, add items to cart, track orders, and manage their profile easily. The design focuses on smooth navigation and a mobile-first experience.",
    sourceCode: "https://github.com/NueltCodes/market",
    liveSite: "https://markett.vercel.app/",
    tags: [
      {
        image: require("/public/html.png").default,
      },
      { image: require("/public/Css.png").default },
      {
        image: require("/public/javascript.png").default,
      },
      {
        image: require("/public/react.png").default,
      },
      {
        image: require("/public/mongodb.png").default,
      },
      {
        image: require("/public/redux.png").default,
      },
      {
        image: require("/public/express.png").default,
      },
      {
        image: require("/public/tailwindcss.png").default,
      },
      {
        image: require("/public/socket.io.png").default,
      },
      {
        image: require("/public/paypal.png").default,
      },
      {
        image: require("/public/sttripe.png").default,
      },
    ],
    imageUrl: GroceryApp,
  },
] as const;

export const skillsData = [
  { name: "Html", image: require("/public/html.png").default },
  { name: "Css", image: require("/public/Css.png").default },
  { name: "Javascript", image: require("/public/javascript.png").default },
  { name: "Trpc", image: require("/public/trpc.png").default },
  { name: "React", image: require("/public/react.png").default },
  { name: "React-native", image: require("/public/react.png").default },
  { name: "Expo", image: require("/public/expo.png").default },
  { name: "Redux", image: require("/public/redux.png").default },
  { name: "Typescript", image: require("/public/typescript.png").default },
  { name: "Next.js", image: require("/public/nextjs.png").default },
  { name: "Tailwindcss", image: require("/public/tailwindcss.png").default },
  { name: "Socket.io", image: require("/public/socket.io.png").default },
  { name: "Mysql", image: require("/public/mysql-logo.png").default },
  { name: "Prisma", image: require("/public/prisma.png").default },
  { name: "Nodejs", image: require("/public/nodejs.png").default },
  { name: "MongoDB", image: require("/public/mongodb.png").default },
  { name: "Firebase", image: require("/public/firebase.png").default },
  { name: "Express", image: require("/public/express.png").default },
  { name: "git", image: require("/public/git.png").default },
  // "HTML",
  // "CSS",
  // "JavaScript",
  // "React",
  // "TypeScript",
  // "Next.js",
  // "Prisma",
  // "React-native",
  // "Node.js",
  // "Git",
  // "Github",
  // "Tailwind css",
  // "React-icons",
  // "Mui",
  // "Next auth",
  // "NOSQL",
  // "MYSQL",
  // "Express",
  // "Redux",
  // "JWT",
  // "Firebase",
  // "Planet scale",
  // "Framer Motion",
] as const;

export const faqData = [
  {
    question: "What services does Kaconex offer?",
    answer:
      "Kaconex provides a range of digital solutions including website development, web applications, mobile app development, custom software, digital products, UI/UX design, and creative digital content.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Project costs depend on the scope, features, complexity, and requirements of each project. Our packages provide starting prices, but we can also create a custom quote based on your specific needs.",
  },
  {
    question: "How long does it take to build a website or application?",
    answer:
      "The timeline depends on the size and complexity of the project. A standard website may take a few weeks, while larger web applications and mobile apps can require several weeks or months.",
  },
  {
    question: "Can Kaconex build a completely custom application?",
    answer:
      "Yes. We build custom digital products and applications around your business requirements, including user authentication, databases, dashboards, payment systems, APIs, and other integrations.",
  },
  {
    question: "Does Kaconex develop mobile applications?",
    answer:
      "Yes. We develop modern mobile applications designed for different business and product needs, with a focus on performance, usability, and a smooth user experience.",
  },
  {
    question: "Can you redesign or improve an existing website?",
    answer:
      "Yes. We can redesign existing websites, improve their user experience, optimize performance, add new functionality, and modernize their technology where necessary.",
  },
  {
    question: "Do you provide support after a project is completed?",
    answer:
      "Yes. We provide post-launch support depending on the project and selected package. We can assist with maintenance, updates, improvements, and resolving technical issues.",
  },
  {
    question: "Can you integrate payment systems into my application?",
    answer:
      "Yes. We can integrate suitable payment providers and build secure payment flows for websites, web applications, and mobile applications.",
  },
  {
    question: "Do you work with businesses outside your country?",
    answer:
      "Yes. Kaconex can work with clients remotely, regardless of their location. Our digital services are designed to support businesses and entrepreneurs globally.",
  },
  {
    question: "How do I get started with Kaconex?",
    answer:
      "Simply contact our team and tell us about your idea, business, or project. We will discuss your requirements, recommend an appropriate solution, and provide the next steps.",
  },
] as const;
