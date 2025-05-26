import { useNavigate } from "react-router-dom";
import JavaScriptIcon from "../assets/icons/javascript.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import ReactIcon from "../assets/icons/react.svg";
import NodeJSIcon from "../assets/icons/nodejs.svg";
import SqlDeveloperIcon from "../assets/icons/sqldeveloper.svg";
import PythonIcon from "../assets/icons/python.svg";
import CssIcon from "../assets/icons/css.svg";
import HTML5Icon from "../assets/icons/html5.svg";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate("/projects");
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="relative pb-16 min-h-screen">
      <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-400 to-blue-600 animate-title sm:text-6xl md:text-9xl">
            John Sprague
          </h1>
          <h2 className="text-2xl text-zinc-300 pt-8 animate-fade-in">Full-Stack Engineer and Builder of Useful Things</h2>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="mr-8 ml-8 p-8 rounded-2xl shadow-lg border border-zinc-300 animate-fade-in">
          <p className="text-lg text-zinc-300 leading-relaxed animate-fade-in" style={{ marginTop: "0px"}} >
            As a Senior Software Engineer with a proven track record at IBM, I specialize in full-stack development, UX design, and optimizing system performance to deliver high-impact, scalable solutions.
            <br />
            <br />
            Recognized with an Outstanding Technical Achievement Award (OTAA) and promoted three times in just three years, I excel at transforming complex challenges into user-centric, business-driving applications.
          </p>
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
        <div className="mr-8 ml-8 flex justify-center gap-6 animate-fade-in">
          <Button
            variant="default"
            className="px-8 py-3 text-lg font-semibold text-white"
            onClick={navigateToProjects} // Adding onClick event
          >
            View Projects
          </Button>
          <Button
            variant="secondary"
            className="px-8 py-3 text-lg font-semibold text-white"
            onClick={navigateToContact}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
