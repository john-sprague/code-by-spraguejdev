import * as React from "react";
import { cn } from "../lib/utils";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "gradient";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "span" : "button";
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantStyles = {
      default: "bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-600",
      destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
      outline:
        "border border-muted text-muted bg-transparent hover:bg-muted/10 hover:text-muted-foreground focus:ring-muted",
      secondary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
      ghost: "hover:bg-muted/10 hover:text-muted-foreground focus:ring-muted",
      link: "text-blue-600 underline-offset-4 hover:underline focus:ring-blue-600",
      gradient:
        "w-full bg-gradient-to-r from-white via-orange-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 transition-all duration-200 transform hover:scale-105",
    };

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    return (
      <Comp
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
