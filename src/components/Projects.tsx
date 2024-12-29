import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Chat Application',
      description: 'A full-stack web application for chatting with your friends.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://www.shutterstock.com/image-vector/dashboard-design-chat-social-media-600nw-1982343539.jpg',
      github: 'https://github.com/chetaniitbhilai/Chat_app',
      liveDemo: 'https://chat-app-jdgk.onrender.com/',
    },
    {
      title: 'Metro Line Prediction System',
      description: 'A ML model that predicts the possible places where metro stations can be established based on the population density of the area.',
      tech: ['Python', 'PyTorch', 'Flask', 'APIs'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Delhi_metro_rail_network.svg',
      github: 'https://github.com/chetaniitbhilai/ML_Project',
      liveDemo: '', // No live demo available
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                    <Github className="h-6 w-6" />
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
