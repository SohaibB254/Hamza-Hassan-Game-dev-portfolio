import React from "react";
import Navbar from "./Navbar";
import { Gamepad2, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero: React.FC = () => {
  return (
    <>
      <Navbar />
      <main id="hero"  className=" h-screen flex items-center justify-center gap-8  ">
        {/* Overlay layer */}
        <div className="bg-black/80 backdrop-blur-sm fixed h-full w-full z-0"> </div>
        {/* Image Div */}
        <div className="h-125 w-125 border-4 border-primary overflow-hidden rounded-full z-10">
          <img src="/images/dev-image.jpg" alt="" />
        </div>
        {/* Text & CTA */}
        <div className=" flex flex-col gap-8 z-10 ">
          <div id="text" className="flex-1">
            <header className="text-6xl font-jura text-primary">
              <h1>Hamza Hassan,</h1>
              <h1>Game Developer</h1>
            </header>
            <p className="text-zinc-300 text-sm italic">I make amazing games in Unity.</p>
            {/* Socials */}
          </div>
          {/* Developer stats */}
            <div id="dev-stats" className="flex gap-4">
            <span>
                <p className="text-zinc-600">Projects : </p>
                <h1 className="text-primary font-bold text-2xl">50+</h1>
            </span>
            <span>
                <p className="text-zinc-600">Education : </p>
                <h1 className="text-primary font-bold text-2xl">BSCS</h1>
            </span>
            <span>
                <p className="text-zinc-600">Experience : </p>
                <h1 className="text-primary font-bold text-2xl">1+ years</h1>
            </span>
            </div>
            {/* Socials and CTA */}
            <div className="flex flex-col gap-4">
            <div className="text-primary flex gap-3">
              <Store size={30} />
              <Gamepad2 size={30} />
            </div>
          <Button className="text-[20px] p-5 cursor-pointer w-fit text-black">
            Hire me!
          </Button>

            </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
