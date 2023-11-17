import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import p1Img from "@/public/p1.png";
import p2Img from "@/public/p2.png";
import p3Img from "@/public/p3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Commerce",
    location: "The University of Queensland",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2010 - 2013",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Financial Strategy and Analysis:",
    description: `
      Developed and implemented streamlined working practices for new subsidiaries in the US and New Zealand.
      Created P&L models for US and New Zealand entities, facilitating strategic business analysis.
    `,
    imageUrl:
      "https://images.pexels.com/photos/7567567/pexels-photo-7567567.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Performance Optimization:",
    description: `
    Enhanced KPI reports, analyzing metrics like Incoming Claims, Conversion Rate, and Key Clients Revenue.
    Conducted a month-end gap analysis, reporting issues and recommending solutions, resulting in a 25% increase in gross margin the following quarter. `,
    imageUrl:
      "https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Cost Management and Efficiency:",
    description: `
      Developed and implemented streamlined working practices for new subsidiaries in the US and New Zealand.
      Created P&L models for US and New Zealand entities, facilitating strategic business analysis.
    `,
    imageUrl:
      "https://images.pexels.com/photos/7567567/pexels-photo-7567567.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Financial Strategy and Analysis:",
    description: `
      Developed and implemented streamlined working practices for new subsidiaries in the US and New Zealand.
      Created P&L models for US and New Zealand entities, facilitating strategic business analysis.
    `,
    imageUrl:
      "https://images.pexels.com/photos/7567567/pexels-photo-7567567.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Financial Strategy and Analysis:",
    description: `
      Developed and implemented streamlined working practices for new subsidiaries in the US and New Zealand.
      Created P&L models for US and New Zealand entities, facilitating strategic business analysis.
    `,
    imageUrl:
      "https://images.pexels.com/photos/7567567/pexels-photo-7567567.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "MUI-material",
  "Tailwind",
  "REST-API",
  "PostgreSQL",
  "Framer Motion",
] as const;
