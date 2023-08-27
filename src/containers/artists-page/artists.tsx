import React from "react";
import { Sidebar } from "../layouts/sidebar";
import SearchInput from "@/components/inputs/serch-input";
import { ArtistCard } from "@/components/card/artist-card";

export const ArtistsContainer = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-36">
        <div className="border p-5">
          <h1 className="font-bold text-xl tracking-wider">Artists</h1>
        </div>
        <div className="p-5">
          <SearchInput />
        </div>
        <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 2xl:grid-cols-5">
          {[1, 3, 4, 5, 5, 6, 1, 3, 4, 5, 5, 6, 1, 3, 4, 5, 5, 6]?.map(
            (val) => (
              <ArtistCard key={val} />
            )
          )}
        </div>
      </div>
    </div>
  );
};
