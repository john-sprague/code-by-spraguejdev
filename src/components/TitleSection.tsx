import React from "react";

interface TitleSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle, children }) => {
  return (
    
    <>
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-zinc-400 space-y-2">{subtitle}</p>
        <br />
        <br />
        <div className="text-lg text-zinc-400 space-y-2">{children}</div>
      </div>
    <div className="w-full h-px bg-zinc-800 my-6" />

    </>
  );
};

export default TitleSection;
