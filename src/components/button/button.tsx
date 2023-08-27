import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
  variant?: "filled" | "outline";
}
export const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button
      className={`border-2 rounded-full text-white px-4 py-2  ${
        variant === "filled" ? "bg-gray-100 text-black" : ""
      } `}
    >
      {children}
    </button>
  );
};
