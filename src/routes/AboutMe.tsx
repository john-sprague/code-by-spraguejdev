import Section from "../components/Section";
import TitleSection from "../components/TitleSection";

const AboutMe: React.FC = () => {
  return (
    <div className="relative pb-16">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <TitleSection
          title="About Me"
          subtitle="Developer. Builder. Systems Thinker"
          children={undefined}
        />
        {/* Section 1 - About Me Intro */}
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

        {/* Section 2 - Career Journey */}
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

        {/* Section 3 - Skills & Systems Developed */}
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

        {/* Section 4 - Why It Matters in Tech */}
        <Section
          title="Why It Matters in Tech"
          subtitle="The skills I developed in farming and operations directly translate to software engineering."
          verticalLineText="Transferable Skills"
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
              {" "}
              Developed a strong sense of grit, humility, and determination,
              driven by the belief that the most valuable projects are those
              that require persistence and resilience.
            </li>
            <li>
              Embracing challenges head-on and continuously learning from
              failures has been crucial in creating solutions that stand the
              test of time.
            </li>
          </ul>
        </Section>

        {/* Section 5 - Now Back in Tech */}
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

        {/* Section 6 - What I'm Focused On */}
        <Section
          title="What I’m Focused On"
          subtitle="Currently, I’m tackling challenges that push the limits of full stack engineering and product scalability."
          verticalLineText="Mission Focused"
          isDarkMode={false}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-zinc-400">
            <li>Backend & Distributed Systems</li>
            <li>Purpose-driven Product Engineering</li>
            <li>Developer Experience & Team Collaboration</li>
            <li>Scalability, performance, and sustainability</li>
          </ul>
        </Section>

        {/* Section 7 - When I’m Not Coding */}
        <Section
          title="When I’m Not Coding..."
          subtitle="I stay active, train for endurance events, and love spending time with my German Shepherd, Stormy."
          verticalLineText="Community"
          isDarkMode={true}
        >
          <p className="mb-6 text-lg text-zinc-400">
            I’m training for endurance events, walking my German Shepherd{" "}
            <span className="font-semibold">Stormy</span> 🐾, or sharing
            reflections and lessons in my storytelling series:{" "}
            <a href="#" className="text-green-700 underline font-semibold">
              Roots & Reboots
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
};

export default AboutMe;
