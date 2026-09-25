import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-white.png";
import { SITE, telLink, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Oficina", href: "#oficina" },
  { label: "Peças", href: "#pecas" },
  { label: "Aluguel", href: "#aluguel" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 w-full bg-gradient-brasil" />

      <div
        className={`transition-all duration-300 border-b ${
          scrolled || isOpen
            ? "bg-background/90 backdrop-blur-lg border-border/60"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
          <a href="#inicio" className="flex items-center" aria-label="Moto Brasil — início">
            <img src={logo} alt="Moto Brasil" className="h-9 md:h-12 w-auto" width={641} height={144} />
          </a>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-secondary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={telLink}
              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-whatsapp text-white text-sm font-bold uppercase tracking-wider hover:brightness-110 transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col px-4 pb-5 gap-1" aria-label="Menu móvel">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-foreground/80 hover:text-secondary py-3 border-b border-border/40 uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <a
                    href={telLink}
                    className="inline-flex items-center justify-center gap-2 h-12 rounded-md border border-border text-sm font-bold"
                  >
                    <Phone className="w-4 h-4" /> Ligar
                  </a>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 rounded-md bg-whatsapp text-white text-sm font-bold"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
