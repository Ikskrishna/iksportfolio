import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen text-[#FFE1A8] p-8">
      <h1 className="text-4xl font-bold mb-8 text-center ">
        My Projects
      </h1>

      {/* Project Card */}
      <div className="max-w-2xl mx-auto bg-[#FFE1A8] shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🛍️ eCommerce Website
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          This is a modern eCommerce website built with React, Tailwind CSS, and Firebase.
          It features user authentication, product listings, shopping cart functionality,
          and a responsive UI. Ideal for small businesses looking to sell online.
        </p>

        {/* Links */}
        <div className="space-y-2">
          <a
            href="https://ecommercebyiks.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 hover:underline"
          >
            🔗 Live Website (Netlify)
          </a>

          <a
            href="https://github.com/ikskrishna/ecommerceWebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 hover:underline"
          >
            💻 View Code on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
