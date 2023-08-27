import { Button } from "@/components/button/button";
import {
  ArrowDownTrayIcon,
  ArrowTrendingUpIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export const Featured = () => {
  return (
    <div
      className="h-80 bg-cover bg-center "
      style={{
        backgroundImage: `url(
             https://e-cdns-images.dzcdn.net/images/cover/53b97bdffaf897ce0f8151fe3d62699d/1000x1000-000000-80-0-0.jpg
            )`,
      }}
    >
      <div
        className="flex items-center gap-8 flex-wrap h-full  px-5 "
        style={{
          background: `rgba(0,0,0,0.6)`,
        }}
      >
        <div
          className="bg-cover bg-center w-64 h-64 "
          style={{
            backgroundImage: `url(
           https://e-cdns-images.dzcdn.net/images/cover/53b97bdffaf897ce0f8151fe3d62699d/1000x1000-000000-80-0-0.jpg
            )`,
          }}
        ></div>
        <div className="flex flex-col gap-3">
          <div className="text-white font-bold flex gap-2 items-center border-b pb-2 border-gray-200">
            <ArrowTrendingUpIcon className="w-6 h-6  text-green-600" />
            Featured Release
          </div>
          <div className="">
            <h3 className="text-white font-bold uppercase text-sm">
              Mi Mayor Temor
            </h3>
            <p className="text-white text-sm">BUNKKERO NOX</p>
          </div>
          <div className="flex gap-5">
            <Button classNames="px-3 py-1 text-xs text-white ">
              <PlayCircleIcon className="w-4 h-4 " />
              Play
            </Button>
            <Button classNames="px-3 py-1 text-xs text-white ">
              <ArrowDownTrayIcon className="w-4 h-4" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
