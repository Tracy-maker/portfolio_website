import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GrUserWorker } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
import { IoPeopleSharp } from "react-icons/io5";

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
    location: "Queensland Australia",
    description: "The University of Queensland",
    icon: React.createElement(LuGraduationCap),
    date: "2010 - 2013",
  },
  {
    title: "Internship",
    location: "Sydney Australia",
    description: "Internship --- Claim Central Consolidated",
    icon: React.createElement(GrUserWorker),
    date: "JUN 2013 - MAY 2014",
  },
  {
    title: "Junior Accountant",
    location: "Sydney Australia",
    description: "Junior Accountant --- M Equals",
    icon: React.createElement(CgWorkAlt),
    date: "NOV 2014 - MAY 2015",
  },
  {
    title: "Accounts Payable Analyst --- Claim Central Consolidated",
    location: "Houston, TX",
    description:
      "🌀 Provide training, guidance, and support to the Accounts Payable team
      🌀 Manage all aspects of the AP function across multiple group entities, ensure invoice processing, approval and payments are completed accurately and in timely manner
      🌀 Complete monthly reconciliations of supplier statements and liaise with internal stakeholders to investigate discrepancies.
      🌀 Manage accurate payment runs for all group entities.
      🌀 Liaise with all suppliers and internal stakeholders for all matters relating to accounts payable in a professional manner.
      🌀 Provide monthly reports and run certain procedures to close off tasks in internal operation system.",
    icon: React.createElement(CgWorkAlt),
    date: "JUN 2015 - DEC 2016",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const achievementsData = [
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
    Evaluated Head Office expenses, leading a cost-saving project for a 30% reduction in OPEX the next year.
    Increased accounting efficiency by transitioning multiple procedures to electronic forms.`,
    imageUrl:
      "https://images.pexels.com/photos/1485653/pexels-photo-1485653.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Financial Reporting and Compliance:",
    description: `
    Implemented AASB16 for new contracts and lease condition changes.
    Introduced a reconciliation worksheet, enabling swift completion of accrual figures in 30 minutes during month-end.   `,
    imageUrl:
      "https://images.pexels.com/photos/3943727/pexels-photo-3943727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Operational Excellence:",
    description: `
    Resolved operational issues caused by system glitches, improving accuracy by 90%.
    Reduced 30days+ aged debtors by 60% in two months through aged debtor analysis.  `,
    imageUrl:
      "https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Process Improvement and Stakeholder Relations:",
    description: `
    Restructured data templates for streamlined Accounts Receivable and Payable processes, enhancing efficiency and accuracy.`,
    imageUrl:
      "https://images.pexels.com/photos/4386341/pexels-photo-4386341.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
] as const;

export const skillsData = [
  "CPA",
  "Budgeting & Forecasting",
  "Financial Reporting",
  "Financial Statements",
  "Financial Variance Analysis",
  "P&L Analysis",
  "Internal Process Development",
  "Month-End Close Process",
  "Account Reconciliation",
  "Process Improvement",
] as const;
