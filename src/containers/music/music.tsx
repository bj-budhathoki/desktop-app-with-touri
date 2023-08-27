import { Card } from "@/components/card/card";
import React from "react";
import { Player } from "../player/player";

export const Music = ({ results }: any) => {
  return (
    <section>
      <div className="mb-8">
        <h1 className="font-bold text-lg tracking-wide">Recent Releases</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-16 2xl:grid-cols-5">
        {results?.data?.map((music: any) => (
          <Card key={music?.id} music={music} />
        ))}
      </div>
      <Player />
    </section>
  );
};
