import Section from "./section";
import Image from "next/image";

export default function About() {
  return (
    <Section>
      {/* Esase in out effect only to match the same effect in the navbar */}
      <div
        id="about"
        className="flex min-h-screen w-full
        max-w-5xl
          scroll-mt-16 flex-col items-center justify-center transition-colors   duration-500 ease-in lg:bg-white/10"
      >
        <div className=" relative h-44 w-44 overflow-hidden rounded-full">
          <Image
            layout="fill"
            className="rounded-full"
            src={"/perfil.png"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAL4AvgMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAgEABAb/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAQIR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD65lUyiIqNLqNAPQtF0LQo9D0TQ9CjqaqpoMbGNgKi4iLgLhIOEiouLiIuAqKiYqCNaxormsaBWVrKiIqNEo9APQtF0LQotD0TQtIqKm1tqLRW9bEdbKoSLg5VyiFyuDyuCEi4iLgLiomKijWsjQa5zgMytZURFHolHoB6DouhaRoWhaJoOqKjVRa3VRait62VHWygWVeaKUmaqFzS5DmkyqFhIPK4IuLiIuA2NZFA5zmgZNUmiI0PRdC0gLQdm0DY0LYdUuwbqNQeqO1WqO1Gm9bKPrZQw2aXNBmlzVZps0uQ5pcqhskyLJIISLiIqKiopMUDXOcBmVrKiI0LRND0KHYdm2DaLAboN023n3Ubg9UVqt0Wqjcb1UouqlQw2abNefNNmtM0+abIMU2VYpskyLJcqhIuIi4IqKiYqA1znAZNUmiI0LRdC0KHYNm2DaNQG3n3T7efbLcDuh1SbDqo3HdVKPqoimzTYoMmw1GK9GDZBg2WmKbJciyTKsli4OEgi42JioDWscBk1qarKdC0TQtIotvPs+wbRuPPt59vRt5to3AbDo2w6ZbiVZSrIpcmwHJsNRinwbIcGyrFNkuRZJlWSxcHFwRcVERSinMcBk13WWiJ0LRNC0Atg2bYNo1Abefb0befaNwGxaNoViY3EcVGcVIYukybAswuVYpsGyHJsqxS5LkWSZVCRcRFQRcUiVvQX13U9b0C9Ta7rLRlOh6XaPQoth2XQdjUDsGz7BpGoHQ7C6g7DGtRxUjeNkMNVmGyPMLmKlJkuR5LkZJkkHlcVkkVERUBcanregpyet6Beptd1loyyj0qo0KPQdF0HQoth0bQtI0HSLCVNiqnjZG8bICswmYnMXkQmSZRkmRFxcRFxUVFRMbAW5jgU5PW9ArK5lGU1GlVGhR6FouhaFFoWi6HoUdQusFTxUjuNgKkJlEXBFwkRFwRcVExUEVFJjVFOY4GuY4DMrWVETUaXR6FHoeiaHoUWh0mh0VFY2sBzYxUUVFxEXBFxcTFwRUVExUBTWNBznOBrmOB/9k="
          ></Image>
        </div>
        <div className="flex flex-col items-center gap-[5px]  p-4 font-monserrat  text-white">
          <h1 className="text-5xl font-thin">Pablo Kraiñuk</h1>
          <p className="text-xl text-gray-400">Trainee full stack developer</p>
        </div>

        <div className="py-6 px-8 md:px-16 ">
          <p className="text-justify  text-lg text-white  md:text-2xl ">
            Hi there!, i like to make new things, and know how things work in
            this world. I am a responsible and a detail-oriented person.
            Actually this is my hobbie but i want it to be my job.
          </p>
        </div>
      </div>
    </Section>
  );
}
