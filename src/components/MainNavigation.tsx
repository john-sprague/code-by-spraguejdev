import { Link } from "react-router-dom";
import { NavItems } from "../lib/constants";

const MainNavigation = () => {
  return (
    <header>
      <nav className="my-16 animate-bounce">
        <ul className="flex items-center justify-center gap-5">
          {NavItems.map((navItem) => (
            <li>
              <Link
                to={navItem.pagePath}
                className="text-md duration-500 text-zinc-200 hover:text-zinc-50 text-lg"
              >
                {navItem.pageName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
