import React from "react";
import Footer from "./Footer"; // Import the Footer component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main> {/* Main content area */}
      <Footer />
    </div>
  );
};

export default Layout;
