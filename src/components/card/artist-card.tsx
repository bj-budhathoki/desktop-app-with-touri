import React from "react";

export const ArtistCard = () => {
  return (
    <div>
      <div
        className="h-72 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(
           https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_1280.jpg
          )`,
        }}
      ></div>
      <div className="my-2">
        <p className="font-bold dark:text-black text-sm">Tempelhof</p>
      </div>
    </div>
  );
};
