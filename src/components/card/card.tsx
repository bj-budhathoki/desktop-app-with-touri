"use client";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "../button/button";
import { useMusicStore } from "@/store/storeConfig";

export const Card = ({ music }: { music: any }) => {
  const { setMusic } = useMusicStore((state) => state);
  return (
    <div>
      <div
        className="h-72 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(
          ${music?.album?.cover_medium}
          )`,
        }}
      ></div>
      <div className="my-2">
        <p className="font-bold dark:text-black text-sm">
          {music?.album?.title}
        </p>
        <p className="text-xs text-gray-400"> {music?.artist?.name}</p>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">1 day ago</p>
          <p className="font-bold text-sm capitalize">{music?.type}</p>
        </div>
        <div>
          <Button
            classNames="px-3 py-1 text-xs text-black border-gray-900"
            onClick={() => {
              setMusic({
                src: music?.preview,
                thumbnail: music?.album?.cover_small,
                title: music?.album?.title,
                artist: music?.artist?.name,
                isSelected: true,
              });
            }}
          >
            <PlayCircleIcon className="w-4 h-4" />
            Play
          </Button>
        </div>
      </div>
    </div>
  );
};
