"use client"
import React from "react";
import Navbar from "../Navbar";
import { Download, Gamepad2, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero: React.FC = () => {
  return (
    <>
      <Navbar />
      <main id="hero"  className=" h-screen flex items-center justify-center gap-8 relative  ">
        {/* Overlay layer */}
        <div className="bg-black/40 backdrop-blur-sm absolute h-full w-full z-0"> </div>
        {/* Image Div */}
        <div className="h-125 w-125 border-4 border-primary sm:block hidden overflow-hidden rounded-full z-10">
          <img src="/images/dev-image.jpg" alt="" />
        </div>
        {/* Text & CTA */}
        <div className=" flex flex-col gap-8 z-10 px-4 sm:items-baseline items-center ">
          <div id="text" className="flex-1">
            <header className="sm:text-6xl text-4xl font-jura text-primary">
              <h1>Hamza Hassan,</h1>
              <h1>Game Developer</h1>
            </header>
            <p className="text-zinc-300 text-sm italic sm:text-left text-center">I make amazing games in Unity.</p>
            {/* Socials */}
          </div>
          {/* Developer stats */}
            <div id="dev-stats" className="flex gap-4">
            <span>
                <p className="text-zinc-600">Projects : </p>
                <h1 className="text-primary font-bold sm:text-2xl text-xl">50+</h1>
            </span>
            <span>
                <p className="text-zinc-600">Education : </p>
                <h1 className="text-primary font-bold sm:text-2xl text-xl">BSCS</h1>
            </span>
            <span>
                <p className="text-zinc-600">Experience : </p>
                <h1 className="text-primary font-bold sm:text-2xl text-xl">1+ years</h1>
            </span>
            </div>
            {/* Socials and CTA */}
            <div className="flex flex-col sm:gap-4 gap-2">
            <div className="text-primary flex gap-3">
              <Store size={30} />
              <Gamepad2 size={30} />
            </div>
            {/* CTA */}
          <Button className="sm:text-[20px] text-[16px] p-5 cursor-pointer  text-black">
            Hire me!
          </Button>
          <Button className='text-[16px] p-5 cursor-pointer sm:hidden text-black  '>Resume <Download/></Button>
            </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
