import SearchInput from "@/components/inputs/serch-input";
import { Logo } from "@/components/logo/logo";
import React from "react";

export const Header = () => {
  return (
    <nav className="border-b border-gray-600 bg-white dark:bg-black">
      <div className="px-5 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="mr-10">
              <Logo />
            </div>
            <SearchInput />
          </div>
          <div className="dark:text-white">User</div>
        </div>
      </div>
    </nav>
  );
};
