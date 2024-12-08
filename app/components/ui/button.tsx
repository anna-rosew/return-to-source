import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "white-outline" | "link";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  ({
    className,
    variant = "primary",
    size = "md",
    children,
    as = "button",
    href,
    ...props
  }) => {
    const baseStyles =
      "tracking-wide transition-colors duration-700 ease-in-out rounded font-regular";

    // Define variant styles including the 'link' variant
    const variantStyles = {
      primary:
        "bg-customTeal border-customTeal text-white hover:bg-black hover:text-white uppercase",
      secondary:
        "bg-black text-customBeige hover:bg-black hover:text-customBeige",
      outline:
        "border border-black text-black hover:bg-black hover:text-white uppercase",
      "white-outline":
        "border border-white text-white hover:bg-white hover:text-white uppercase",
      link: "font-jost text-[16px] text-black uppercase relative hover:text-black cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0",
    };

    const sizeStyles = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    };

    // Determine the correct element (button or link)
    const Component = as === "a" ? "a" : "button";

    return (
      <Component
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        href={href}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button };
