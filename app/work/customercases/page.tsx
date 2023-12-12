import { DefaultHero, Info, Projects } from "@/components";

export default function CustomerCases() {
  return (
    <main>
      <DefaultHero
        background="bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.95)),url(/hero.webp)]"
        heading="Customer Cases"
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
      <Projects
        data={[
          {
            image: "/casetest.jpg",
            company: "Centox.io",
            description:
              "Web application developed for project management, suited for both small and large corporations and companies, Web application developed for project management, suited for both small and large corporations and companies Web application developed for project management, suited for both small and large corporations and companies",
            count: "01.",
          },
          {
            image: "/casetest.jpg",
            company: "Unge Ivaerksaettere",
            description:
              "Web application developed for project management, suited for both small and large corporations and companies, Web application developed for project management, suited for both small and large corporations and companies Web application developed for project management, suited for both small and large corporations and companies",
            count: "02.",
          },
          {
            image: "/casetest.jpg",
            company: "Unge Ivaerksaettere",
            description:
              "Web application developed for project management, suited for both small and large corporations and companies, Web application developed for project management, suited for both small and large corporations and companies Web application developed for project management, suited for both small and large corporations and companies",
            count: "03.",
          },
          {
            image: "/casetest.jpg",
            company: "Unge Ivaerksaettere",
            description:
              "Web application developed for project management, suited for both small and large corporations and companies, Web application developed for project management, suited for both small and large corporations and companies Web application developed for project management, suited for both small and large corporations and companies",
            count: "04.",
          },
        ]}
      />
    </main>
  );
}
