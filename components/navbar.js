import Link from "next/link";

export default function Navbar({ onTop }) {
  return (
    <nav
      className={` m-auto h-14 w-full max-w-5xl  p-2 transition-colors
       delay-200 duration-500 ease-in md:pl-4 md:pr-4 lg:pr-8 lg:pl-8
      ${
        onTop
          ? "bg-gray-100/4 text-white lg:bg-white/10"
          : "bg-white  text-darkpurple"
      }  flex items-center justify-between`}
    >
      <div>
        <Link href={"#about"}>
          <a>
            <h3 className="text-xl font-normal ">About</h3>
          </a>
        </Link>
      </div>
      <div
        className={`flex  w-44 justify-between  ${
          onTop ? "font-light" : " font-normal"
        } `}
      >
        <Link href={"#skills"}>
          <a>Skills</a>
        </Link>
        <Link href={"#proyects"}>
          <a>Proyects</a>
        </Link>
        <Link href={"#contact"}>
          <a>Contact </a>
        </Link>
      </div>
    </nav>
  );
}
