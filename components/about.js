import Section from "./section";

export default function About() {
  return (
    <Section>
      {/* Esase in out effect only to match the same effect in the navbar */}
      <div
        id="about"
        className="flex min-h-screen w-full
         max-w-5xl scroll-mt-14 flex-col items-center justify-center transition-colors   delay-200 duration-500 ease-in lg:bg-white/10"
      >
        <img
          className=" h-44 w-44 rounded-full object-cover  drop-shadow-2xl      "
          src={"/perfil.png"}
        ></img>
        <div className="flex flex-col items-end  p-4 font-monserrat  text-white">
          <h1 className="text-5xl font-thin">Pablo Kraiñuk</h1>
          <p className="text-xl text-gray-400">Trainee full stack developer</p>
        </div>

        <div className="p-6 ">
          <p className="text-justify  text-lg text-white ">
            Hi there!, i like make new things, and know how works others things
            in this world. I am a responsible and a detail oriented person.
            Actually this is my hobbie but i wish that going to be my way of
            life.
          </p>
        </div>
      </div>
    </Section>
  );
}
