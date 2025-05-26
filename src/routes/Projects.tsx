import React from "react";
import TitleSection from "../components/TitleSection";
import ProjectCard from "../components/ProjectCard";

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

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Red Hat Marketplace",
      description:
        "Red Hat Marketplace is a cloud-based platform built on Red Hat OpenShift that simplifies the discovery, procurement, deployment, and management of enterprise software applications in hybrid and multi-cloud environments. ",
      imageSrc: "/images/redhat-marketplace.png",
      date: "March 2023",
      status: "completed",
      technologies: ["TypeScript", "Next.js", "Node.js", "MySql", "AWS", "MobX", "Restful Api's", "GraphQL", "Data Analytics", "Data Warehousing", "CI/CD", "Travis CI", "CodeCeptJS", "HTML5", "CSS3", "Sass", "ETL"],
      githubUrl: "https://github.com/ibm",
      liveUrl: "https://swc.saas.ibm.com/en-us/campaign/introducing-red-hat-marketplace",
    },
    {
      title: "Portfolio",
      description: "My portfolio showcases my journey as a full-stack software engineer with a passion for building innovative, scalable solutions across diverse industries. It highlights my expertise in developing impactful web applications, leveraging modern technologies, and creating user-centric designs.",
      imageSrc: "/images/bay.avif",
      date: "June 2022",
      status: "completed",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "ESLint", "React Router", "clsx", "Lucide-React", "Vite Plugin SVGR"],
      githubUrl: "https://github.com/john-sprague/code-by-spraguejdev",
      liveUrl: "http://www.spraguejdev.com",
    },
    {
      title: "Lorem Ipsum",
      description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
      imageSrc: "/images/.avif",
      date: "September 2021",
      status: "completed",
      technologies: ["JavaScript", "SCSS", "Plugin"],
      githubUrl: "",
      liveUrl: "",
    },
  ];

  return (
    <div className="relative pb-16">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 min-h-screen">
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
      </div>
    </div>
  );
};

export default Projects;
