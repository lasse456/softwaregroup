"use client";
import { use, useState } from "react";

const Features = ({ data }: { data: any }) => {
  return (
    <section className="bg-white py-[100px]">
      <div className="w-[90%] mx-auto max-w-[1100px] grid grid-cols-features gap-[100px] features:grid-cols-1">
        <div>
          <h1 className="text-[45px] leading-[45px] text-main w-[100%]">
            The all in one solution
          </h1>
        </div>
        <div className="grid grid-cols-2 w-full gap-[40px]">
          {data.map((v: any) => (
            <FeatureCard Obj={v} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = (props: any) => {
  const [boxHovered, setBoxHovered] = useState(false);
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={(v) => setBoxHovered(true)}
      onMouseLeave={(v) => setBoxHovered(false)}
    >
      <h2
        className={
          boxHovered
            ? "text-[20px] font-[600] mb-[20px] underline text-main transition-all"
            : "text-[20px] font-[600] mb-[20px] text-main transition-all"
        }
      >
        {props.Obj.heading}
      </h2>
      <p className="text-[14px] text-second">{props.Obj.description}</p>
    </div>
  );
};

export default Features;
