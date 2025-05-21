import { Link } from "react-router-dom";
import JavaScriptIcon from "../assets/icons/javascript.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import ReactIcon from "../assets/icons/react.svg";
import NodeJSIcon from "../assets/icons/nodejs.svg";
import SqlDeveloperIcon from "../assets/icons/sqldeveloper.svg";
import PythonIcon from "../assets/icons/python.svg";
import CssIcon from "../assets/icons/css.svg";
import HTML5Icon from "../assets/icons/html5.svg";

const Home = () => {
  const navigation = [
    { to: "skills", name: "Skills" },
    { to: "about-me", name: "About Me" },
    { to: "projects", name: "Projects" },
    { to: "contact", name: "Contact" },
  ];

  return (
    <div className="relative pb-16 min-h-screen">
      {/* Navigation */}
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <nav className="my-16 animate-bounce">
          <ul className="flex items-center justify-center gap-5">
            {navigation.map((item) => (
              <Link
                key={item.to}
                className="text-md text-zinc-500 hover:text-zinc-300 transition duration-500"
                to={item.to}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        {/* Section Title */}
        <div className="text-center">
          <h1 className=" pb-10 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-400 to-blue-600 animate-title sm:text-6xl md:text-9xl">
            John Sprague
          </h1>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        {/* Section Content */}
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-md text-zinc-500">
            As a Senior Software Engineer with a proven track record at IBM, I
            specialize in full-stack development, UX design, and optimizing
            system performance to deliver high-impact, scalable solutions.
            <br />
            <br />
            Recognized with an Outstanding Technical Achievement Award (OTAA)
            and promoted three times in just three years, I excel at
            transforming complex challenges into user-centric, business-driving
            applications.
          </h2>

          {/* Skill Icons */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <JavaScriptIcon />
            <TypeScriptIcon />
            <ReactIcon />
            <NodeJSIcon />
            <SqlDeveloperIcon />
            <PythonIcon />
            <CssIcon />
            <HTML5Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
