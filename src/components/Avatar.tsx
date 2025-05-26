import React from "react";

interface AvatarProps {
  /** Image URL or imported asset */
  src: string;
  /** alt text for accessibility */
  alt?: string;
  /** size in pixels (width & height) */
  size?: number;
  /** apply a little grow effect on hover */
  scaleOnHover?: boolean;
  /** extra Tailwind classes if you like */
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  size = 128,
  scaleOnHover = false,
  className = "",
}) => {
  const hoverClasses = scaleOnHover
    ? "transition-transform duration-300 transform hover:scale-110"
    : "";

  return (
    <div
      className={`rounded-full overflow-hidden ${hoverClasses} ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
