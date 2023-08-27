"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/button/button";
import { useMusicStore } from "@/store/storeConfig";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import React from "react";

export const Player = () => {
  const { music } = useMusicStore((state) => state);
  if (!music?.isSelected) {
    return null;
  }
  return (
    <div className="border-t py-8 bg-white fixed bottom-0 left-0 w-screen">
      <div className="pl-40 pr-8 flex  items-center justify-between">
        <div className="flex gap-4 items-center">
          <img src={music?.thumbnail || ""} alt="alt" className="w-14 h-14" />
          <div>
            <h3 className="font-bold text-sm">{music?.title}</h3>
            <p className="text-sm text-gray-500 capitalize">{music?.artist}</p>
          </div>
        </div>
        <div>
          <audio controls src={music?.src} autoPlay={music?.isSelected} loop />
        </div>
        <div>
          <a href={music?.src} download={true} target="_blank">
            <Button classNames="px-3 py-1 border-gray-800 text-sm">
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
