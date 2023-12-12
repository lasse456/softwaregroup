"use server";
import "./hero.css";
import { Link } from ".";

const Hero = () => {
  return (
    <section className="hero h-[100vh] ">
      <div className="w-[90%] mx-auto max-w-[1100px]">
        <div className="pt-[100px] w-[70%]">
          <h1 className="text-[60px] leading-[65px] mb-[30px] font-[600] text-main">
            We build products and invest in good ideas
          </h1>
          <p className="w-[80%] text-second mb-[30px]">
            Deliver the smooth and personalized journeys that travelers expect.
            From distribution to operations, Amadeus provides the technology,
            data, and insights you need to create optimal experiences at every
            touchpoint.
          </p>
          <div className="flex">
            <Link url="about" message="Learn more" />
            <Link url="about" message="See our cases" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
