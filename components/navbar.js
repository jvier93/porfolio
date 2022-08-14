import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar({ onTop }) {
  const [open, setOpen] = useState(false);

  const navbarLinks = [
    { name: "Skills", link: "#skills" },
    { name: "Proyects", link: "#proyects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className={` mx-auto flex h-16  w-full max-w-5xl flex-col items-start justify-center
      px-7  transition-colors duration-500 ease-in 
      md:flex-row md:items-center md:justify-between
      ${
        onTop
          ? `text-white ${
              open && "bg-darkpurple"
            } md:bg-transparent lg:bg-white/10 `
          : "bg-white  text-darkpurple"
      }
    
      
      `}
    >
      <div>
        <Link href={"#about"}>
          <a
            onClick={() => {
              setOpen(false);
            }}
          >
            <h3 className="text-2xl font-semibold transition-transform active:scale-90 ">
              About
            </h3>
          </a>
        </Link>
      </div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="absolute right-8 top-4 cursor-pointer  text-3xl md:hidden"
      >
        {open ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`absolute left-0 top-[64px] w-full  transition-all duration-500  ease-in md:static
         md:flex  md:w-auto md:transition-none
       
        ${
          open
            ? `top-[60px]  opacity-100 ${
                onTop ? "bg-darkpurple" : " bg-white"
              } md:bg-transparent`
            : "top-[-490px] opacity-0 md:opacity-100"
        }
        
        `}
      >
        {navbarLinks.map(({ name, link }, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setOpen(!open);
              }}
              className={`  md:text-normal  my-7 ml-8 text-xl font-normal transition-transform active:scale-90 md:my-0 
              `}
            >
              <Link href={link}>
                <a>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
