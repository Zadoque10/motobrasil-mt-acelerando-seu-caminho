import { Phone } from "lucide-react";
import { telLink, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <>
      {/* Desktop: botão flutuante */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp rounded-full items-center justify-center text-white shadow-xl shadow-black/40 hover:scale-105 transition-transform"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>

      {/* Mobile: barra fixa */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 gap-2 p-3 bg-background/95 backdrop-blur border-t border-border/60">
        <a
          href={telLink}
          className="flex items-center justify-center gap-2 h-12 rounded-md border border-border text-foreground font-bold"
        >
          <Phone className="w-4 h-4" /> Ligar
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 h-12 rounded-md bg-whatsapp text-white font-bold"
        >
          <WhatsAppIcon className="w-5 h-5" /> WhatsApp
        </a>
      </div>
    </>
  );
}
