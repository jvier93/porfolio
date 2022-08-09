import { useEffect, useState } from "react";
import Head from "next/head";

import About from "../components/about";
import Contact from "../components/Contact";
import Navbar from "../components/navbar";
import Proyects from "../components/proyects";
import Skills from "../components/skills";

export default function Home() {
  const [onTop, setOnTop] = useState(true);

  const handleScroll = () => {
    setOnTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="bg-gradient-to-r from-[#1B1D2A] via-[#211114] to-[#351D20]    font-roboto  font-thin  ">
      <Head>
        <title>Pablo Kraiñuk </title>
      </Head>
      <header className="sticky top-0 z-50  ">
        <Navbar onTop={onTop}></Navbar>
      </header>

      <main className=" min-h-full ">
        <About></About>
        <Skills></Skills>
        <Proyects></Proyects>
        <Contact></Contact>
      </main>
      <footer className="  flex justify-center    ">
        <div className="flex h-[35vh] w-full max-w-5xl flex-col items-center justify-center bg-footer-wave  bg-no-repeat pb-4 text-sm text-white  md:justify-end md:bg-cover lg:bg-white/10 ">
          <p>Portfolio Pablo Kraiñuk 2022.</p>
          <p className="mt-2 text-xs">Made with: Nextjs and Tailwind css</p>
        </div>
      </footer>
    </div>
  );
}
