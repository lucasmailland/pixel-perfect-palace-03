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
    <article className="shadow-[0px_6px_24px_0px_rgba(100,100,111,0.10)] min-w-60 overflow-hidden flex-1 shrink basis-[0%] rounded-3xl">
      <img
        src={image}
        alt={title}
        className="aspect-[1.79] object-contain w-full"
      />
      <div className="items-stretch shadow-[0px_6px_24px_0px_rgba(100,100,111,0.10)] bg-white flex w-full flex-col overflow-hidden justify-center p-6 max-md:px-5">
        <div className="w-full">
          <h3 className="w-full text-2xl text-[rgba(237,28,36,1)] font-semibold whitespace-nowrap leading-[1.2]">
            {title}
          </h3>
          <p className="text-[#252D35] text-base font-normal leading-6 mt-4">
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
    <section className="flex w-full flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
      <div className="flex min-h-[88px] w-full flex-col items-stretch text-[#252D35] text-center justify-between max-md:max-w-full">
        <h2 className="text-[40px] font-semibold leading-[1.2] max-md:max-w-full">
          Nuestros pilares
        </h2>
        <p className="text-xl font-normal self-center mt-2.5 max-md:max-w-full">
          Para lograr nuestra visión nos guíanos mediante tres pilares
          fundamentales:
        </p>
      </div>
      <div className="flex w-full gap-6 flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        {pillars.map((pillar, index) => (
          <PillarCard key={index} {...pillar} />
        ))}
      </div>
      <p className="text-[#252D35] text-center text-xl font-normal leading-[30px] mt-12 max-md:max-w-full max-md:mt-10">
        Estos pilares se sostienen sobre una base sólida que está conformada por
        nuestros habilitadores, en donde encontramos nuestro Consejo Global de
        Diversidad, Equidad e Inclusión, Comités de DEI locales y Grupos de
        Afinidad. Además de que contamos con una normatividad integrada por
        nuestros procesos, lineamientos y políticas de DEI.
      </p>
    </section>
  );
};
