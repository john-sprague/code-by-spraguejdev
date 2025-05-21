import React from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  isDarkMode?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  isDarkMode = false,
}) => {
  return (
    <>
      <section>
        <div
          className={`relative py-12 w-full animate-fade-in max-w-3xl text-zinc-100 ${
            isDarkMode ? "" : "bg-zinc-800/75  ml-auto"
          }`}
        >
          <div
            className={`px-6 mx-auto space-y-8 max-w-7xl ${
              isDarkMode
                ? "flex flex-col items-start"
                : "flex flex-col items-end"
            }`}
          >
            {/* Section Title */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl xl:text-5xl l:text-5xl med:text-4xl font-bold tracking-tight sm:text-4xl text-zinc-100">
                {title}
              </h2>
              <p className="mt-4 text-lg">{subtitle}</p>
            </div>

            {/* Section Content */}
            <div className="max-w-2xl mx-auto lg:mx-0 ">{children}</div>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-600 my-6 animate-fade-in" />
      </section>
    </>
  );
};

export default Section;
