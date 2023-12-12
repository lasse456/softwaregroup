import { DefaultHero, Info } from "@/components";

export default function InternalProjects() {
  return (
    <main>
      <DefaultHero
        background="bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.95)),url(/hero.webp)]"
        heading="Internal Projects"
      />
      <Info
        info={
          <p className="w-[70%] text-[20px] text-main new:text-[16px] new:w-[100%]">
            We bring together public and commercial healthcare organizations,
            offering a 360-degree industry approach to solving your most complex
            challenges. Our comprehensive suite of healthcare advisory, digital,
            and managed services drives innovation, growth, and resiliency so
            you can best serve your communities.
          </p>
        }
      />
    </main>
  );
}
