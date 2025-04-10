import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from './ui/magic-card';

const ProjectCard = ({ name, description, technologies, link }) => {
  return (
    <Card className="border-none shadow-none p-0 bg-[rgba(38,38,38,0.9)]">
      <MagicCard
        gradientColor="#262626"
        gradientSize={300}
        gradientOpacity={0.8}
        gradientFrom="#06b6d4"
        gradientTo="#d946ef"
        className="p-0 w-full h-full"
      >
        <a href={link || "#"} target="_blank" rel="noreferrer" className="block">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold">{name}</CardTitle>
            <CardDescription className="text-sm text-gray-400">{description}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-gray-800 text-gray-300 px-2 py-1 border border-gray-700 hover:bg-gray-800"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </a>
      </MagicCard>
    </Card>
  );
};

const projects = [
    {
      name: "Online learning resource recommendation system",
      description: "A learning resource recommendation system using various ML algorithms for computer science students.",
      technologies: ["ReactJS", "Python", "FastAPI", "SciKit-learn", "MongoDB"],
      link: "https://github.com/dp3903/SDP-Project",
    },
    {
      name: "Anonymous Chatroom",
      description: "A real-time chat application ensuring user anonymity.",
      technologies: ["ReactJS", "Node.js", "Socket.IO", "Express", "MongoDB"],
      link: "https://github.com/dp3903/Anonymous-Chatroom",
    },
    {
      name: "ANN in C++",
      description: "A small and simple library to make and use multilayer feed forward neural networks.",
      technologies: ["C++"],
      link: "https://github.com/dp3903/Simple_ANN_library_cpp",
    },
    {
      name: "UI Stack Exchange",
      description: "A platform to share reusable UI components for modern web apps.",
      technologies: ["HTML", "CSS", "JavaScript","Python","Django"],
      link: "https://github.com/dp3903/Python-Project",
    },
    {
      name: "News Application",
      description: "First flutter project to demonstrate the basic functions of flutter.",
      technologies: ["Flutter", "Dart", "FireBase"],
      link: "https://github.com/dp3903/NewsApplication",
    },
    {
      name: "QR-code based Automatic RSVP system",
      description: "A project for DUHacks-3.0 that uses QR-code based auto-registration system for events.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/NaitikPatel-325/Attendify",
    },
];

function Projects() {
  return (
    <div className="p-4 px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  )
}

export default Projects