import { PlayIcon } from "@heroicons/react/24/solid";
import React from "react";

export const Logo = () => {
  return (
    <div className="dark:text-white uppercase text-xl font-bold flex items-center">
      Pl
      <PlayIcon className="w-6 h-5 dark:text-white" />Y
    </div>
  );
};
