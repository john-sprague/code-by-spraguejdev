import { useNavigate } from "react-router-dom";
import TitleSection from "../components/TitleSection";
import IconWithLabel from "../components/IconWithLabel";
import ReactIcon from "../assets/icons/react.svg";
import GraphQlIcon from "../assets/icons/graphql.svg";
import PythonIcon from "../assets/icons/python.svg";
import MySqlIcon from "../assets/icons/sqldeveloper.svg";
import ReduxIcon from "../assets/icons/redux.svg";
import AwsIcon from "../assets/icons/aws.svg";
import FigmaIcon from "../assets/icons/figma.svg";
import GitIcon from "../assets/icons/git.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";
import JavascriptIcon from "../assets/icons/javascript.svg";
import CssIcon from "../assets/icons/css.svg";
import HtmlIcon from "../assets/icons/html5.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import NodeJsIcon from "../assets/icons/nodejs.svg";
import MongoDbIcon from "../assets/icons/mongo.svg";
import ExpressJsIcon from "../assets/icons/express.svg";
import Button from "../components/Button";
import { NavItems } from "../lib/constants";

interface IconItem {
  iconName: string;
  icon: React.ReactNode;
}

const iconsList: IconItem[] = [
  { iconName: "HTML5", icon: <HtmlIcon /> },
  { iconName: "CSS3", icon: <CssIcon /> },
  { iconName: "JavaScript", icon: <JavascriptIcon /> },
  { iconName: "React.js", icon: <ReactIcon /> },
  { iconName: "GraphQL", icon: <GraphQlIcon /> },
  { iconName: "Redux", icon: <ReduxIcon /> },
  { iconName: "TypeScript", icon: <TypeScriptIcon /> },
  { iconName: "Node.js", icon: <NodeJsIcon /> },
  { iconName: "ExpressJS", icon: <ExpressJsIcon /> },
  { iconName: "TailwindCSS", icon: <TailwindIcon /> },
  { iconName: "AWS", icon: <AwsIcon /> },
  { iconName: "MySQL", icon: <MySqlIcon /> },
  { iconName: "MongoDB", icon: <MongoDbIcon /> },
  { iconName: "Python", icon: <PythonIcon /> },
  { iconName: "Git", icon: <GitIcon /> },
  { iconName: "Figma", icon: <FigmaIcon /> },
];

const Skills: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative pb-16">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16">
        <TitleSection
          title="Skills"
          subtitle="Tools, technologies, and frameworks I use to build scalable, reliable systems"
          children={undefined}
        />
        <section className="min-h-screen w-full bg-zinc-900 text-zinc-100 flex items-center py-12 md:px-8 xl:px-20 animate-fade-in">
          <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
            <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
              <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
                <div className="absolute -left-4 top-16 sm:left-16 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
                  <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
                  <p>All Skills</p>
                </div>

                <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold ">
                  Explore My Expertise & Tech Stack
                </h2>
              </div>

              <p className="p-3 space-y-2 text-zinc-400 text-lg leading-relaxed">
                These are the tools and technologies that I use daily to develop
                web applications. With a strong foundation in the JavaScript.js
                ecosystem, scalable and distributed systems, and I focus on
                delivering clean, scalable, maintainable code and intuitive user
                experiences.
              </p>

              {/* <div className="py-4 px-2 space-x-2 rounded-lg bg-secondary shadow-lg">
                <button className="rounded-lg px-4 py-2 bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600">
                  Skills
                </button>
                <button className="rounded-lg px-4 py-2 bg-transparent text-zinc-400 transition-all duration-300 hover:text-white">
                  Tools
                </button>
              </div> */}
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {iconsList.map((item) => (
                  <IconWithLabel key={item.iconName} name={item.iconName}>
                    {item.icon}
                  </IconWithLabel>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-8 flex justify-center gap-6 animate-fade-in pt-10 pb-10">
          <Button
            variant="default"
            className="px-8 py-3 text-lg font-semibold text-zinc-50 min-w-40"
            onClick={() => navigate(NavItems[3].pagePath)}
          >
            View {NavItems[3].pageName}
          </Button>
          <Button
            variant="secondary"
            className="px-8 py-3 text-lg font-semibold text-zinc-50 min-w-40"
            onClick={() => navigate(NavItems[2].pagePath)}
          >
            View {NavItems[2].pageName}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
