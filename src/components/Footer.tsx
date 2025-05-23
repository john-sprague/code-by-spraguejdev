import React from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-100 py-12 animate-fade-in relative">
      <ScrollToTopButton />

      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold text-center sm:text-left">
            <Link to="/" className="hover:text-purple-600">
              John Sprague
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 justify-center sm:justify-start">
            <Link
              to="/skills"
              className="text-lg text-zinc-200 hover:text-zinc-50 transition duration-300"
            >
              Skills
            </Link>
            <Link
              to="/about-me"
              className="text-lg text-zinc-200 hover:text-zinc-50 transition duration-300"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="text-lg text-zinc-200 hover:text-zinc-50 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-lg text-zinc-200 hover:text-zinc-50 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-300/50 pt-6 text-center">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://linkedin.com/in/spraguejdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-50"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/spraguejdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-50"
            >
              GitHub #1 (Older)
            </a>
            <a
              href="https://github.com/john-sprague"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-50"
            >
              GitHub #2 (Newer)
            </a>
            <a
              href="https://twitter.com/johnsprague"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-50"
            >
              Twitter
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} John Sprague. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
