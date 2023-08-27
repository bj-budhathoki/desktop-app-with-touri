import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
  variant?: "filled" | "outline";
  classNames?: string;
}
export const Button = ({ children, variant, classNames }: ButtonProps) => {
  return (
    <button
      className={`border-2 rounded-full   flex items-center gap-1 ${classNames} ${
        variant === "filled" ? "bg-gray-100 text-black" : ""
      } `}
    >
      {children}
    </button>
  );
};
