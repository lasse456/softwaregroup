"use client";
import { Button, Link } from ".";

const Hero = () => {
  return (
    <section className="py-[100px]">
      <div className="w-[560px] mx-auto max-w-[650px] md:w-[90%]">
        <h1 className="text-[60px] leading-[60px] mb-[50px] font-[600] md:text-[50px] md:leading-[55px] md:w-[80%]">
          A modern day software group
        </h1>
        <p className="text-[16px] mb-[50px] font-[500]">
          Obtainal is a newly started software group focusing on developing
          unique user friendly applications running on the latest technology.
          With 10 years of combined experience, we take pride in tailor made
          products suiting each customer and project the best possible.
          <br></br>
          <br></br>
          As a company we don’t only build software for our clients - we also
          build impactful projects internally by use of our team and combined
          experience and skills. Whether we build software for our clients or
          for ourselves, we take the time to create the best product possible.{" "}
          <br></br>
          <br></br>We don’t just develop software. At Obtainal you’re offered a
          firm sparring partner providing professional guidance throughout the
          entire collaboration, supplying ideas, support and the tools needed to
          make your project go from idea to deployment. We believe the roots of
          a strong collaboration consists of both communication, understanding
          and honesty. <br></br>
          <br></br> Collaboration is at the core of our work. We partner closely
          with our clients to understand their goals and challenges, ensuring
          that our solutions align with their vision. Together, we leverage our
          technical expertise and strategic guidance to deliver exceptional
          outcomes.<br></br>
          <br></br> Throughout our journey, we have had the privilege of working
          with diverse clients across various industries. From startups to
          established enterprises, we have consistently delivered products that
          exceed expectations and drive success.<br></br>
          <br></br> If you are seeking a technical product agency that not only
          provides development solutions but also offers comprehensive guidance
          and a focus on societal impact, look no further than Obtainal. Let's
          collaborate and create innovative solutions that shape the future.
        </p>
        <div className="flex gap-[20px]">
          <Button url="booking" message="Contact Us" />
          <Link message="See Our Work &#8594;" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
