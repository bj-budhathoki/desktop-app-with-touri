/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/button/button";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import React from "react";

export const Player = () => {
  return (
    <div className="border-t py-8 bg-white fixed bottom-0 left-0 w-screen">
      <div className="pl-40 pr-8 flex  items-center justify-between">
        <div className="flex gap-4 items-center">
          <img
            src="https://e-cdns-images.dzcdn.net/images/cover/53b97bdffaf897ce0f8151fe3d62699d/1000x1000-000000-80-0-0.jpg"
            alt="alt"
            className="w-14 h-14"
          />
          <div>
            <h3 className="font-bold text-sm">Loneliness</h3>
            <p className="text-sm text-gray-500 capitalize">
              barmuda, Mandrazom
            </p>
          </div>
        </div>
        <div>
          <audio
            controls
            src="https://cdns-preview-9.dzcdn.net/stream/c-9b29dff5ba58b3352aecbdca40f84233-3.mp3"
          />
        </div>
        <div>
          <Button classNames="px-3 py-1 border-gray-800 text-sm">
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};
