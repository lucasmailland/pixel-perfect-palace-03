import React from "react";

export const Header = () => {
  return (
    <header className="shadow-[0px_1px_1px_0px_rgba(0,0,0,0.08)] w-full max-md:max-w-full">
      <div className="bg-black w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="bg-white w-full max-md:max-w-full">
            <div className="bg-[rgba(143,143,143,1)] flex w-full flex-col items-stretch justify-center px-2 py-1 max-md:max-w-full">
              <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
                <nav className="self-stretch flex gap-1 overflow-hidden my-auto">
                  <div className="flex min-h-4 items-center w-4 pb-px px-1">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/896a951e9172c5cf47fa579f9ea07831e25ba17b?placeholderIfAbsent=true"
                      className="aspect-[0.8] object-contain w-2 shadow-[0px_1px_3px_rgba(0,0,0,0.15)] self-stretch my-auto"
                      alt="Finder icon"
                    />
                  </div>
                  <div className="self-stretch min-h-4 text-[8px] text-black font-bold whitespace-nowrap tracking-[0.16px] px-1">
                    Finder
                  </div>
                  <div className="self-stretch min-h-4 text-[8px] text-black font-medium whitespace-nowrap px-1">
                    File
                  </div>
                  <div className="self-stretch min-h-4 text-[8px] text-black font-medium whitespace-nowrap px-1">
                    Edit
                  </div>
                  <div className="self-stretch min-h-4 text-[8px] text-black font-medium whitespace-nowrap px-1">
                    View
                  </div>
                  <div className="self-stretch min-h-4 text-[8px] text-black font-medium whitespace-nowrap px-1">
                    Go
                  </div>
                  <div className="self-stretch min-h-4 text-[8px] text-black font-medium whitespace-nowrap px-1">
                    Window
                  </div>
                  <div className="self-stretch min-h-4 text-[8px] text-black font-medium whitespace-nowrap px-1">
                    Help
                  </div>
                </nav>
                <div className="self-stretch flex items-center gap-[5px] overflow-hidden text-[8px] text-black font-medium justify-center my-auto">
                  <div className="self-stretch min-h-4 text-[11px] font-light whitespace-nowrap text-center leading-none w-4 my-auto pl-[3px] pr-0.5">
                    􀛨
                  </div>
                  <div className="self-stretch min-h-4 whitespace-nowrap w-4 my-auto px-1">
                    􀙇
                  </div>
                  <div className="self-stretch min-h-4 whitespace-nowrap w-4 my-auto px-1">
                    􀊫
                  </div>
                  <div className="self-stretch min-h-4 whitespace-nowrap w-4 my-auto px-1">
                    􀜊
                  </div>
                  <div className="self-stretch flex my-auto">
                    <div className="self-stretch min-h-4">Sab Jun 10</div>
                    <div className="self-stretch min-h-4 px-1">9:41 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between items-center bg-white flex min-h-14 w-full gap-[40px_100px] overflow-hidden flex-wrap px-6 py-[13px] max-md:max-w-full max-md:px-5">
            <div className="self-stretch flex items-center gap-6 my-auto">
              <div className="self-stretch flex items-center gap-2 my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/89c330bd0caafa14d0b0a1714c0e1c9df805616d?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-3 fill-[#ED6A5E] self-stretch shrink-0 my-auto"
                  alt="Close"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a0911746263808a6c4e80e807ff66961461c1f9?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-3 fill-[#F4BF4F] self-stretch shrink-0 my-auto"
                  alt="Minimize"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d142ba0a184838d329d2119409dc92eed3a07b8a?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-3 fill-[#61C554] self-stretch shrink-0 my-auto"
                  alt="Maximize"
                />
              </div>
              <div className="self-stretch flex gap-3 my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e156d01dd255817396282d90282c7f7401845d4?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 shrink-0"
                  alt="Back"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c408ec6d8bf1eebee0838078405b665022cb4223?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 shrink-0"
                  alt="Forward"
                />
              </div>
            </div>
            <div className="items-center bg-[#F1F1F1] self-stretch flex min-w-60 min-h-[30px] gap-2 text-[13px] text-[#151515] font-normal whitespace-nowrap text-center flex-wrap w-[948px] my-auto px-2 py-[7px] rounded-lg max-md:max-w-full">
              <div className="self-stretch flex min-w-60 items-center gap-1 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/79e5a0b4ada977f487871ff7bf94a3897156ff48?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="Site icon"
                />
                <div className="self-stretch my-auto">
                  https://portal.fichap.com/forpeople/feed
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd0b7560999e58b387d8fbfd7bb15ac2c950c2b5?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                alt="Refresh"
              />
            </div>
            <div className="self-stretch flex gap-5 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7b36149188d6828953e302cb24da8253470f47b?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 shrink-0"
                alt="Settings"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec85b1deeddaef24b5b0d9fec91337b995b28f7a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 shrink-0"
                alt="Menu"
              />
            </div>
          </div>
        </div>
      </div>
      <nav className="justify-between items-center bg-white relative flex min-h-24 w-full text-sm font-semibold whitespace-nowrap text-center leading-6 px-20 py-3 max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2265ceccc79d383ee138aefb73ee778a87c44ed?placeholderIfAbsent=true"
          className="aspect-[1.82] object-contain w-[131px] self-stretch z-0 shrink-0 my-auto"
          alt="Logo"
        />
        <div className="self-stretch z-0 flex min-w-60 items-center gap-4 text-[#252D35] justify-center my-auto">
          <button className="self-stretch flex items-center gap-1.5 my-auto p-2">
            <span className="self-stretch my-auto">ES</span>
            <div className="self-stretch flex w-4 shrink-0 h-4 my-auto" />
          </button>
          <button
            className="bg-[#F8F8F8] self-stretch flex w-12 shrink-0 h-12 my-auto rounded-[80px]"
            aria-label="Action"
          />
          <button
            className="bg-[#F8F8F8] self-stretch flex w-12 shrink-0 h-12 my-auto rounded-[80px]"
            aria-label="Notifications"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/866adbce1231c0ee37d83ef5062f6c9e0314e34f?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-[50%]"
            alt="Profile"
          />
        </div>
        <div className="absolute z-0 flex min-w-60 items-center text-[#313A45] flex-wrap -translate-x-2/4 translate-y-[0%] left-2/4 bottom-1.5 max-md:max-w-full">
          <a
            href="#"
            className="self-stretch flex flex-col items-center text-[#252D35] justify-center w-[72px] my-auto p-4"
          >
            <div className="flex min-h-6 w-6" />
            <div className="mt-1">Muro</div>
          </a>
          <a
            href="#"
            className="self-stretch flex flex-col items-center justify-center w-[104px] my-auto p-4"
          >
            <div className="flex min-h-6 w-6" />
            <div className="mt-1">Cartelera</div>
          </a>
          <a
            href="#"
            className="self-stretch flex flex-col items-center justify-center w-[88px] my-auto p-4"
          >
            <div className="flex min-h-6 w-6" />
            <div className="mt-1">Agenda</div>
          </a>
          <a
            href="#"
            className="self-stretch flex flex-col items-center justify-center w-[120px] my-auto p-4"
          >
            <div className="flex min-h-6 w-6" />
            <div className="mt-1">Documentos</div>
          </a>
          <a
            href="#"
            className="self-stretch flex flex-col items-center justify-center w-[104px] my-auto p-4"
          >
            <div className="flex min-h-6 w-6" />
            <div className="mt-1">Mensajes</div>
          </a>
          <a
            href="#"
            className="self-stretch flex flex-col items-center text-[#ED1C24] justify-center w-[72px] my-auto px-[11px] py-4 rounded-lg"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ca42794345cc6eef33a9ec6e05e1955b741802?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6"
              alt="Culture icon"
            />
            <div className="mt-1">Cultura</div>
          </a>
        </div>
      </nav>
    </header>
  );
};
