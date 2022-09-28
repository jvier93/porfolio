import Section from "./section";
import Link from "next/link";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";
import SectionTitle from "./sectionTitle";

export default function Contact() {
  return (
    <Section>
      <div
        id="contact"
        className=" min-h-[60vh] w-full   max-w-5xl scroll-mt-16 bg-gray-100 p-4 "
      >
        <SectionTitle
          title={"Contact me"}
          bg="bg-darkpurple"
          textColor={"text-darkpurple"}
        ></SectionTitle>
        <div className="flex h-[30vh] w-full flex-col items-center justify-center">
          <ul className=" font-normal md:text-xl ">
            <li className=" mb-2 flex items-center md:mb-4">
              <AiOutlinePhone size={20}></AiOutlinePhone>{" "}
              <span className="pl-2">+598 97 439 480</span>
            </li>
            <li className="mb-2 flex items-center md:mb-4">
              {" "}
              <AiOutlineMail size={20}></AiOutlineMail>{" "}
              <span className="pl-2">pablo-krai@hotmail.com</span>
            </li>
            <li className="flex items-center ">
              <AiOutlineLinkedin size={20}></AiOutlineLinkedin>
              <Link href={"https://www.linkedin.com/in/pablo-krai%C3%B1uk/"}>
                <a className="cursor-pointer pl-2">
                  linkedin.com/in/pablo-kraiñuk
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
