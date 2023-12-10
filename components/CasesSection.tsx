const caseData = [
  { heading: "Web Application for project management", company: "Centox.io" },
  { heading: "Static webpage for visitors", company: "Unge Ivaerksaettere" },
];

const CasesSection = () => {
  return (
    <section className="mb-[100px]">
      <div className="w-[80%] mx-auto grid grid-cols-2 gap-[30px]">
        {caseData.map((v) => (
          <CaseCard Obj={v} />
        ))}
      </div>
    </section>
  );
};

const CaseCard = (props: any) => {
  return (
    <div className="w-full">
      <img
        className="h-[300px] w-full object-cover mb-[16px]"
        src="hero.webp"
      ></img>
      <h3 className="font-[600] mb-[5px]">{props.Obj.company}</h3>
      <h2>{props.Obj.heading}</h2>
    </div>
  );
};

export default CasesSection;
