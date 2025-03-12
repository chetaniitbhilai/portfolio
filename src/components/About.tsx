import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-w-3 aspect-h-4">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Workspace"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a third-year Computer Science student with a passion for software development and machine learning. My journey in tech started with simple coding projects and has evolved into building full-stack applications using web development and machine learning.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Currently focusing on web development and artificial intelligence, I'm always eager to learn new technologies and contribute to meaningful projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-medium text-gray-900 w-32">Education:</span>
                <span className="text-gray-600">B.Tech in Computer Science from IIT Bhilai</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-900 w-32">Location:</span>
                <span className="text-gray-600">India</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-900 w-32">Interests:</span>
                <span className="text-gray-600">Web Dev, AI/ML, Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;