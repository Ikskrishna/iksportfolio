import React from 'react';
import Back from '../components/Back'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <>
      <Back />
    <section
      id="contact"
      className="min-h-screen bg-[#1a1a1a] py-16 px-4 sm:px-8 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#FFE1A8] mb-10">Contact Me</h2>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 text-lg sm:text-xl font-medium">
          <div className="bg-[#FFE1A8] text-black p-4 rounded-lg shadow-md">
            📞 Phone: 7976694298
          </div>
          <div className="bg-[#FFE1A8] text-black p-4 rounded-lg shadow-md">
            📧 Email: flashm683@gmail.com
          </div>
          <div className="bg-[#FFE1A8] text-black p-4 rounded-lg shadow-md">
            📍 Address: College Road, Beawar Raj.
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-10">
          <a
            href="https://github.com/ikskrishna/ecommerceWebsite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-[#FFE1A8] text-4xl hover:text-white transition-colors duration-300"
            />
          </a>
          <a
            href="https://linkedin.com/in/krishna-sharma-4b7384359"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[#FFE1A8] text-4xl hover:text-white transition-colors duration-300"
            />
          </a>
          <a
            href="https://instagram.com/_iks_sharma__"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[#FFE1A8] text-4xl hover:text-white transition-colors duration-300"
            />
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
