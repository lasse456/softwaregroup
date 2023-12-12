const teamData = [
  {
    name: "Lasse Osmann",
    position: "Founder & Head of Frontend",
    imageUrl: "lasseosmann.jpg",
  },
  {
    name: "Simon Maribo",
    position: "Co-Founder & Head of Backend",
    imageUrl: "lasseosmann.jpg",
  },
  {
    name: "Lasse Osmann",
    position: "Founder & Head of Frontend",
    imageUrl: "lasseosmann.jpg",
  },
  {
    name: "Lasse Osmann",
    position: "Founder & Head of Frontend",
    imageUrl: "lasseosmann.jpg",
  },
];

const Team = () => {
  return (
    <section className="py-[100px]">
      <div className="w-[90%] mx-auto max-w-[1100px]">
        <h2 className="text-[40px] mb-[30px] text-main">Meet Us</h2>
        <div className="grid grid-cols-4 gap-[30px]">
          {teamData.map((v) => (
            <TeamCard Obj={v} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = (props: any) => {
  return (
    <div>
      <img
        className="h-[260px] w-full object-cover mb-[20px] object-top"
        src={props.Obj.imageUrl}
      ></img>
      <h2 className="font-[600] text-main text-[16px]">{props.Obj.name}</h2>
      <p className="text-second text-[14px]">{props.Obj.position}</p>
    </div>
  );
};

export default Team;
