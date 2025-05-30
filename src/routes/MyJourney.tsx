import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import Button from "../components/Button";
import { NavItems } from "../lib/constants";
import StormyImage from "../../public/images/stormy.jpg";
import ComputerDeskImage from "../../public/images/computer-desk-coding.jpg";
import SystemsImage from "../../public/images/interconnected.jpg";
import FarmerJohnCarrotImage from "../../public/images/farmer-john-carrot.jpg";
import GloriousGreensLogo from "../../public/images/glorious-greens-logo.png";
import TheSpragueFamilyImage from "../../public/images/the-sprague-family.jpeg";
import FarmerJohnImage from "../../public/images/farmer-john.jpg";
import AgArtTourImage from "../../public/images/ag+art-tour.jpg"; 

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
          title="My Journey"
          subtitle="I design clean code, scalable systems,
            and tools that actually help people"
          verticalLineText="Passionate"
          isSingleColumn={true}
          isDarkMode={true}
          imageSrc={TheSpragueFamilyImage}
          imageAlt='The Sprague Family Chapin Magazine'
        >
          <p className="mb-6 text-lg text-zinc-200 pt-16">
            A <strong>full-stack engineer, systems thinker</strong>, and
            lifelong builder-in-progress. I design clean code, scalable systems,
            and tools that actually help people, guided by a mindset rooted in
            clarity, growth, and continuous learning.
          </p>

          <p className="mb-6 text-lg text-zinc-200">
            My journey started in college, building websites for local
            businesses while studying Information Systems. That’s where I fell
            in love with creative problem solving and saw firsthand how
            technology can genuinely improve people’s lives. That belief—that
            tech can scale the impact of helping others—has guided me ever
            since.
          </p>

          <p className="mb-6 text-lg text-zinc-200">
            Before diving into entrepreneurship, I spent 5+ years at{" "}
            <strong>IBM</strong> as a Front-End, Full-Stack, and Cloud Engineer,
            where I led impactful projects like:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-lg text-zinc-200">
            <li>
              Designing and launching{" "}
              <strong>IBM’s first usage-based metering platform</strong>,
              streamlining hybrid cloud billing and onboarding 60+ enterprise
              products, earning an
              <em>Outstanding Technical Achievement Award</em>.
            </li>
            <li>
              Managing a <strong>UX component library</strong> used by 40+
              engineers daily, saving an estimated
              <strong>40+ dev hours weekly</strong>.
            </li>
            <li>
              Leading a{" "}
              <strong>globally distributed team of 6 engineers</strong>,
              bridging user experience and business value, roadmapping features,
              and ensuring delivery at scale.
            </li>
          </ul>
        </Section>

        <Section
          title="Rebooted"
          subtitle="To build something that makes people’s lives better"
          verticalLineText="Builder"
          isDarkMode={true}
          imageSrc={GloriousGreensLogo}
          imageAlt='Glorious Greens farm logo'
        >
          <p className="mb-6 text-lg text-zinc-200 pt-10">
            Most recently, I took an 18-month leap into sustainable agriculture,
            launching a community-focused venture that connected people directly
            to the source of their food and highlighted the value of local,
            sustainable farming. It sharpened my leadership, mission, and
            deepened my appreciation for solving problems when the unexpected happen.
          </p>

          <p className="mb-6 text-lg text-zinc-200">
            Now rebooted with purpose, I’m looking to grow in environments where
            I can:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-lg text-zinc-200">
            <li>
              <strong>Scale meaningful technology</strong>
            </li>
            <li>
              Work across{" "}
              <strong>distributed systems and cloud infrastructure</strong>
            </li>
            <li>
              Create <strong>delightful user experiences</strong> that make life
              better for real people
            </li>
          </ul>

          <p className="mb-6 text-lg text-zinc-200">
            Let’s build something that matters.
          </p>
        </Section>

        <Section
          title="From Cloud Development to Crop Rotation"
          subtitle="My career journey has brought me from engineering scalable systems to optimizing agricultural workflows."
          verticalLineText="Tech Transition"
          isDarkMode={false}
          imageSrc={FarmerJohnCarrotImage}
          imageAlt='Farmer John biting a fresh carrot in the high tunnel'
        >
          <ul className="list-disc pl-5 space-y-2 text-lg text-zinc-200">
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
          imageSrc={AgArtTourImage}
          imageAlt={"Farmer John teaching guests about farming systems"}
        >
          <ul className="list-disc pl-5 text-lg text-zinc-200 space-y-2">
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
          imageSrc={FarmerJohnImage}
          imageAlt="Farming John standing on the farm field next to high tunnel"
        >
          <ul className="list-disc pl-5 space-y-2 text-lg text-zinc-200 ">
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
          imageSrc={SystemsImage}
          imageAlt={'technology connected image'}
        >
          <ul className="list-disc list-inside space-y-2 text-lg text-zinc-200">
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
          imageSrc={ComputerDeskImage}
          imageAlt="Computer desk mac book with vs code on screen"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-zinc-200">
            <li>Javascript, Typescript, Node.js</li>
            <li>Backend & Distributed Systems</li>
            <li>Purpose-driven Product Engineering</li>
            <li>Developer Experience & Team Collaboration</li>
            <li>Scalability, performance, and sustainability</li>
          </ul>
        </Section>

        <Section
          title="When I’m Not Coding..."
          subtitle="I stay active outdoors, active in the community, train for endurance events, and love spending time with my German Shepherd, Stormy."
          verticalLineText="Community"
          isDarkMode={true}
          imageSrc={StormyImage}
          imageAlt="John's German Shepard Dog named Stormy in a farm field"
        >
          <p className="mb-6 text-lg text-zinc-200">
            I'm building a community of like minded individuals who take
            responsibility seriously. I gravitate toward people who are actively
            growing and not chasing shortcuts. They read, train, reflect, build.
            Whether it's in their career, relationships, self-growth, they're
            playing the long game.
            <br />
            <br />
            I value consistency, shared effort, and mutual growth.
            <br />
            <br />
            Personally, you can find me training for endurance events, walking
            my German Shepherd <span className="font-semibold">Stormy</span> 🐾,
            or sharing reflections and lessons in my storytelling series:{" "}
            <a href="#" className="text-green-700 underline font-semibold">
              Roots & Reboots
            </a>
            .
          </p>
          {/* <Avatar
              src={StormyImage}
              alt="John Sprague"
              size={400}
              scaleOnHover={true}
              className="shadow-lg"
            /> */}
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
