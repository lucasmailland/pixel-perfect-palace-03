
import React from "react";

interface PillarCardProps {
  image: string;
  title: string;
  description: string;
}

const PillarCard: React.FC<PillarCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <article className="shadow-[0px_6px_24px_0px_rgba(100,100,111,0.10)] w-full md:flex-1 overflow-hidden rounded-3xl">
      <img
        src={image}
        alt={title}
        className="aspect-[1.79] object-contain w-full"
      />
      <div className="shadow-[0px_6px_24px_0px_rgba(100,100,111,0.10)] bg-white flex w-full flex-col overflow-hidden justify-center p-6">
        <div className="w-full">
          <h3 className="w-full text-xl md:text-2xl text-[rgba(237,28,36,1)] font-semibold whitespace-nowrap leading-tight">
            {title}
          </h3>
          <p className="text-[#252D35] text-base font-normal leading-6 mt-3 md:mt-4">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export const PillarsSection = () => {
  const pillars = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4aca590573c66117b3ade92955cd8f8c354bac9c?placeholderIfAbsent=true",
      title: "Diversidad",
      description:
        "Desarrollando un pipeline de talento diverso en todos los niveles de la organización.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f99c0196bb39de9874a3f0bc954e0681fbd8880?placeholderIfAbsent=true",
      title: "Equidad",
      description:
        "Fomentando la equidad de género para asegurar que todos y todas recibían las mismas oportunidades.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9216f5ffb2e3f49a343afec222482356aebd45cf?placeholderIfAbsent=true",
      title: "Inclusión",
      description:
        "promoviendo un sentido de pertenencia mediante entornos de trabajo seguros, abiertos y flexibles.",
    },
  ];

  return (
    <section className="flex w-full flex-col items-stretch mt-10 md:mt-20">
      <div className="flex flex-col w-full items-center text-[#252D35] text-center justify-between">
        <h2 className="text-2xl md:text-[40px] font-semibold leading-tight">
          Nuestros pilares
        </h2>
        <p className="text-lg md:text-xl font-normal mt-2.5">
          Para lograr nuestra visión nos guíanos mediante tres pilares
          fundamentales:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-12">
        {pillars.map((pillar, index) => (
          <PillarCard key={index} {...pillar} />
        ))}
      </div>
      <p className="text-[#252D35] text-center text-lg md:text-xl font-normal leading-normal md:leading-[30px] mt-6 md:mt-12">
        Estos pilares se sostienen sobre una base sólida que está conformada por
        nuestros habilitadores, en donde encontramos nuestro Consejo Global de
        Diversidad, Equidad e Inclusión, Comités de DEI locales y Grupos de
        Afinidad. Además de que contamos con una normatividad integrada por
        nuestros procesos, lineamientos y políticas de DEI.
      </p>
    </section>
  );
};
