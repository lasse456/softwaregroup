"use client";
import { useState } from "react";

const Projects = ({ data }: { data: any }) => {
  return (
    <section className="bg-white py-[100px]">
      <div className="w-[90%] mx-auto max-w-[1100px] grid grid-cols-1 gap-[100px]">
        {data.map((v: any) => (
          <ProjectCars Obj={v} />
        ))}
      </div>
    </section>
  );
};

const ProjectCars = ({ Obj }: { Obj: any }) => {
  return (
    <div className="flex gap-[40px]">
      <h1 className="text-[40px] text-main">{Obj.count}</h1>
      <div>
        <h2 className="text-[40px] mb-[20px] text-main">{Obj.company}</h2>
        <p className="w-[100%] text-second mb-[30px]">{Obj.description}</p>
        <a className="text-[16px] text-main font-[600]">
          View the finished product &#8594;
        </a>
      </div>
    </div>
  );
};

export default Projects;
