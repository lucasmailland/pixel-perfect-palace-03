import React from "react";

export const HeroSection = () => {
  return (
    <section className="w-full px-20 py-10 max-md:max-w-full max-md:px-5">
      <div className="flex w-full gap-10 text-[#252D35] flex-wrap max-md:max-w-full">
        <div className="min-w-60 w-[620px] max-md:max-w-full">
          <h1 className="text-5xl font-semibold leading-[58px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            Evolución Cultural
            <br />y Principios KOF
          </h1>
          <p className="text-base font-normal leading-6 mt-6 max-md:max-w-full">
            En Coca-Cola FEMSA nos hemos embarcado en un apasionante camino
            hacia el crecimiento, en el que cada colaborador juega un papel de
            vital importancia para dar forma a nuestro futuro. En este sentido,
            estamos fortaleciendo nuestra cultura centrada en el cliente y
            reorganizando la forma en que trabajamos para ser una organización a
            la que impulsan cada vez más las ideas ágiles y efectivas.
            <br />
            <br />
            Para estar listos para el futuro, debemos desarrollar nuevas
            habilidades, estar un paso más adelante y pensar y actuar diferente;
            y para esto, hemos evolucionado nuestro ADN a los Principios KOF.
            <br />
            <br />
            Nuestros principios KOF son nuestra brújula que guía la forma en que
            trabajamos juntos día a día, sin importar a que división, región,
            función o nivel organizativo pertenezcamos.
          </p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/774cac951c42948cf89e46235dedf8be4f00b75f?placeholderIfAbsent=true"
          className="aspect-[1.37] object-contain w-full min-w-60 flex-1 shrink basis-[0%] rounded-3xl max-md:max-w-full"
          alt="Cultural Evolution"
        />
      </div>
    </section>
  );
};
