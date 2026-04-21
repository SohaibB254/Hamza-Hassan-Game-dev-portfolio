"use client";
import React from "react";
import { Button } from "../ui/button";

interface Game {
  id: number;
  title: string;
  src: string;
  tags: string[];
}

const games: Game[] = [
  {
    id: 1,
    title: "Great Warriors",
    src: "/videos/test.mp4",
    tags: ["shooter", "fps", "racer"],
  },
  {
    id: 2,
    title: "Splashing Dash",
    src: "/videos/test.mp4",
    tags: ["shooter", "fps", "gun"],
  },
  {
    id: 3,
    title: "Battle Wars",
    src: "/videos/test.mp4",
    tags: ["shooter", "fps", "gun"],
  },
  {
    id: 4,
    title: "Spring Sprung",
    src: "/videos/test.mp4",
    tags: ["shooter", "fps", "gun"],
  },
  {
    id: 5,
    title: "Doom Fit",
    src: "/videos/test.mp4",
    tags: ["shooter", "fps", "gun"],
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="py-10 bg-black">
      <h1 className="sm:text-5xl text-3xl font-jura text-primary py-10 bg-black text-center">
        Projects
      </h1>

      <main className="relative overflow-hidden bg-black py-10">
        {/*  Fade edges */}
        <div  className="pointer-events-none fade-gradient absolute inset-0 z-10"
        />

        {/*  Scrolling Track */}
        <div className="flex ticker  gap-6 w-max">
          {/*  Duplicate content */}
          {[...games, ...games].map((game, index) => (
            <div
              key={index}
              className="border border-gray-800 bg-black p-3 w-72 sm:w-87.5 md:w-100 shrink-0"
            >
              <div className="flex flex-col gap-2 text-white">
                <video
                  className="w-full h-50 aspect-auto object-cover"
                  src={game.src}
                  autoPlay
                  loop
                  poster="/images/bg-image.jpg"
                />

                <h2 className="text-lg sm:text-xl font-semibold mt-2">
                  {game.title}
                </h2>

                <div className="text-xs flex gap-2 flex-wrap">
                  {game.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-zinc-800 border border-primary rounded-full px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="w-fit text-black mt-2 hover:cursor-pointer">
                  Play now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
