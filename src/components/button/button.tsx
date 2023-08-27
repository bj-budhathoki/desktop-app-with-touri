"use client";
import React from "react";
interface ButtonProps {
  children?: React.ReactNode | string;
  variant?: "filled" | "outline";
  classNames?: string;
  onClick?: () => void;
}
export const Button = ({
  children,
  variant,
  classNames,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`border-2 rounded-full   flex items-center gap-1 ${classNames} ${
        variant === "filled" ? "bg-gray-100 text-black" : ""
      } `}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
