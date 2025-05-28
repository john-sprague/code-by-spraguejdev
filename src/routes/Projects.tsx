import React from "react";
import { useNavigate } from "react-router-dom";
import TitleSection from "../components/TitleSection";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { NavItems } from "../lib/constants";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  date: string;
  status: "completed" | "in-progress" | "planned";
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio",
    description: "My portfolio showcases my journey as a full-stack software engineer with a passion for building innovative, scalable solutions across diverse industries. It highlights my expertise in developing impactful web applications, leveraging modern technologies, and creating user-centric designs.",
    imageSrc: "/images/portfolio-project-image.png",
    date: "June 2025",
    status: "completed",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "ESLint", "React Router", "clsx", "Lucide-React", "Vite Plugin SVGR"],
    githubUrl: "https://github.com/john-sprague/code-by-spraguejdev",
    liveUrl: "http://www.spraguejdev.com",
  },
  {
    title: "Red Hat Marketplace",
    description:
      "Red Hat Marketplace is a cloud-based platform built on Red Hat OpenShift that simplifies the discovery, procurement, deployment, and management of enterprise software applications in hybrid and multi-cloud environments. ",
    imageSrc: "/images/redhat-marketplace.png",
    date: "January 2021 - May 2023",
    status: "completed",
    technologies: ["TypeScript", "Next.js", "Node.js", "MySql", "AWS", "MobX", "Restful Api's", "GraphQL", "Data Analytics", "Data Warehousing", "CI/CD", "Travis CI", "CodeCeptJS", "HTML5", "CSS3", "Sass", "ETL"],
    githubUrl: "https://github.com/ibm",
    liveUrl: "https://swc.saas.ibm.com/en-us/campaign/introducing-red-hat-marketplace",
  },
  {
    title: "Zillow Microservice Clone",
    description: "This is a complex, yet beautiful front-end responsive microservice that dynamically renders a module on a single page application. This is built with the latest Javascript frameworks including React.js & ES6, Webpack, Babel, Express, Node.js, and mongodb. Some of the key deliverables were to perform a technical spike about my use case (read operations), create React components, build the microservice with react.js, implement custom styling, ensure that the page is dynamic (there are 10,000 products in the database), and deploy to AWS Elastic Bean Stalk.",
    imageSrc: "/images/zillow-clone.png",
    date: "September 2019",
    status: "completed",
    technologies: ["JavaScript", "SCSS", "React.js", "ES6", "Webpack", "Babel", "Express", "Node.js", "Mongodb", "HTML", "CSS3", "Express.js"],
    githubUrl: "https://github.com/john-sprague/xillow-talk-microservice",
    liveUrl: "https://www.youtube.com/watch?v=_5EwIK_G5KY",
  },
  {
    title: "Zillow Proxy Server",
    description: "Ties together the microservices from the team onto one page via a proxy server. It handles display of any home comparisons for a single property to the Zillow clone",
    imageSrc: "/images/zillow-clone-2.png",
    date: "September 2019",
    status: "completed",
    technologies: ["React", "React DOM", "Babel", "Webpack", "Express.js", "MongoDB/Mongoose", "Node.js", "Jest", "Styled-Components", "Axios", "ShellJS"],
    githubUrl: "https://github.com/john-sprague/xillow-talk-proxy",
    liveUrl: "",
  },
  {
    title: "Cloud Vibes Microservice Back End",
    description: "The key deliverables were to scale the micro-services back end to handle production level traffic, which means thousands of users navigating to the site per second.",
    imageSrc: "/images/cloud-vibes-backend.png",
    date: "August 2019",
    status: "completed",
    technologies: ["React", "React DOM", "Express", "AWS SDK", "Axios", "Body-Parser", "Compression", "CORS", "MySQL", "Lodash", "Moment", "FontAwesome", "Babel", "Webpack", "Jest", "Enzyme", "React Testing Library", "ESLint"],
    githubUrl: "https://github.com/john-sprague/cloud-vibes-microservice-api-backend",
    liveUrl: "",
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative pb-16">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 min-h-screen">
        <TitleSection
          title="Projects"
          subtitle="Some of the projects are from work and some are on my own time."
          children={""}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center md:justify-start animate-fade-in">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.imageSrc}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              date={project.date}
              status={project.status}
            />
          ))}
        </div>
        <div className="mx-8 flex justify-center gap-6 animate-fade-in pt-10 pb-10">
          <Button
            variant="default"
            className="px-8 py-3 text-lg font-semibold text-zinc-50 min-w-40"
            onClick={() => navigate(NavItems[1].pagePath)}
          >
            View {NavItems[1].pageName}
          </Button>
          <Button
            variant="secondary"
            className="px-8 py-3 text-lg font-semibold text-zinc-50 min-w-40"
            onClick={() => navigate(NavItems[4].pagePath)}
          >
            {NavItems[4].pageName}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
