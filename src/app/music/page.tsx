import { PageLayout } from "@/containers/layouts/page-layout";
import { Featured } from "@/containers/music/featured";
import { Music } from "@/containers/music/music";
import React from "react";

export default function MusicsPage() {
  return (
    <PageLayout>
      <div className="ml-36">
        <Featured />
        <div className="px-5 py-8">
          <Music />
        </div>
      </div>
    </PageLayout>
  );
}
