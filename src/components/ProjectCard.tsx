import React from "react";
import { Badge } from "./Badge"; // Ensure you have the Badge component available in the project
import Button from "./Button"; // Ensure you have the Button component available in the project
import { ExternalLink, Github, Calendar } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  status?: "completed" | "in-progress" | "planned";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  date,
  status = "completed",
}) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 left-3">
          <Badge variant="success" size="lg" className="mr-2">
            {status.replace("-", " ")}
          </Badge>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="flex gap-2">
            {githubUrl && (
              <Button
                variant="link"
                size="icon"
                onClick={() => window.open(githubUrl, "_blank")}
                className="bg-white/80 hover:bg-white transition-all duration-200"
              >
                <Github className="h-6 w-6" />
              </Button>
            )}
            {liveUrl && (
              <Button
                size="icon"
                variant="link"
                className="bg-white/80 hover:bg-white transition-all duration-200"
                onClick={() => window.open(liveUrl, "_blank")}
              >
                <ExternalLink className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">{date}</span>
        </div>

        <p className="text-gray-600 mb-4 min-h-24 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 12).map((tech, index) => (
            <Badge key={index} variant="secondary" size="sm" className="mr-2">
              {tech}
            </Badge>
          ))}
          {technologies.length > 12 && (
            <Badge variant="secondary" size="sm" className="mr-2">
              +{technologies.length - 12}
            </Badge>
          )}
        </div>

        <Button variant="gradient">View Project</Button>
      </div>
    </div>
  );
};

export default ProjectCard;
