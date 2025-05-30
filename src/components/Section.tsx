import React from "react";
//TODO: Is the component doing too much? 
interface SectionProps {
  title: string;
  subtitle: string;
  verticalLineText: string;
  children?: React.ReactNode;
  isDarkMode?: boolean;
  isSingleColumn?: boolean;
  alignTitle?: "left" | "right";
  imageSrc?: string;
  imageAlt?: string;
}

const Section: React.FC<SectionProps> = ({
  verticalLineText,
  title,
  subtitle,
  children,
  isDarkMode = false,
  isSingleColumn = false,
  alignTitle = "left",
  imageSrc,
  imageAlt = "Section Image",
}) => {
  return (
    <>
      <section
        className={`${
          isDarkMode ? "" : "bg-zinc-900"
        } min-h-[60vh] w-full text-zinc-100 flex items-center py-12 md:px-8 xl:px-20 animate-fade-in`}
      >
        <div
          className={`container w-full gap-16 ${
            isSingleColumn
              ? "flex flex-col items-center"
              : `flex flex-col md:flex-row ${
                  isDarkMode
                    ? "items-stretch"
                    : "md:flex-row-reverse items-stretch"
                }`
          }`}
        >

          <div
            className={`relative p-6 sm:px-28 md:p-0 w-full ${
              isSingleColumn ? "" : "md:w-1/2"
            } flex flex-col justify-center`}
          >

            <div
              className={`absolute ${isDarkMode ? `-left-4` : `-left-8`} sm:left-16 sm:top-24 md:-left-12 xl:-left-16 top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2`}
            >
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
              <p>{verticalLineText}</p>
            </div>


            <div
              className={`text-zinc-100 p-6 pr-5 pl-12 lg:pr-20 ${
                alignTitle === "right" ? "text-right" : "text-left"
              }`}
            >
              <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold">
                {title}
              </h2>
              <p className="mt-4 text-lg">{subtitle}</p>
            </div>


            {children}
          </div>


          {imageSrc && (
            <div
              className={`w-full ${
                isSingleColumn ? "" : "md:w-1/2"
              } flex justify-center items-center`}
            >
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="max-w-full max-h-[400px] object-cover rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-125"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="w-full h-px bg-zinc-600 my-6 animate-fade-in" />
    </>
  );
};

export default Section;
