import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-400 flex py-7 px-12 items-center justify-between shadow-lg sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <img src="/vite.svg" alt="Logo" className="h-10 w-10" />
        <span className="text-white text-3xl font-extrabold tracking-wide drop-shadow">
          PicsumPro
        </span>
      </div>
      <div className="flex gap-12 items-center">
        <button className="text-xl text-white font-semibold hover:text-blue-100 transition">
          Home
        </button>
        <button className="text-xl text-white font-semibold hover:text-blue-100 transition">
          About
        </button>
        <button className="text-xl text-white font-semibold hover:text-blue-100 transition">
          Contact
        </button>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-white font-semibold hover:text-blue-100 transition underline underline-offset-4"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
