import SearchInput from "@/components/inputs/serch-input";
import { Logo } from "@/components/logo/logo";
import React from "react";

export const Header = () => {
  return (
    <nav className="border-b border-gray-600 bg-white pl-40">
      <div className="px-5 py-3">
        <div className="flex justify-between items-center">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
};
