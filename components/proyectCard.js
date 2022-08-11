import Badge from "./badge";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";

export default function ProyectCard({
  title,
  description,
  imageSrc,
  badges,
  link,
}) {
  return (
    <article className="h-[345px] w-80 rounded-lg bg-white md:h-[360px] md:w-60 lg:w-72">
      <div className="aspect-w-2 aspect-h-1  ">
        <Image
          src={imageSrc}
          layout="fill"
          className="rounded-t-lg object-cover "
        ></Image>
      </div>
      <div className="flex flex-col gap-2 p-4  text-darkpurple">
        <h3 className="text-xl font-medium ">{title}</h3>
        <div className="flex gap-2 p-2">
          {badges.map((badge, index) => {
            return <Badge key={index} text={badge}></Badge>;
          })}
        </div>

        <p className="text-justify md:text-sm md:font-normal">{description}</p>

        <Link href={link}>
          <a className=" flex items-center gap-2 md:text-sm md:font-normal">
            <AiOutlineLink size={20}></AiOutlineLink> <p> Link to github</p>
          </a>
        </Link>
      </div>
    </article>
  );
}
