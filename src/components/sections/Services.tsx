import React from "react";

type service = {
  id: number;
  title: string;
  content: string;
};

const Services: React.FC = () => {
  const services: service[] = [
    { id: 1, title: "3D Graphics", content: "I make amazing 3D work" },
    { id: 2, title: "Physics Simulation", content: "I make amazing 3D work" },
    { id: 3, title: "Unity Games", content: "I make amazing 3D work" },
  ];

  return (
    <>
      <h1 className="sm:text-5xl text-3xl font-jura text-primary bg-black text-center pt-8">
        Services
      </h1>
      {/*  Service Cards container */}
      <div className="bg-black text-zinc-600 flex md:flex-row flex-col justify-center items-center gap-10 py-12">
       {
        services.map((service) => (
             <article key={service.id} className="w-80 h-80 bg-[#1e1e1e] border-2 border-primary p-3 sm:p-6 hover:scale-105 hover:shadow-xl hover:shadow-primary/20   transition duration-300 cursor-pointer ">
          <h1 className="sm:text-2xl text-xl font-jura text-primary my-4">
            {service.title}
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia nihil
            mollitia quos quasi minima sit distinctio hic voluptatem temporibus
            dignissimos!
          </p>
        </article>
        ))
       }
      </div>
    </>
  );
};

export default Services;
