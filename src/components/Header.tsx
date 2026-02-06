import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Aluguel", href: "#aluguel" },
  { label: "Mecânica", href: "#mecanica" },
  { label: "Quem Somos", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/5565999999999?text=Olá! Gostaria de mais informações sobre os serviços da Motobrasil MT.";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="font-display text-2xl md:text-3xl text-primary tracking-wider">MOTO</span>
          <span className="font-display text-2xl md:text-3xl text-foreground tracking-wider">BRASIL MT</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="default" className="gap-2">
              <Phone className="w-4 h-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2">
                <Button variant="hero" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
