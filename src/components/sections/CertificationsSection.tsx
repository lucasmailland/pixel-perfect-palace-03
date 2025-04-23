import React from "react";

export const CertificationsSection = () => {
  return (
    <section className="flex w-full flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
      <h2 className="text-[#252D35] text-center text-[40px] font-semibold leading-[1.2] max-md:max-w-full">
        Certificaciones
      </h2>
      <div className="flex w-full gap-6 flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        <div className="bg-[rgba(240,240,240,1)] flex min-w-60 flex-col overflow-hidden items-center justify-center flex-1 shrink basis-[0%] px-20 py-[30px] rounded-3xl max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0be1d9c0e7e1fa1f27d1c07d6864944baf38e00d?placeholderIfAbsent=true"
            alt="Certification 1"
            className="aspect-[1] object-contain w-[140px] max-w-full"
          />
        </div>
        <div className="bg-[rgba(240,240,240,1)] flex min-w-60 flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[26px] px-[67px] py-4 rounded-3xl max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d48a82e3b50f8c439a9bb8c53582fa39ae8f7a7?placeholderIfAbsent=true"
            alt="Certification 2"
            className="aspect-[1.65] object-contain w-full"
          />
        </div>
        <div className="bg-[rgba(240,240,240,1)] flex min-w-60 flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] px-20 py-[35px] rounded-3xl max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5d33e8e6556067684a27177f9b653b3688603f8?placeholderIfAbsent=true"
            alt="Certification 3"
            className="aspect-[1.65] object-contain w-[215px]"
          />
        </div>
      </div>
    </section>
  );
};
