import React, { ReactNode } from "react";
import { Sidebar } from "./sidebar";

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};
