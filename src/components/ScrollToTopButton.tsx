import React from "react";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="mt-2 absolute top-0 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 hover:scale-110 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
      aria-label="Scroll to top"
      style={{ transformOrigin: 'center center' }} // Ensures the button scales from its center
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7-7-7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
