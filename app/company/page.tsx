import { DefaultHero, Info, Team } from "@/components";

export default function Company() {
  return (
    <main>
      <DefaultHero
        background="bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.95)),url(/hero.webp)]"
        heading="Based in Copenhagen"
      />
      <Info
        info={
          <p className="w-[70%] text-[20px] text-main new:text-[16px] new:w-[100%]">
            We bring together public and commercial healthcare organizations,
            offering a 360-degree industry approach to solving your most complex
            challenges. Our comprehensive suite of healthcare advisory, digital,
            and managed services drives innovation, growth, and resiliency so
            you can best serve your communities.
            <br></br>
            <br></br>
            We bring together public and commercial healthcare organizations,
            offering a 360-degree industry approach to solving your most complex
            challenges. Our comprehensive suite of healthcare advisory, digital,
            and managed services drives innovation, growth, and resiliency so
            you can best serve your communities.
            <br></br>
            <br></br>
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
