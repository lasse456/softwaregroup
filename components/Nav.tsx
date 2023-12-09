const Nav = () => {
  return (
    <nav className="py-[15px] border-b-[1px]">
      <div className="w-[98%] mx-auto flex justify-between">
        <a href="/">
          <img className="w-[75px] cursor-pointer" src="gazellateam.png"></img>
        </a>
        <img className="w-[30px]" src="menu-burger.png"></img>
      </div>
    </nav>
  );
};

export default Nav;
