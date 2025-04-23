
import React from "react";

export const OrganizationSection = () => {
  return (
    <section className="flex w-full flex-col items-stretch text-[#252D35] text-center mt-10 md:mt-20 pt-6 md:pt-10">
      <h2 className="text-2xl md:text-[32px] font-semibold leading-tight md:leading-[38px]">
        Y para hacerlos memorables los
        <br className="hidden md:block" />
        organizamos de la siguiente forma:
      </h2>
      <div className="w-full text-base md:text-xl mt-10 md:mt-20">
        <div className="overflow-x-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23564edb8c537a4a63b3a87ee9cb47743c8d9fbf?placeholderIfAbsent=true"
            alt="Organization diagram"
            className="aspect-[2.27] object-contain w-full min-h-[300px] md:min-h-[563px]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col leading-tight">
            <h3 className="font-semibold">Cabeza</h3>
            <p className="font-normal mt-2">¿En qué debemos pensar siempre?</p>
          </div>
          <div className="flex flex-col leading-tight">
            <h3 className="font-semibold">Corazón</h3>
            <p className="font-normal mt-2">
              ¿Quién está en el corazón de KOF?
            </p>
          </div>
          <div className="flex flex-col leading-tight">
            <h3 className="font-semibold">Manos</h3>
            <p className="font-normal leading-6 mt-2">
              Representa con qué y cómo
              <br className="hidden md:block" />
              queremos hacer las cosas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
