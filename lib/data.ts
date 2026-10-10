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
  // {
  //   name: "About",
  //   hash: "#about",
  // },
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

export const privacyPolicySections = [
  {
    title: "1. Introduction",
    paragraphs: [
      `Kaconex ("Kaconex", "we", "us", or "our") is a technology and digital solutions company providing web development, web applications, mobile applications, custom software, digital products, and professional training programs.`,

      `This Privacy Policy explains how we collect, use, protect, and handle personal information when you visit our website, contact us, request our services, or interact with our training programs.`,
    ],
  },

  {
    title: "2. Information We Collect",
    paragraphs: [
      "We may collect information that you voluntarily provide when you interact with Kaconex, including:",
    ],
    list: [
      "Your name and contact information.",
      "Your email address and telephone number.",
      "Information about your business or project.",
      "Information submitted through enquiry or contact forms.",
      "Information provided when requesting our services.",
      "Information provided when enquiring about training programs.",
      "Other information you voluntarily provide when communicating with our team.",
    ],
    afterList: [
      "We may also automatically receive limited technical information about how visitors use our website, such as browser type, device information, IP address, and general website activity, where applicable.",
    ],
  },

  {
    title: "3. How We Use Your Information",
    paragraphs: ["Information we collect may be used to:"],
    list: [
      "Respond to enquiries and requests.",
      "Discuss and manage potential projects.",
      "Provide our technology and digital services.",
      "Communicate with clients and prospective clients.",
      "Respond to training enquiries and applications.",
      "Improve our website and services.",
      "Maintain website security and functionality.",
      "Comply with applicable legal obligations.",
    ],
  },

  {
    title: "4. Project and Client Information",
    paragraphs: [
      "When you engage Kaconex for a project, you may provide information relating to your business, organization, product, website, application, or other digital requirements.",

      "We use this information only as reasonably necessary to understand your requirements, provide our services, communicate with you, and fulfill our contractual or professional obligations.",
    ],
  },

  {
    title: "5. Training Program Information",
    paragraphs: [
      "If you enquire about or participate in a Kaconex training program, we may collect information necessary to process your enquiry, communicate with you, determine program suitability, and administer the training process.",

      "Where additional information is required for a specific training program, we will explain what information is needed and why it is being requested.",
    ],
  },

  {
    title: "6. Cookies and Website Technologies",
    paragraphs: [
      "Our website may use cookies and similar technologies to support essential website functionality, security, performance, and analytics.",

      "Cookies may allow us to understand how visitors interact with our website and help us improve the experience we provide.",

      "You can control or disable cookies through your browser settings. However, disabling certain cookies may affect some website functionality.",
    ],
  },

  {
    title: "7. Sharing of Information",
    paragraphs: [
      "Kaconex does not sell your personal information.",

      "We may share information with trusted third-party service providers when reasonably necessary to operate our website, communicate with you, provide our services, process requests, or maintain our technology infrastructure.",

      "We may also disclose information where required by law, regulation, legal proceedings, or a valid request from a competent authority.",
    ],
  },

  {
    title: "8. Third-Party Services",
    paragraphs: [
      "Our website or services may use or link to third-party platforms, services, payment providers, communication tools, hosting providers, analytics services, or other technologies.",

      "Third-party services operate under their own privacy policies and terms. Kaconex is not responsible for the privacy practices of third-party websites or services that we do not control.",
    ],
  },

  {
    title: "9. Data Security",
    paragraphs: [
      "We take reasonable technical and organizational measures to protect personal information from unauthorized access, misuse, loss, alteration, or disclosure.",

      "However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.",
    ],
  },

  {
    title: "10. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing services, maintaining business records, resolving disputes, enforcing agreements, and meeting legal obligations.",
    ],
  },

  {
    title: "11. International Data Transfers",
    paragraphs: [
      "Kaconex may work with clients, partners, and technology providers located in different countries. As a result, information may sometimes be processed or stored outside the country where you are located.",

      "Where applicable, we take reasonable steps to ensure that personal information is handled in accordance with relevant data protection requirements.",
    ],
  },

  {
    title: "12. Your Privacy Rights",
    paragraphs: [
      "Depending on your location and applicable law, you may have rights relating to your personal information, including the right to:",
    ],
    list: [
      "Request access to personal information we hold about you.",
      "Request correction of inaccurate information.",
      "Request deletion of your information where legally applicable.",
      "Object to or restrict certain processing.",
      "Withdraw consent where processing is based on consent.",
    ],
    afterList: [
      "These rights may be subject to applicable legal requirements and limitations.",
    ],
  },

  {
    title: "13. Children's Privacy",
    paragraphs: [
      "Kaconex does not knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law.",

      "Where a training program involves younger participants, additional information or consent may be required from a parent, guardian, or other authorized person where applicable.",
    ],
  },

  {
    title: "14. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes to our services, website, technology, or applicable legal requirements.",

      `Any updated version will be published on this page with a revised "Last Updated" date.`,
    ],
  },

  {
    title: "15. Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how Kaconex handles personal information, please contact us.",
    ],
    contact: {
      company: "Kaconex",
      location: "United States",
      email: "careers@kaconex.com",
    },
  },
];

