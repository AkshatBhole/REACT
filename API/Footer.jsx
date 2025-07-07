import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-400 flex flex-col md:flex-row py-6 px-10 items-center justify-between w-full shadow-inner relative z-10">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
        <span className="text-white text-lg font-bold">PicsumPro</span>
      </div>
      <div className="text-white text-center text-sm">
        &copy; {new Date().getFullYear()} PicsumPro. All rights reserved. |
        Built with <span className="text-pink-200">♥</span> by YourName
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-200 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-200 transition"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
