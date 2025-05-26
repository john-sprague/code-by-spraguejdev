// src/pages/Home.tsx
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
import Avatar from "../components/Avatar.tsx";
import profilePic from "../../public/images/my_avatar_image.jpg";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative pb-16 min-h-screen">
      <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-4">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left-landing bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="text-center space-y-0">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-500 to-blue-600 animate-title-landing sm:text-6xl md:text-9xl md:min-h-36">
            John Sprague
          </h1>
          <h2 className="text-2xl text-zinc-300 mt-4 animate-title-landing">
            Full-Stack Engineer and Builder of Useful Things
          </h2>

          <div className="flex justify-center pt-8 animate-title-landing">
            <Avatar
              src={profilePic}
              alt="John Sprague"
              size={160}
              scaleOnHover={true}
              className="shadow-lg"
            />
          </div>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right-landing bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="mx-8 p-8 rounded-2xl shadow-lg border border-zinc-300 animate-fade-in-landing">
          <p className="text-lg text-zinc-300 leading-relaxed">
            {"     "}Hey, I’m John — full-stack engineer, systems thinker, and lifelong
            builder-in-progress. I design clean code, scalable systems, and
            tools that actually help people — with a mindset rooted in clarity,
            growth, and continuous learning.
            <br />
            <br />
            My journey started in college, building websites for local
            businesses while studying Information Systems — where I fell in love
            with creative problem solving and purposeful tech. Now, as a Senior
            Software Engineer with a proven track record at IBM, I focus on{" "}
            <strong>
              full-stack development, UX design, and system performance.
            </strong>
            <br />
            <br />
            Rebooted with purpose, I bring a sharpened perspective, a bias for
            momentum, and a deep respect for systems that serve real people.
            <br/><br/>
            
            </p>
            <p className="flex items-center justify-center text-2xl"><strong>Let’s build what’s next.</strong></p>

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

        <div className="mx-8 flex justify-center gap-6 animate-fade-in-landing pt-10">
          <Button
            variant="default"
            className="px-8 py-3 text-lg font-semibold text-white"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </Button>
          <Button
            variant="secondary"
            className="px-8 py-3 text-lg font-semibold text-white"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
