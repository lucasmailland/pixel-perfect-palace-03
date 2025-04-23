
import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { X, Menu } from "lucide-react";

export const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Navigation = () => (
    <nav className="flex items-center gap-8">
      <a href="#" className="flex flex-col items-center gap-1 text-[#222222]">
        <div className="w-6 h-6 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('path-to-home-icon')" }} />
        <span className="text-sm">Muro</span>
      </a>
      <a href="#" className="flex flex-col items-center gap-1 text-[#222222]">
        <div className="w-6 h-6 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('path-to-cartelera-icon')" }} />
        <span className="text-sm">Cartelera</span>
      </a>
      <a href="#" className="flex flex-col items-center gap-1 text-[#222222]">
        <div className="w-6 h-6 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('path-to-agenda-icon')" }} />
        <span className="text-sm">Agenda</span>
      </a>
      <a href="#" className="flex flex-col items-center gap-1 text-[#222222]">
        <div className="w-6 h-6 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('path-to-documentos-icon')" }} />
        <span className="text-sm">Documentos</span>
      </a>
      <a href="#" className="flex flex-col items-center gap-1 text-[#222222]">
        <div className="w-6 h-6 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('path-to-mensajes-icon')" }} />
        <span className="text-sm">Mensajes</span>
      </a>
      <a href="#" className="flex flex-col items-center gap-1 text-[#ED1C24]">
        <div className="w-6 h-6 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('path-to-cultura-icon')" }} />
        <span className="text-sm">Cultura</span>
      </a>
    </nav>
  );

  const MobileMenu = () => (
    <div className={`${mobileMenuOpen ? 'block' : 'hidden'} fixed inset-0 bg-white z-50`}>
      <div className="p-4 flex justify-between items-center border-b">
        <img src="/path-to-logo" alt="FEMSA" className="h-8" />
        <button onClick={() => setMobileMenuOpen(false)} className="p-2">
          <X className="w-6 h-6 text-[#ED1C24]" />
        </button>
      </div>
      
      <div className="p-4">
        <h2 className="text-sm font-medium mb-4">NÓMINA</h2>
        <div className="space-y-4">
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-[#FFF5F5]">
            <div className="w-6 h-6 bg-[#ED1C24]/10 rounded-lg" />
            <span>Aviso afiliatorio IMSS</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-[#FFF5F5]">
            <div className="w-6 h-6 bg-[#ED1C24]/10 rounded-lg" />
            <span className="text-[#ED1C24]">Movimientos afiliatorios IMSS</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-[#FFF5F5]">
            <div className="w-6 h-6 bg-[#ED1C24]/10 rounded-lg" />
            <span>Informe de rendimientos</span>
          </a>
        </div>

        <h2 className="text-sm font-medium mt-6 mb-4">SOLICITUD Y BENEFICIOS</h2>
        <div className="space-y-4">
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-[#FFF5F5]">
            <div className="w-6 h-6 bg-[#ED1C24]/10 rounded-lg" />
            <span>Cambio % Caja de Ahorro SFSF</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-[#FFF5F5]">
            <div className="w-6 h-6 bg-[#ED1C24]/10 rounded-lg" />
            <span>Cambio % Plan Cultivemos SFSF</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-[#FFF5F5]">
            <div className="w-6 h-6 bg-[#ED1C24]/10 rounded-lg" />
            <span>Plan Cultivemos Edo. Cuenta</span>
          </a>
        </div>

        <h2 className="text-sm font-medium mt-6 mb-4">CARTAS RR.HH.</h2>
        <div className="space-y-4">
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-[#FFF5F5]">
            <div className="w-6 h-6 bg-[#ED1C24]/10 rounded-lg" />
            <span>Certificado laboral</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-[#FFF5F5]">
            <div className="w-6 h-6 bg-[#ED1C24]/10 rounded-lg" />
            <span>Carta Guardería</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-[#FFF5F5]">
            <div className="w-6 h-6 bg-[#ED1C24]/10 rounded-lg" />
            <span>Carta IMSS</span>
          </a>
        </div>

        <div className="mt-8 space-y-4">
          <a href="#" className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">↗</span>
            </div>
            <span>Whatsapp</span>
          </a>
          <a href="#" className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#ED1C24] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">✉</span>
            </div>
            <span>Email</span>
          </a>
          <a href="#" className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#ED1C24] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">📞</span>
            </div>
            <span>Llamada</span>
          </a>
          <button className="w-full bg-[#ED1C24] text-white rounded-lg py-3 mt-4">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src="/path-to-logo" alt="FEMSA" className="h-8" />
          
          {/* Make sure the Navigation component is visible on desktop */}
          {!isMobile && <div className="block"><Navigation /></div>}
          
          <div className="flex items-center gap-4">
            <select className="bg-transparent">
              <option>ES</option>
              <option>EN</option>
            </select>
            <div className="w-10 h-10 bg-[#F8F8F8] rounded-full" />
            <div className="w-10 h-10 bg-[#F8F8F8] rounded-full" />
            <img src="/path-to-avatar" alt="Profile" className="w-10 h-10 rounded-full" />
            {isMobile && (
              <button onClick={() => setMobileMenuOpen(true)} className="ml-4">
                <div className="w-10 h-10 bg-[#ED1C24] rounded-full flex items-center justify-center">
                  <Menu className="w-6 h-6 text-white" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
      {isMobile && <MobileMenu />}
    </header>
  );
};
