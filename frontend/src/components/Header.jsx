import { Link, ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { LuSunMedium } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Header({ scrollRef }) {
  const [open, setOpen] = useState(false);
  let Links = [
    { name: "Beranda", link: "beranda" },
    { name: "Tentang", link: "tentang" },
    { name: "Katalog", link: "katalog" },
    { name: "Kontak", link: "kontak" },
  ];
  return (
    <div className="w-full max-w-7xl  bg-[#0e0b16] text-white" ref={scrollRef}>
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 ">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className="text-primary hover:text-white">SportyThreads</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-[#0e0b16] sm:bg-black md:bg-[#0e0b16] transition-all duration-500 ease-in cursor-pointer ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((l) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={l.name}>
              <Link
                to={l.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className={` hover:text-primary duration-50`}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
