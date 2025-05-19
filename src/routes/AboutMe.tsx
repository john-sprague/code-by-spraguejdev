import { Link } from "react-router-dom";

const AboutMe: React.FC = () => {
  return (
    <div className="relative pb-16">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            👋 About Me
          </h2>
          <h3 className="text-xl text-green-700 font-semibold mb-6">
            Developer. Farmer. Systems Thinker.
          </h3>
          <p className='text-lg text-zinc-400'>
            <em>I first got into engineering because I believed technology could make life <span className='font-semibold'>better</span>, simpler, healthier, more connected. That belief hasn’t changed. It’s only deepened.</em>
          </p>
        </div>

          <div className="w-full h-px bg-zinc-800" />
          <p className="mb-6 text-lg text-zinc-400">
            Hey — I’m <span className="font-semibold">John Sprague</span>, a
            full-stack software engineer with a passion for building systems that
            serve real people. My path’s been unconventional: I left tech two in 2023 to build and run a
            regenerative farm and sourdough bakery from the ground up, and that journey reshaped how I
            think about growth, structure, and what matters.
          </p>

          <div className="w-full h-px bg-zinc-800 my-6" />

          <h3 className="text-2xl font-semibold mt-10 mb-4 text-zinc-100">
            ⚙️ From Cloud Architecture to Crop Rotation
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-zinc-400">
            <li>Ranked #1 for target keywords by leveraging backlinks, blog content, and SEO optimization techniques, driving organic traffic, and increasing visibility</li>
            <li>
                Created <span className='font-semibold'>data-driven dashboards</span> to analyze farm metrics, optimize product offerings, and boost revenue.
            </li>
            <li>Led the <span className='font-semibold'>South Carolina Ag+Art Tour,</span> attracting over 400+ visitors and increasing brand reach by 300%</li>
            <li>Learned the power of lean systems and resilient leadership</li>
            <li>
              Served <span className="font-semibold">250+ families weekly</span>
            </li>
          </ul>

          <div className="w-full h-px bg-zinc-800 my-6" />


            <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-zinc-100">Skills & Systems Developed</h3>
            <ul className="list-disc pl-5 text-lg text-zinc-400 space-y-2">
                <li><strong>Operations Systems Design:</strong> Applied agile and lean principles to physical workflow optimization, from crop rotation to post-harvest handling.</li>
                <li><strong>Process Engineering:</strong> Built repeatable systems for farming, baking, and fulfillment under resource constraints.</li>
                <li><strong>Data-Driven Decision Making:</strong> Optimized recipes, planting schedules, and inventory based on seasonality, performance metrics, and customer demand.</li>
                <li><strong>Customer Experience & Brand Building:</strong> Developed a brand rooted in trust, transparency, and quality — from field to table.</li>
                <li><strong>Leadership & Execution:</strong> Led all business functions, managed seasonal labor, and operated with zero external funding while maintaining a 97% fulfillment rate.</li>
            </ul>
            </div>

            <div className="w-full h-px bg-zinc-800 my-6" />

            <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-zinc-100">Why It Matters in Tech</h3>
            <ul className="list-disc pl-5 text-lg text-zinc-400 space-y-2">
                <li>Designed systems that balance precision and adaptability.</li>
                <li>Communicated complex ideas with empathy and clarity.</li>
                <li>Executed under pressure — solo and with a team.</li>
                <li>Built trust through consistency, transparency, and value.</li>
                <li>Customer focus rooted in empathy and service</li>
                <li>Grit, humility, and the drive to build things that last</li>
            </ul>
            </div>
            
        <div className="w-full h-px bg-zinc-800 my-6" />

          <h3 className="text-2xl font-semibold mt-10 mb-4 text-zinc-100">
            💻 Now I’m Back in Tech — with Better Frameworks (and calloused hands)
          </h3>
          <p className="mb-6 text-lg text-zinc-400">
            I bring a unique edge to software:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-zinc-400">
            <li>
              <span className="font-semibold">Systems Thinking</span> honed in nature and engineering
            </li>
            <li>
              <span className="font-semibold">Real-world grit</span> from solving problems that couldn’t be debugged
            </li>
            <li>
              <span className="font-semibold">Empathy</span> for users, teammates, and customers alike
            </li>
          </ul>
          <blockquote className="mt-6 p-4 border-l-4 border-green-500 italic bg-green-50 text-green-900">
            “I don’t just write code. I build systems that grow, serve, and endure.”
          </blockquote>

          <div className="w-full h-px bg-zinc-800 my-6" />

          <h3 className="text-2xl font-semibold mt-10 mb-4 text-zinc-100">
            🔍 What I’m Focused On
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-zinc-400">
            <li>Backend & Distributed Systems</li>
            <li>Purpose-driven Product Engineering</li>
            <li>Developer Experience & Team Collaboration</li>
            <li>Scalability, performance, and sustainability</li>
          </ul>

          <div className="w-full h-px bg-zinc-800 my-6" />

          <h3 className="text-2xl font-semibold mt-10 mb-4 text-zinc-100">
            ⚡ When I’m Not Coding...
          </h3>
          <p className="mb-6 text-lg text-zinc-400">
            I’m training for endurance events, walking my German Shepherd{" "}
            <span className="font-semibold">Stormy</span> 🐾, or sharing reflections and lessons in my storytelling series:{" "}
            <a href="#" className="text-green-700 underline font-semibold">
              Roots & Reboots
            </a>.
          </p>

          <div className="w-full h-px bg-zinc-800 my-6" />

          <h3 className="text-2xl font-semibold mt-10 mb-4 text-zinc-100">
            🚀 Let’s Build Something That Matters
          </h3>
          <p className="text-lg text-zinc-400">
            If you're looking for a developer who brings structure, heart, and a systems-first mindset — I'm your guy.
          </p>

        <div className="w-full h-px bg-zinc-800 my-16" />

        <div className="text-center">
            <p className="text-lg text-zinc-400 mb-6">
            Now I’m bringing those lessons — and that mindset — back into software engineering with even stronger vision, discipline, and purpose.
            </p>
            <Link
                to="/contact"
                className="px-4 py-1 text-sm font-semibold text-purple-600 bg-transparent border border-purple-200 rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 mr-6"
            >
                Let’s Connect
            </Link>
            <Link
            to="/projects"
            className="px-4 py-1 text-sm font-semibold text-purple-600 bg-transparent border border-purple-200 rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
                Back to Projects
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
