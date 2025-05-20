import React from "react";

interface TitleSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle, children }) => {
  return (
    
    <>
      <div className="max-w-2xl mx-auto lg:mx-0 ">
      <div className="hidden w-1/2 h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <br/>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl animate-title">
          {title}
        </h2> 
        <p className="text-lg text-zinc-400 space-y-2  animate-title ">{subtitle}</p>
        <br/>
        <div className="hidden w-6/12 h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <br />
        <br />
        <div className="text-lg text-zinc-400 space-y-2">{children}</div>
      </div>
      <div className="w-full h-px bg-zinc-300/50 my-6 animate-fade-in"/>
    </>
  );
};

export default TitleSection;
