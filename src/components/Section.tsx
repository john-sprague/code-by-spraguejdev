import React from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  isDarkMode?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, isDarkMode = false }) => {
  return (
    <>
    <div
      className={`relative py-12 w-full animate-fade-in max-w-3xl ${
        isDarkMode ? "text-zinc-100" : "bg-zinc-800 text-zinc-200 ml-auto"
      }`}
    >
      <div
        className={`px-6 mx-auto space-y-8 max-w-7xl ${
          isDarkMode ? "flex flex-col items-start" : "flex flex-col items-end"
        }`}
      >
        {/* Section Title */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg">{subtitle}</p>
        </div>

        {/* Section Content */}
        <div className="max-w-2xl mx-auto lg:mx-0 " >{children}</div>
      </div>
    </div>
    <div className="w-full h-px bg-zinc-600 my-6 animate-fade-in"/>

    </>
  );
};

export default Section;

