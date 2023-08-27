import { PlayCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "../button/button";

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
          <Button classNames="px-3 py-1 text-xs text-black border-gray-900">
            <PlayCircleIcon className="w-4 h-4" />
            Play
          </Button>
        </div>
      </div>
    </div>
  );
};
