import React from "react";

export const MainContent = ({ children }: { children: React.ReactNode }) => {
  return <main className="bg-white  flex-1">{children}</main>;
};
