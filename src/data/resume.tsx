import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Ollama } from "@/components/ui/svgs/ollama";
import { MongoDB } from "@/components/ui/svgs/mongodb";

export const DATA = {
  name: "GIRIDHAR",
  initials: "G",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer building scalable, secure, and intelligent digital solutions.",
  summary:
    "I build scalable software systems and AI-driven solutions that solve real business problems. At Pinnakl Technologies, I work across full-stack development, ERP systems, and LLM-powered tools, transforming complex requirements into efficient, production-ready applications. I focus on writing clean, maintainable code while designing systems that are reliable, secure, and built for long-term growth.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Docker", icon: Docker },
    { name: "C++", icon: Csharp },
    { name: "Ollama", icon: Ollama },
    { name: "MongoDB", icon: MongoDB },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "giridhar.pathyapu@gmail.com",
    tel: "+91 8106627080",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GIRIDHAR-PRO",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/giridhar-pro/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Pinnakl Technologies LLC",
      href: "https://www.pinnakltech.com/",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/pinnakl_logo.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Promoted from intern to full-time Software Developer, contributing to the development of scalable web applications and internal enterprise tools. Led ERP module enhancements and custom dashboard development, integrated LLM-based automation into business workflows, and collaborated with cross-functional teams to deliver secure, production-ready solutions.",
    },

  ],
  education: [
    {
      school: "CMR Engineering College",
      href: "https://cmrec.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/cmr_logo.png",
      start: "2021",
      end: "2025",
    },

  ],
  projects: [
    {
      title: "CRYPT",
      href: "https://zcrypt.netlify.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "CRYPT – Decentralized Payment Network:  Developed a Web3.0 decentralized application (DApp) for secure peer-to-peer money transactions on the Ethereum blockchain using Solidity smart contracts, enabling transactions without intermediaries.",
      technologies: [
        "Next.js",
        "Typescript",
        "Solidity",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://zcrypt.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/projects/CRYPT_DEMO.mp4",
    },
    {
      title: "Vdospec AI",
      href: "https://vdospec.com/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "VdoSpec AI – Technical Document Intelligence Platform:  AI tool that simplifies complex technical documents using advanced NLP.Helps engineering teams understand information faster and work more efficiently.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
        "Node.js",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://vdospec.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/Vdospec.mp4",
    },
    {
      title: "PoleStar",
      href: "https://pole-star-prototype.netlify.app/",
      dates: "September 2025 - present",
      active: true,
      description:
        "Polestar – Electrical Transmission Design Calculator:  Web application that automates overhead transmission line calculations, including sag, wind, ice loads, and NESC clearance checks.Simplifies complex engineering workflows into an easy, step-by-step design and reporting system.",
      technologies: [
        "React.js",
        "Node.js",
        "Typescript",
        "TailwindCSS",
        "Python",

      ],
      links: [
        {
          type: "Website",
          href: "https://pole-star-prototype.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/polestar.mp4",
    },
    {
      title: "Corporate Website",
      href: "https://pinnakltech.com/",
      dates: "February 2025 - present",
      active: true,
      description:
        "Pinnakl Technologies Company Website & Digital Presence: Developed a modern, responsive corporate website for Pinnakl Technologies LLC that presents engineering and metallurgical services with a clear, professional brand identity. The platform improves client engagement by showcasing expertise, solutions, and industry focus in a streamlined user experience.",
      technologies: [
        "React.js",
        "Node.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://pinnakltech.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/projects/Pinnakl.mp4",
    },
  ],
  hackathons: [
    {
      title: "Isro Bharatiya Antariksh Hackathon",
      dates: "August 2024",
      location: "Hyderabad, Telangana",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "/isro.png",
      links: [] as { href: string; title: string; icon?: React.ReactNode }[],
    },
    {
      title: "Smart India Hackathon",
      dates: "November 23rd - 25th, 2024",
      location: "Hyderabad, Telangana",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/sih.jpg",
      mlh: "",
      links: [] as { href: string; title: string; icon?: React.ReactNode }[],
    },
    {
      title: "HackAPTS- State level coding hackathon",
      dates: "January 2025",
      location: "Hyderabad, Telangana",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "/HackAPTS.png",
      links: [] as { href: string; title: string; icon?: React.ReactNode }[],
    },
    {
      title: "OpenAI GenAI Buildathon",
      dates: "October 14th - 16th, 2025",
      location: "Hyderabad, Telangana",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "/nxtwave.png",
      mlh: "",
      links: [] as { href: string; title: string; icon?: React.ReactNode }[],
    },
  ],
} as const;
