import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import Button from "../components/Button";
import { NavItems } from "../lib/constants";
const MyJourney: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative pb-16">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 ">
        <TitleSection
          title="About Me"
          subtitle="Developer. Builder. Systems Thinker"
          children={undefined}
        />
        <Section
          title="When I’m Not Coding..."
          subtitle="I stay active outdoors, active in the community, train for endurance events, and love spending time with my German Shepherd, Stormy."
          verticalLineText="Community"
          isDarkMode={false}
        >
          <p className="mb-6 text-lg text-zinc-400">
            I'm building a community of like minded individuals who take responsibility seriously. I gravitate toward people who are actively growing and 
            not chasing shortcuts. They read, train, reflect, build. Whether it's in their career, relationships, self-growth, they're playing the long game. 
            <br/><br/>
            I value consistency, shared effort, and mutual growth. 
            <br/><br/>
            Personally, you can find me training for endurance events, walking my German Shepherd{" "}
            <span className="font-semibold">Stormy</span> 🐾, or sharing
            reflections and lessons in my storytelling series:{" "}
            <a href="#" className="text-green-700 underline font-semibold">
              Roots & Reboots
            </a>
            .
          </p>
        </Section>

        <Section
          title="The Journey, Not The Destination"
          subtitle="Now building with clarity, purpose, and calloused hands"
          verticalLineText="The Journey"
          isDarkMode={true}
        >
          <p className="text-lg text-zinc-400 space-y-2">
            Hey — I’m <span className="font-semibold">John Sprague</span>, a
            full-stack software engineer with a passion for building systems
            that serve real people. My path’s been unconventional: I left tech
            two in 2023 to build and run a regenerative farm and sourdough
            bakery from the ground up, and that journey reshaped how I think
            about growth, structure, and what matters.
          </p>
        </Section>

        <Section
          title="From Cloud Architecture to Crop Rotation"
          subtitle="My career journey has brought me from engineering scalable systems to optimizing agricultural workflows."
          verticalLineText="Tech Transition"
          isDarkMode={false}
        >
          <ul className="list-disc pl-5 space-y-2 text-lg text-zinc-400">
            <li>
              Ranked #1 for target keywords by leveraging backlinks, blog
              content, and SEO optimization techniques.
            </li>
            <li>
              Created{" "}
              <span className="font-semibold">data-driven dashboards</span> to
              analyze farm metrics, optimize product offerings, and boost
              revenue.
            </li>
            <li>
              Led the{" "}
              <span className="font-semibold">South Carolina Ag+Art Tour,</span>{" "}
              attracting over 400+ visitors and increasing brand reach by 300%.
            </li>
            <li>Learned the power of lean systems and resilient leadership.</li>
            <li>
              Served <span className="font-semibold">250+ families weekly</span>
              .
            </li>
          </ul>
        </Section>

        <Section
          title="Skills & Systems Developed"
          subtitle="I’ve built repeatable systems that blend engineering with resourceful problem solving."
          verticalLineText="New Skills"
          isDarkMode={true}
        >
          <ul className="list-disc pl-5 text-lg text-zinc-400 space-y-2">
            <li>
              <strong>Operations Systems Design:</strong> Applied agile and lean
              principles to physical workflow optimization, from crop rotation
              to post-harvest handling.
            </li>
            <li>
              <strong>Process Engineering:</strong> Built repeatable systems for
              farming, baking, and fulfillment under resource constraints.
            </li>
            <li>
              <strong>Data-Driven Decision Making:</strong> Optimized recipes,
              planting schedules, and inventory based on seasonality,
              performance metrics, and customer demand.
            </li>
            <li>
              <strong>Customer Experience & Brand Building:</strong> Developed a
              brand rooted in trust, transparency, and quality — from field to
              table.
            </li>
            <li>
              <strong>Leadership & Execution:</strong> Led all business
              functions, managed seasonal labor, and operated with zero external
              funding while maintaining a 97% fulfillment rate.
            </li>
          </ul>
        </Section>

        <Section
          title="Why It Matters in Tech"
          subtitle="The skills I developed in farming and operations directly translate to software engineering."
          verticalLineText="Transferable"
          isDarkMode={false}
        >
          <ul className="list-disc pl-5 space-y-2 text-lg text-zinc-400 ">
            <li>
              Embracing challenges head-on and continuously learning from
              failures has been crucial in creating solutions that stand the
              test of time.
            </li>
            <li>Designed systems that balance precision and adaptability.</li>
            <li>
              <span className="font-semibold" />
              Executed under pressure — solo and with a team.
            </li>
            <li>Built trust through consistency, transparency, and value.</li>
            <li>Customer focus rooted in empathy and service.</li>
            <li>
              Developed a strong sense of grit, humility, and determination,
              driven by the belief that the most valuable projects are those
              that require persistence and resilience.
            </li>
          </ul>
        </Section>

        <Section
          title="Now I’m Back in Tech — with Better Frameworks (and dirty boots)"
          subtitle="I bring a unique edge to software development with systems thinking, real-world grit, and empathy."
          verticalLineText="The Comeback"
          isDarkMode={true}
        >
          <ul className="list-disc list-inside space-y-2 text-lg text-zinc-400">
            <li>
              <span className="font-semibold">Systems Thinking</span> honed in
              nature and engineering.
            </li>
            <li>
              <span className="font-semibold">Real-world grit</span> from
              solving problems that couldn’t be debugged.
            </li>
            <li>
              <span className="font-semibold">Empathy</span> for users,
              teammates, and customers alike.
            </li>
          </ul>
          <blockquote className="mt-6 p-4 border-l-4 border-green-500 italic bg-green-50 text-green-900">
            “I don’t just write code. I build systems that grow, serve, and
            endure.”
          </blockquote>
        </Section>

        <Section
          title="What I’m Focused On"
          subtitle="Currently, I’m tackling challenges that push the limits of full stack engineering and product scalability."
          verticalLineText="Mission Focused"
          isDarkMode={false}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-zinc-400">
            <li>Javascript, Typescript, Node.js</li>
            <li>Backend & Distributed Systems</li>
            <li>Purpose-driven Product Engineering</li>
            <li>Developer Experience & Team Collaboration</li>
            <li>Scalability, performance, and sustainability</li>
          </ul>
        </Section>

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
            onClick={() => navigate(NavItems[4].pagePath)}
          >
            {NavItems[4].pageName}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
