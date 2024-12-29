import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">Chetan</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          Computer Science Student | Aspiring Software Developer
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Currently in my 3rd year of Computer Science, passionate about building innovative solutions and learning new technologies.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/chetaniitbhilai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
            <Github className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/chetan-arora-119098267/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="mailto:chetanar1707@gmail.com" className="text-gray-600 hover:text-indigo-600">
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;