import { DefaultHero, Info, Features } from "@/components";

export default function Webapps() {
  return (
    <main>
      <DefaultHero
        background="bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.95)),url(/websites.webp)]"
        heading="Static Websites"
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
      <Features
        data={[
          {
            heading: "Database Integration",
            description:
              "Gazella Team is a modern-day software group building custom-made software running on the latest technology. All inclusive service when booking. ",
          },
          {
            heading: "Latest Technology",
            description:
              "Gazella Team is a modern-day software group building custom-made software running on the latest technology. All inclusive service when booking.",
          },
          {
            heading: "Professional Interface",
            description:
              "Gazella Team is a modern-day software group building custom-made software running on the latest technology. All inclusive service when booking.",
          },
          {
            heading: "Backend Systems",
            description:
              "Gazella Team is a modern-day software group building custom-made software running on the latest technology. All inclusive service when booking.",
          },
          {
            heading: "Domain & Hosting",
            description:
              "Gazella Team is a modern-day software group building custom-made software running on the latest technology. All inclusive service when booking.",
          },
          {
            heading: "Free Support",
            description:
              "Gazella Team is a modern-day software group building custom-made software running on the latest technology. All inclusive service when booking.",
          },
        ]}
      />
    </main>
  );
}
