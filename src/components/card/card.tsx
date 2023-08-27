import { PlayCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Card = () => {
  return (
    <div>
      <div
        className="h-72 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(
            https://e-cdns-images.dzcdn.net/images/cover/a8224e3b2368d35ddc292d4e89fe34f5/500x500-000000-80-0-0.jpg
          )`,
        }}
      ></div>
      <div className="my-2">
        <p className="font-bold dark:text-black text-sm">Tempelhof</p>
        <p className="text-xs text-gray-400">Yann Tiersen</p>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">1 day ago</p>
          <p className="font-bold text-sm capitalize">electronic</p>
        </div>
        <div>
          <button className="border-2 px-3 border-gray-900 rounded-full text-xs py-1 font-bold flex items-center gap-2">
            <PlayCircleIcon className=" w-4 h-4" />
            Play
          </button>
        </div>
      </div>
    </div>
  );
};
