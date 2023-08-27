import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};
