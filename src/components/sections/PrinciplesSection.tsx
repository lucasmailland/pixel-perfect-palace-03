import React from "react";

interface PrincipleCardProps {
  icon: string;
  title: string;
  description: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="shadow-[0px_6px_24px_0px_rgba(100,100,111,0.10)] bg-white min-w-60 flex-1 shrink basis-[0%] p-6 rounded-2xl max-md:max-w-full max-md:px-5">
      <img src={icon} className="aspect-[1] object-contain w-12" alt={title} />
      <div className="w-full mt-6 max-md:max-w-full">
        <h3 className="text-[rgba(237,28,36,1)] text-xl leading-[1.2] max-md:max-w-full">
          {title}
        </h3>
        <p className="text-[#252D35] text-base leading-5 mt-4 max-md:max-w-full font-normal">
          {description}
        </p>
      </div>
    </article>
  );
};

export const PrinciplesSection = () => {
  const principles = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0226dfa50a9bf16b512747d9c938f9b055f3f6f5?placeholderIfAbsent=true",
      title: "Poner al cliente primero",
      description:
        "Colocamos a nuestros clientes y consumidores en el centro de nuestras decisiones. Nos esforzamos por ofrecerles una experiencia excepcional y ganarnos su preferencia.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d94e8fdb3caf518a677cf4ff4966a51928edc95?placeholderIfAbsent=true",
      title: "Fomentar la seguridad Psicológica",
      description:
        "Fomentamos entornos en donde nuestra gente se sienta incluida, capaz de expresar su opinión sincera y debatir abiertamente, sin temor a represalias. Ganamos confianza comunicándonos con honestidad y transparencia entre nosotros. Los líderes deben fomentar la retroalimentación bidireccional.",
    },
    // Add all other principles here...
  ];

  return (
    <section className="flex w-full flex-col items-stretch font-semibold mt-20 py-10 max-md:max-w-full max-md:mt-10">
      <h2 className="text-[#252D35] text-center text-[32px] leading-[1.2] max-md:max-w-full">
        Principios KOF
      </h2>
      <div className="w-full mt-6 max-md:max-w-full">
        <div className="flex w-full items-stretch gap-6 flex-wrap max-md:max-w-full">
          {principles.map((principle, index) => (
            <PrincipleCard key={index} {...principle} />
          ))}
        </div>
      </div>
    </section>
  );
};
