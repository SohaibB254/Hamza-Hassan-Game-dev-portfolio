"use client";
import React from "react";
import { Button } from "../ui/button";

const About: React.FC = () => {
  return (
    <div id="about">
     <h1 className="sm:text-5xl text-3xl font-jura text-primary pt-30 bg-black text-center">
        About
      </h1>
    <section  className="bg-black text-white flex sm:flex-row flex-col justify-center items-stretch  py-10  gap-10 ">
      <aside className="sm:w-125 flex flex-col gap-10 px-3   ">
        <div className=" flex flex-col gap-2 flex-1">
          <h1 className="text-2xl font-jura text-primary cursor-pointer">
            Dev's Info
          </h1>
          <p className="text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            architecto cupiditate deleniti odit nemo maxime natus eligendi illo
            distinctio in? Laboriosam incidunt consequuntur atque quo facere,
            deserunt doloremque autem nemo quaerat ex accusamus eum similique
            sed nobis veritatis ipsum? Veritatis dignissimos dolorum reiciendis
            odio porro impedit magni, minus perferendis rem?
          </p>
        </div>
        <Button className="text-[16px] p-5 cursor-pointer text-black w-fit ">
          Contact
        </Button>
      </aside>
      {/* Skills and Experience section */}
      <section className="sm:w-125 px-3 flex flex-col gap-4  ">
        <article>
          <h1 className="text-2xl font-jura text-primary cursor-pointer">
            Skills :
          </h1>
          <p className="font-semibold">
            Game Engine Mastery, 3D Matric Graphics, Physics Simulation, C#
            Proficiency
          </p>
        </article>
        <article>
          <h1 className="text-2xl font-jura text-primary cursor-pointer">
            Experience :
          </h1>
          <span>
            <h2 className="font-semibold">
              Unity Developer - Compony <br />
              July 2024 - Feb 2025
            </h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              dolores nisi. Ducimus corporis sunt enim quidem repellat nam
              nostrum deserunt tenetur, earum, laudantium neque, ipsa aliquid.
              Repellendus ducimus vel hic.
            </p>
          </span>
          <span>
            <h2 className="font-semibold">
              Unity Developer - Compony <br />
              July 2024 - Feb 2025
            </h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              dolores nisi. Ducimus corporis sunt enim quidem repellat nam
              nostrum deserunt tenetur, earum, laudantium neque, ipsa aliquid.
              Repellendus ducimus vel hic.
            </p>
          </span>
        </article>
      </section>
    </section>
    </div>
  );
};

export default About;
