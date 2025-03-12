import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Blogs = () => {
  const projects = [
    {
      title: 'Attacks on TOR browser',
      description: 'An analysis on active and passive attacks on Tor Browser dark sites',
    //   tech: [''],    
      image: 'https://m.media-amazon.com/images/S/pv-target-images/a50ef624bd008d89ba9ab30d4a3712a5156c52761d4dd23e4f3b6facaf82d0f0.jpg',
      github: 'https://github.com/chetaniitbhilai',
      liveDemo: 'https://drive.google.com/file/d/1549PNUXf7ifMvmRG5MNuLgzYLqZtNvVA/view?usp=sharing/',
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))} */}
                </div>
                <div className="flex space-x-4">
                  {/* <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                    <Github className="h-6 w-6" />
                  </a> */}
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

export default Blogs;
