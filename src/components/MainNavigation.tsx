import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav className="my-16 animate-bounce">
        <ul className="flex items-center justify-center gap-5">
          <li>
            <Link
              to="/"
              className="text-md duration-500 text-zinc-200 hover:text-zinc-50"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="text-md duration-500 text-zinc-200 hover:text-zinc-50"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/about-me"
              className="text-md duration-500 text-zinc-200 hover:text-zinc-50"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-md duration-500 text-zinc-200 hover:text-zinc-50"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-md duration-500 text-zinc-200 hover:text-zinc-50"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
