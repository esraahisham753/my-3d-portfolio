import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  const items = navLinks.map(({id, href, name}) => (
      <li key={id} className="nav-li">
        <a href={href} className="nav-li_a" onClick={() => {}}>
          {name}
        </a>
      </li>
    )
  );

  return <ul className="nav-ul">{items}</ul>;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevIsOpen) => {
      return !prevIsOpen;
    });
  };

  return (
    <header className="bg-black/90 fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between mx-auto py-5 items-center text-white c-space">
          <a
            href="/"
            className="text-neutral-400 hover:text-white font-bold text-xl transition-colors">
            Esraa
          </a>

          <button
            onClick={toggle}
            className="text-neutral-400 hover:text-white transition-colors text-xl focus:outline-none sm:hidden flex">
            {
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                alt="toggle"
                className="w-6 h-6"
              />
            }
          </button>

          <nav className="sm:flex hidden">{<NavItems />}</nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            {
              <NavItems />
            }
      </div>
    </header>
  );
};

export default Navbar;
