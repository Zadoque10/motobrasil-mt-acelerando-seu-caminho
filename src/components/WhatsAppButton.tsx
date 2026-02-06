import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565999999999?text=Olá! Gostaria de mais informações sobre os serviços da Motobrasil MT.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow group"
      aria-label="Falar no WhatsApp"
      style={{ boxShadow: "0 0 20px hsla(142, 70%, 45%, 0.4)" }}
    >
      <MessageCircle className="w-7 h-7 text-[hsl(0,0%,100%)] group-hover:scale-110 transition-transform" />
    </a>
  );
}
