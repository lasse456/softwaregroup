const StickyCta = () => {
  return (
    <div className="gap-[14px] rounded-l-[8px] rounded- bg-main transition-all fixed bottom-[50%] p-[10px] right-0 cursor-pointer flex flex-col">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/lasse-osmann-1b6ab9243/"
      >
        <img className="w-[20px]" src="linkedin.png"></img>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/lasse-osmann-1b6ab9243/"
      >
        <img className="w-[20px]" src="twitter.png"></img>
      </a>
    </div>
  );
};

export default StickyCta;
