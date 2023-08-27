import React, { ReactNode } from "react";
import { MainContent } from "./main-content";
import { Sidebar } from "./sidebar";

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <MainContent> {children}</MainContent>
    </div>
  );
};
