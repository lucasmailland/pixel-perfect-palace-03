
import React from "react";

export const CertificationsSection = () => {
  return (
    <section className="flex w-full flex-col items-stretch mt-10 md:mt-20">
      <h2 className="text-[#252D35] text-center text-2xl md:text-[40px] font-semibold leading-tight">
        Certificaciones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-12">
        <div className="bg-[rgba(240,240,240,1)] flex flex-col items-center justify-center p-8 md:px-20 md:py-[30px] rounded-3xl">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0be1d9c0e7e1fa1f27d1c07d6864944baf38e00d?placeholderIfAbsent=true"
            alt="Certification 1"
            className="aspect-[1] object-contain w-[100px] md:w-[140px] max-w-full"
          />
        </div>
        <div className="bg-[rgba(240,240,240,1)] flex flex-col items-center justify-center p-8 md:px-[67px] md:py-4 rounded-3xl">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d48a82e3b50f8c439a9bb8c53582fa39ae8f7a7?placeholderIfAbsent=true"
            alt="Certification 2"
            className="aspect-[1.65] object-contain w-full md:max-w-[215px]"
          />
        </div>
        <div className="bg-[rgba(240,240,240,1)] flex flex-col items-center justify-center p-8 md:px-20 md:py-[35px] rounded-3xl">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5d33e8e6556067684a27177f9b653b3688603f8?placeholderIfAbsent=true"
            alt="Certification 3"
            className="aspect-[1.65] object-contain w-full md:w-[215px]"
          />
        </div>
      </div>
    </section>
  );
};
