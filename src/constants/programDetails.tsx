import React from "react";

import { MdOutlineWorkOutline } from "react-icons/md";
import { LuFileCode } from "react-icons/lu";
import { BiBookReader } from "react-icons/bi";

import { ProgramDetailType } from "@/types/ProgramDetailType";

export const programDetails: ProgramDetailType[] = [
  {
    heading: "Internship track",
    duration: "10-12 weeks",
    icon: BiBookReader,
    tracks: [
      {
        title: "Software engineer",
        description:
          "Javascript or MERN stack focused on full-stack engineering",
      },
      {
        title: "Product design",
        description: "UI/UX, design thinking and software design",
      },
      {
        title: "Project management",
        description:
          "Agile methodologies, Scrum, Kanban, project planning and execution, and team collaboration",
      },
      {
        title: "AWS/DevOps",
        description:
          "Cloud infrastructure, CI/CD pipelines, containerization (Docker, Kubernetes), monitoring and automation using AWS services",
      },
    ],
  },
  {
    heading: "Employment track",
    duration: "2-4 weeks",
    icon: MdOutlineWorkOutline,
    tracks: [
      {
        title: "Interview preparation",
        description:
          "Resume building, behavioral interviews, technical/mock interviews, and feedback for improvement",
      },
      {
        title: "Coding test",
        description:
          "Problem-solving techniques, algorithm optimization, and hands-on coding practice for technical assessments",
      },
      {
        title: "Client communication",
        description:
          "Professional email etiquette, active listening, negotiation and presentation skills for client interactions",
      },
      {
        title: "Startup primer",
        description:
          "Fundamentals of entrepreneurship, lean startup methodology, MVP development, and navigating startup ecosystems",
      },
    ],
  },
  {
    heading: "Tech-stack track",
    duration: "4-8 weeks",
    icon: LuFileCode,
    tracks: [
      {
        title: "Core Programming Languages",
        description: (
          <ul className="list-disc list-inside marker:text-xs">
            <li>JavaScript</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        ),
      },
      {
        title: "Emerging Technologies & Trends",
        description: (
          <ul className="list-disc list-inside marker:text-xs">
            <li>GenAI for Developers</li>
            <li>GenAI for Non-Developers</li>
            <li>Web3.0</li>
            <li>Machine Learning/AI</li>
          </ul>
        ),
      },
      {
        title: "App Development & Frameworks",
        description: (
          <ul className="list-disc list-inside marker:text-xs">
            <li>iOS Development</li>
            <li>Android Development</li>
            <li>MERN Stack</li>
            <li>Salesforce Development</li>
          </ul>
        ),
      },
      {
        title: "Enterprise & Quality Solutions",
        description: (
          <ul className="list-disc marker:text-xs pl-4">
            <li>SAP</li>
            <li>QA/Automation</li>
          </ul>
        ),
      },
    ],
  },
];
