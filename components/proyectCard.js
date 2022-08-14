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
  blurDataURL,
}) {
  return (
    <article className="h-[380px] w-80 rounded-lg bg-white md:h-[360px] md:w-60 lg:w-72">
      <div className="aspect-w-2 aspect-h-1  ">
        <Image
          src={imageSrc}
          layout="fill"
          blurDataURL={blurDataURL}
          placeholder="blur"
          className="rounded-t-lg object-cover "
        ></Image>
      </div>
      <div className="flex flex-col gap-2 p-4 text-darkpurple  md:gap-3">
        <h3 className="text-xl font-medium ">{title}</h3>
        <div className="flex gap-2 p-2">
          {badges.map((badge, index) => {
            return <Badge key={index} text={badge}></Badge>;
          })}
        </div>

        <p className="text-justify font-normal md:text-sm">{description}</p>

        <Link href={link}>
          <a className=" flex cursor-pointer items-center gap-2 font-normal md:text-sm">
            <AiOutlineLink size={20}></AiOutlineLink> <p> Link to github</p>
          </a>
        </Link>
      </div>
    </article>
  );
}
