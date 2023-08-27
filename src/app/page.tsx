import { Button } from "@/components/button/button";
import { Card } from "@/components/card/card";
import { HomeLayout } from "@/containers/layouts/home-layout";
import { Music } from "@/containers/music/music";
import { getMusics } from "@/services/musics";
import Image from "next/image";

export default async function Home() {
  return (
    <section>
      <HomeLayout>
        <section
          className="bg-slate-900 min-h-screen flex flex-col  justify-center p-20 gap-10 relative object-cover ml-36"
          style={{
            backgroundImage: `url(
              https://ncsmusic.s3.eu-west-1.amazonaws.com/slides/000/000/001/2000x0/1680853147_VqWMtQvc0j_Website-new.jpg
            )`,
            backgroundPosition: "right",
          }}
        >
          <div className="flex flex-col w-[70%]">
            <h1 className="text-7xl font-bold uppercase text-white tracking-wider">
              MUSIC
            </h1>
            <h4 className="text-white capitalize text-5xl font-bold tracking-wider my-10">
              music without limitations
            </h4>
            <p className="text-white text-xl font-bold tracking-wider">
              A record label and music platform for creators by creators, MUSIC
              provides the world with free heigh-quality electronics music.
            </p>
            MUSIC
          </div>
          <div className="flex flex-wrap gap-4">
            <Button classNames="px-3 py-2 text-white">
              Open Music Library
            </Button>
            <Button variant="filled" classNames="px-3 py-2">
              Sign Up
            </Button>
          </div>
        </section>
      </HomeLayout>
    </section>
  );
}
