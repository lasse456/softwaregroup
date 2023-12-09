const Footer = () => {
  return (
    <footer className="w-full border-[1px] py-[20px]">
      <div className="w-[98%] mx-auto">
        <p className="text-[12px] text-gray-500 text-center">
          © {new Date().getFullYear()} Gazella Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