export const termsSections = [
  {
    title: "1. Introduction",
    paragraphs: [
      `These Terms and Conditions ("Terms") govern your use of the Kaconex website and your relationship with Kaconex in connection with our technology, digital solutions, and training services.`,

      `By accessing or using our website, you agree to comply with these Terms. If you do not agree with these Terms, please do not use our website or services.`,
    ],
  },

  {
    title: "2. About Kaconex",
    paragraphs: [
      "Kaconex is a technology and digital solutions company providing services including website development, web applications, mobile applications, custom software, digital products, UI/UX and digital design, and professional training programs.",
    ],
  },

  {
    title: "3. Use of Our Website",
    paragraphs: [
      "You agree to use the Kaconex website only for lawful purposes and in a manner that does not interfere with the operation, security, or availability of the website.",
      "You must not use our website to:",
    ],
    list: [
      "Engage in fraudulent, unlawful, or harmful activities.",
      "Attempt to gain unauthorized access to our systems or services.",
      "Introduce malicious software, code, or other harmful material.",
      "Copy, reproduce, or distribute website content without permission.",
      "Interfere with the security, performance, or operation of our website.",
      "Use our services or website in a way that violates applicable laws or regulations.",
    ],
  },

  {
    title: "4. Our Services",
    paragraphs: [
      "Kaconex provides customized technology and digital solutions based on the requirements of each client.",
      "Services may include website development, web applications, mobile applications, custom software, UI/UX design, digital products, integrations, maintenance, and other technology-related services.",
      "The exact scope of a project, deliverables, timeline, pricing, payment terms, and client responsibilities may be agreed separately between Kaconex and the client.",
    ],
  },

  {
    title: "5. Project Requirements and Client Responsibilities",
    paragraphs: [
      "Clients are responsible for providing accurate information, content, materials, approvals, access credentials, and other resources reasonably required for a project.",
      "Clients are also responsible for reviewing deliverables and providing timely feedback, approvals, and decisions.",
      "Delays in providing required information, materials, approvals, or feedback may affect the project timeline.",
    ],
  },

  {
    title: "6. Pricing and Payments",
    paragraphs: [
      "Prices displayed on the Kaconex website may represent starting prices or general estimates and may not represent the final cost of a project.",
      "Final pricing depends on factors such as project scope, functionality, complexity, integrations, design requirements, development requirements, and other agreed services.",
      "Payment schedules, deposits, milestones, and other payment requirements will be communicated and agreed with the client before or during the project.",
    ],
  },

  {
    title: "7. Changes to Projects",
    paragraphs: [
      "Changes to the agreed project scope may affect the project cost and delivery timeline.",
      "Additional features, functionality, revisions, integrations, or other requirements requested after the original scope has been agreed may require additional fees and a revised timeline.",
    ],
  },

  {
    title: "8. Intellectual Property",
    paragraphs: [
      "Unless otherwise agreed in writing, Kaconex retains ownership of its pre-existing tools, frameworks, libraries, reusable components, development processes, methodologies, templates, and other materials used to provide its services.",
      "Ownership or licensing of project-specific deliverables will depend on the agreement between Kaconex and the client.",
      "Clients are responsible for ensuring that they have the necessary rights or permissions for any content, images, trademarks, data, software, or other materials they provide to Kaconex.",
    ],
  },

  {
    title: "9. Portfolio and Project Showcase",
    paragraphs: [
      "Where permitted by the applicable client agreement, Kaconex may showcase completed projects, screenshots, descriptions, or other non-confidential project information for portfolio, marketing, or promotional purposes.",
      "Kaconex will respect confidentiality obligations and specific restrictions agreed with a client.",
    ],
  },

  {
    title: "10. Training Programs",
    paragraphs: [
      "Kaconex may offer professional and skills-based training programs in areas such as technology, project management, data and analytics, business, administration, and digital and creative skills.",
      "Training availability, schedules, fees, duration, delivery format, entry requirements, and other program conditions may vary by program.",
      "Participation in a Kaconex training program does not guarantee employment, immigration approval, visa approval, admission to another country, certification, or any specific career outcome unless expressly agreed in writing.",
    ],
  },

  {
    title: "11. Third-Party Services",
    paragraphs: [
      "Kaconex may use or integrate third-party services, platforms, software, hosting providers, payment providers, communication tools, analytics services, and other technologies.",
      "Third-party services operate independently and may be subject to their own terms, conditions, and privacy policies.",
      "Kaconex is not responsible for the availability, functionality, policies, or actions of third-party services that we do not control.",
    ],
  },

  {
    title: "12. Website Content",
    paragraphs: [
      "We make reasonable efforts to keep the information on our website accurate and up to date. However, website content may change from time to time without notice.",
      "Information provided on the website is intended for general informational purposes and should not be treated as a guarantee of a particular result, service availability, project outcome, employment opportunity, or business result.",
    ],
  },

  {
    title: "13. Disclaimer",
    paragraphs: [
      "To the extent permitted by applicable law, the Kaconex website and its content are provided on an available basis without guarantees that the website will always be uninterrupted, error-free, completely secure, or free from harmful components.",
      "Specific services and project deliverables are governed by the terms agreed between Kaconex and the relevant client.",
    ],
  },

  {
    title: "14. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, Kaconex will not be responsible for indirect, incidental, consequential, or other losses arising from the use of our website or services, except where such liability cannot legally be excluded.",
      "Nothing in these Terms is intended to exclude or limit liability where such exclusion or limitation is prohibited by applicable law.",
    ],
  },

  {
    title: "15. Termination",
    paragraphs: [
      "Kaconex may restrict or terminate access to the website or discontinue services where reasonably necessary, including in cases involving unlawful activity, misuse of our services, security concerns, or violation of these Terms.",
      "Termination does not affect rights or obligations that arose before termination.",
    ],
  },

  {
    title: "16. Changes to These Terms",
    paragraphs: [
      "Kaconex may update these Terms from time to time to reflect changes to our website, services, business practices, or applicable legal requirements.",
      "Updated Terms will be published on this page. Your continued use of the website after changes are published constitutes acceptance of the updated Terms to the extent permitted by applicable law.",
    ],
  },

  {
    title: "17. Governing Law",
    paragraphs: [
      "These Terms are subject to the laws applicable to Kaconex and its operations, subject to any mandatory legal requirements that may apply.",
      "Where a separate written agreement exists between Kaconex and a client, the governing law and dispute-resolution provisions contained in that agreement will apply to the extent provided by that agreement.",
    ],
  },

  {
    title: "18. Contact Us",
    paragraphs: [
      "If you have questions about these Terms and Conditions, please contact Kaconex.",
    ],
    contact: {
      company: "Kaconex",
      location: "United States",
      email: "careers@kaconex.com",
    },
  },
];

export const pricingData = [
  {
    id: "starter",
    name: "Starter",
    description:
      "For individuals and businesses looking to establish a professional digital presence.",
    price: "$2,800",
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
    price: "$4,500",
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
    price: "$6,000",
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
