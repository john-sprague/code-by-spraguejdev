import React from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";
import { NavItems } from "../lib/constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-100 py-12 animate-fade-in relative">
      <ScrollToTopButton />

      <div className="px-6 mx-auto max-w-7xl mt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="text-2xl font-bold text-center sm:text-left">
            <Link to="/" className="hover:text-orange-600">
              John Sprague
            </Link>
          </div>

          <ul className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0 sm:justify-start">
            {NavItems.map((navItem) => (
              <li key={navItem.pagePath}>
                <Link
                  to={navItem.pagePath}
                  className="text-lg text-zinc-200 hover:text-zinc-50 hover:scale-110 transition duration-100"
                >
                  {navItem.pageName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-zinc-300/50 pt-6 text-center">
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 mb-4">
            <a
              href="https://linkedin.com/in/spraguejdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-zinc-50"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/spraguejdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-zinc-50"
            >
              GitHub #1 (Older)
            </a>
            <a
              href="https://github.com/john-sprague"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-zinc-50"
            >
              GitHub #2 (Newer)
            </a>
            <a
              href="https://twitter.com/johnsprague"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-zinc-50"
            >
              Twitter
            </a>
          </div>

          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} John Sprague. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
