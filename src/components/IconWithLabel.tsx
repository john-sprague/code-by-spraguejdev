import React, { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
  name: string; 
}

const IconWithLabel: React.FC<IconProps> = ({ children, name }) => {
  return (
    <div className="text-center">
      <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
        <span className="text-4xl">
          {children}
        </span>
        <p className="text-xs mt-2">{name}</p>
      </div>
    </div>
  );
};

export default IconWithLabel;
