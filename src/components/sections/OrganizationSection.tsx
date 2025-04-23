import React from "react";

export const OrganizationSection = () => {
  return (
    <section className="flex w-full flex-col items-stretch text-[#252D35] text-center mt-20 pt-10 max-md:max-w-full max-md:mt-10">
      <h2 className="text-[32px] font-semibold leading-[38px] max-md:max-w-full">
        Y para hacerlos memorables los
        <br />
        organizamos de la siguiente forma:
      </h2>
      <div className="w-full text-xl mt-20 max-md:max-w-full max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/23564edb8c537a4a63b3a87ee9cb47743c8d9fbf?placeholderIfAbsent=true"
          alt="Organization diagram"
          className="aspect-[2.27] object-contain w-full min-h-[563px] max-md:max-w-full"
        />
        <div className="flex w-full flex-wrap mt-4 max-md:max-w-full">
          <div className="flex min-w-60 flex-col leading-[1.2] w-[411px]">
            <h3 className="font-semibold">Cabeza</h3>
            <p className="font-normal mt-2">¿En qué debemos pensar siempre?</p>
          </div>
          <div className="flex min-w-60 flex-col leading-[1.2] flex-1 shrink basis-[0%] max-md:max-w-full">
            <h3 className="font-semibold max-md:max-w-full">Corazón</h3>
            <p className="font-normal mt-2 max-md:max-w-full">
              ¿Quién está en el corazón de KOF?
            </p>
          </div>
          <div className="flex min-w-60 flex-col flex-1 shrink basis-[0%] max-md:max-w-full">
            <h3 className="font-semibold leading-[1.2] max-md:max-w-full">
              Manos
            </h3>
            <p className="font-normal leading-6 mt-2 max-md:max-w-full">
              Representa con qué y cómo
              <br />
              queremos hacer las cosas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
