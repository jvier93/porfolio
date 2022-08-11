import Section from "./section";
import SectionTitle from "./sectionTitle";

import ProyectCard from "./proyectCard";

export default function Proyects() {
  return (
    <Section>
      <div
        id="proyects"
        className=" mx-auto flex min-h-screen w-full max-w-5xl scroll-mt-16 flex-col  items-center bg-white/10 p-4 pb-10 "
      >
        <SectionTitle
          title={"My proyects"}
          bg="bg-white"
          textColor={"text-white"}
        ></SectionTitle>
        <div className=" flex  max-w-4xl flex-wrap items-center justify-center gap-4 ">
          <ProyectCard
            imageSrc={"/elMazo.png"}
            title={"elMazo"}
            badges={["React", "Socket io", "Tailwind css"]}
            description={
              "App with some online cards games like 'La Conga' called 'Chinchón' too, and 'el Truco'."
            }
            link={"https://github.com/jvier93/ElMazo.git"}
          ></ProyectCard>
          <ProyectCard
            imageSrc={"/wedding-page.png"}
            title={"Wedding Page"}
            badges={["Html", "Css", "Javascript"]}
            description={"A simple responsive wedding page."}
            link={"https://github.com/jvier93/wedding-page"}
          ></ProyectCard>
          <ProyectCard
            title={"eCommerce-JAP"}
            badges={["Html", "Css", "Javascript"]}
            description={
              "Ecommerce app. Final proyect of course JAP (Jóvenes a programar)."
            }
            link={"https://github.com/jvier93/eCommerce-JAP.git"}
            imageSrc={"/JAP.png"}
          ></ProyectCard>
        </div>
      </div>
    </Section>
  );
}
