const DefaultHero = ({
  background,
  heading,
}: {
  background: any;
  heading: any;
}) => {
  return (
    <section
      className={`${background} bg-cover bg-center py-[270px] pb-[40px]`}
    >
      <div className="w-[90%] mx-auto max-w-[1100px]">
        <h2 className="text-[60px] leading-[65px] mb-[30px] font-[500] text-white w-[70%] new:text-[50px] new:leading-[55px] top:text-[40px] top:leading-[45px]">
          {heading}
        </h2>
      </div>
    </section>
  );
};

export default DefaultHero;
