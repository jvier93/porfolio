import Badge from "./badge";
import Image from "next/image";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

export default function ProyectCard({
  title,
  description,
  imageSrc,
  badges,
  linkRepo,
  linkDemo,
  blurDataURL,
}) {
  return (
    <article className=" h-[420px] w-80  rounded-lg bg-white md:flex md:h-[280px] md:w-full md:items-center md:gap-6 md:px-4 ">
      <div className="relative h-40 w-full  md:h-64 md:w-72     ">
        <Image
          src={imageSrc}
          layout="fill"
          blurDataURL={blurDataURL}
          placeholder="blur"
          className="rounded-t-lg object-cover md:rounded-lg "
        ></Image>
      </div>
      <div className="flex flex-col gap-2 p-4 text-darkpurple md:h-64 md:gap-3  md:p-2">
        <h3 className="text-xl font-medium md:text-3xl md:font-medium ">
          {title}
        </h3>
        <div className="flex gap-2 p-2">
          {badges.map((badge, index) => {
            return <Badge key={index} text={badge}></Badge>;
          })}
        </div>

        <p className="md:text-normal text-justify font-normal">{description}</p>
        <div className="md flex flex-col gap-2 pt-2 md:pt-4">
          <Link href={linkDemo}>
            <a className=" flex cursor-pointer items-center gap-2 font-normal ">
              <AiOutlineLink size={20}></AiOutlineLink> <p> View demo</p>
            </a>
          </Link>

          {linkRepo && (
            <Link href={linkRepo}>
              <a className=" flex cursor-pointer items-center gap-2 font-normal ">
                <AiOutlineGithub size={20}></AiOutlineGithub> <p>View repo</p>
              </a>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
