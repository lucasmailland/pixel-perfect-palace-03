
import React from "react";

interface PrincipleCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  const bgColors = ["bg-[#FFF6F6]", "bg-[#FFF6F6]", "bg-white", "bg-white", "bg-[#FFF6F6]", "bg-[#FFF6F6]", "bg-white", "bg-white"];
  
  return (
    <article className={`shadow-[0px_6px_24px_0px_rgba(100,100,111,0.10)] ${bgColors[index]} w-full md:flex-1 shrink p-6 rounded-2xl`}>
      <div className="flex items-center">
        <img src={icon} className="aspect-[1] object-contain w-12" alt={title} />
      </div>
      <div className="w-full mt-4 md:mt-6">
        <h3 className="text-[#ED1C24] text-xl leading-tight">
          {title}
        </h3>
        <p className="text-[#252D35] text-base leading-5 mt-3 md:mt-4 font-normal">
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
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0226dfa50a9bf16b512747d9c938f9b055f3f6f5?placeholderIfAbsent=true",
      title: "Aprender haciendo",
      description:
        "Aprendemos rápidamente de nuestros éxitos y fracasos. Reconocemos que la experimentación e iteración constantes son medios para generar ideas nuevas y lograr resultados excepcionales.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d94e8fdb3caf518a677cf4ff4966a51928edc95?placeholderIfAbsent=true",
      title: "Operar con simplicidad",
      description:
        "Nos comprometemos a simplificar nuestras actividades y eliminar trabajo innecesario. Nos enfocamos siempre en lo esencial. La simplicidad es la máxima sofisticación para el trabajo que hacemos cada día y nuestros hábitos de trabajo.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0226dfa50a9bf16b512747d9c938f9b055f3f6f5?placeholderIfAbsent=true",
      title: "Hacer lo correcto",
      description:
        "Operamos dentro del marco legal en todos los aspectos de nuestro negocio y el comportamiento individual, manteniendo altos estándares de ética e integridad. Hacemos lo correcto siempre.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d94e8fdb3caf518a677cf4ff4966a51928edc95?placeholderIfAbsent=true",
      title: "Valorar a nuestra gente",
      description:
        "Tratamos a todos con dignidad y respeto. Valoramos las perspectivas, orígenes y estilos de pensamiento diversos. Fomentamos una cultura inclusiva donde las personas se sientan bienvenidas y se celebre su autenticidad.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0226dfa50a9bf16b512747d9c938f9b055f3f6f5?placeholderIfAbsent=true",
      title: "Actuar como dueños",
      description:
        "Nos hacemos responsables de nuestro desempeño como empresa y de nuestro impacto en el mundo. Tomamos decisiones en beneficio del negocio a largo plazo, asumiendo la responsabilidad del resultado.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d94e8fdb3caf518a677cf4ff4966a51928edc95?placeholderIfAbsent=true",
      title: "Promover una mentalidad de crecimiento",
      description:
        'Nos reta nos a pensar de forma diferente para lograr resultados excepcionales. Nos preguntamos "qué pasaría si..." en vez de "esto no funcionará porque..." y entregamos resultados.',
    },
  ];

  return (
    <section className="flex w-full flex-col items-stretch font-semibold mt-10 md:mt-20 py-6 md:py-10">
      <h2 className="text-[#252D35] text-center text-2xl md:text-[32px] leading-tight">
        Principios KOF
      </h2>
      <div className="w-full mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {principles.map((principle, index) => (
            <PrincipleCard key={index} {...principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

