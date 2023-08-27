import { PageLayout } from "@/containers/layouts/page-layout";
import { Featured } from "@/containers/music/featured";
import { Music } from "@/containers/music/music";
import { getMusics } from "@/services/musics";
import React from "react";

export default async function MusicsPage() {
  const results = await getMusics();
  return (
    <PageLayout>
      <div className="ml-36">
        <Featured />
        <div className="px-5 py-8">
          <Music results={results} />
        </div>
      </div>
    </PageLayout>
  );
}
