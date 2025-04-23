
import React from "react";

export const DiversitySection = () => {
  return (
    <section className="flex w-full flex-col md:flex-row items-stretch gap-6 md:gap-10 text-[#252D35] mt-10 md:mt-20 py-6 md:py-10">
      <div className="w-full md:w-[45%] order-2 md:order-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb85edab632e76a3f9d80727008593b16a3df836?placeholderIfAbsent=true"
          alt="Diversity and inclusion"
          className="aspect-[0.97] object-contain w-full rounded-3xl"
        />
      </div>
      <div className="w-full md:w-[55%] order-1 md:order-2">
        <div className="w-full">
          <h2 className="text-2xl md:text-[40px] font-semibold leading-tight md:leading-[48px]">
            Incluir a todos en el crecimiento de la compañía: diversidad,
            equidad e inclusión.
          </h2>
          <div className="text-base font-normal leading-6 mt-4 md:mt-6">
            <p>
              En Coca-Cola FEMSA la diversidad, equidad e inclusión (DEI) son la
              base de la innovación, transversalidad del negocio y el
              crecimiento sostenible; también son pilares de nuestro Marco de
              Sostenibilidad, reflejando su importancia en nuestras operaciones
              y relaciones comunitarias.Buscamos ser el espejo de la diversidad
              de las comunidades en donde operamos, reflejando y respetando la
              riqueza de identidades, perspectivas y talentos que existen en
              cada lugar.
            </p>
            <p className="mt-4 md:mt-6">
              Estamos comprometidos en generar ambientes donde cada individuo se
              sienta valorado e incluido y así aporte sus talentos únicos; sin
              importar su edad, origen étnico o nacional, afiliación política,
              religión, sexo, orientación sexual, identidad o expresión de
              género, estado civil, condición física o de salud, social,
              migratoria o cualquier otra que atente contra la dignidad humana.
            </p>
            <p className="mt-4 md:mt-6">
              Adaptamos nuestras estrategias para responder a las necesidades de
              cada país en el que estamos presentes. Nos empeñamos en atraer,
              desarrollar y retener a una fuerza laboral diversa, que incluya a
              personas indígenas, afrodescendientes, refugiadas, miembros de la
              comunidad LGBTIQ+, adultos mayores, individuos pertenecientes a
              grupos étnicos y aquellos en situación socioeconómica vulnerable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
