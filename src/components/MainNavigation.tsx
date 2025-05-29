import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavItems } from "../lib/constants";

const MainNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 ">
      <nav className="hidden md:flex justify-center py-6">
        <ul className="flex items-center space-x-8">
          {NavItems.map((item) => (
            <li key={item.pagePath}>
              <Link
                to={item.pagePath}
                className="text-lg text-zinc-200 hover:text-zinc-50 transition"
              >
                {item.pageName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden flex justify-end px-6 py-4">
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="text-zinc-200 hover:text-zinc-50"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-12 h-12" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {NavItems.map((item) => (
              <li key={item.pagePath}>
                <Link
                  to={item.pagePath}
                  className="text-lg text-zinc-200 hover:text-zinc-50 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.pageName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MainNavigation;
