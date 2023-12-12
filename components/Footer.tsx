const Footer = () => {
  return (
    <footer className="w-full border-[1px] py-[20px] p-5">
      <div className="flex justify-between items-center max-w-[1100px] mx-auto">
        <p className="text-[12px] text-gray-500 text-center">
          © {new Date().getFullYear()} Gazella Team
        </p>
        <a
          href="https://www.linkedin.com/company/routecoder/about/?viewAsMember=true"
          target="_blank"
        >
          <img className="w-[20px] cursor-pointer" src="/linkedin.png"></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
