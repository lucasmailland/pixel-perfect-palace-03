import React from "react";

export const DiversitySection = () => {
  return (
    <section className="flex w-full items-stretch gap-10 text-[#252D35] flex-wrap mt-20 py-10 max-md:max-w-full max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb85edab632e76a3f9d80727008593b16a3df836?placeholderIfAbsent=true"
        alt="Diversity and inclusion"
        className="aspect-[0.97] object-contain w-full min-w-60 flex-1 shrink basis-[0%] rounded-3xl max-md:max-w-full"
      />
      <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h2 className="text-[40px] font-semibold leading-[48px] max-md:max-w-full">
            Incluir a todos en el crecimiento de la compañía: diversidad,
            equidad e inclusión.
          </h2>
          <div className="text-base font-normal leading-6 mt-6 max-md:max-w-full">
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
            <p className="mt-6">
              Estamos comprometidos en generar ambientes donde cada individuo se
              sienta valorado e incluido y así aporte sus talentos únicos; sin
              importar su edad, origen étnico o nacional, afiliación política,
              religión, sexo, orientación sexual, identidad o expresión de
              género, estado civil, condición física o de salud, social,
              migratoria o cualquier otra que atente contra la dignidad humana.
            </p>
            <p className="mt-6">
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
