import { Card } from "@/components/card/card";
import React from "react";

export const Music = () => {
  return (
    <section>
      <div className="mb-3">
        <h1 className="font-bold text-lg tracking-wide">Recent Releases</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-5 2xl:grid-cols-6">
        {[1, 3, 4, 5, 5, 6]?.map((val) => (
          <Card key={val} />
        ))}
      </div>
    </section>
  );
};