import { ShieldCheck, Wrench, Package, ChevronDown, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { SITE, waLink, yearsInBusiness } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function HeroSection() {
  const badges = [
    { icon: ShieldCheck, label: `Desde ${SITE.foundedYear} em Cuiabá` },
    { icon: Wrench, label: "Oficina multimarcas" },
    { icon: Package, label: "Peças e acessórios" },
  ];

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center grayscale-[35%]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-6">
            <MapPin className="w-4 h-4" /> {SITE.address.district} · {SITE.address.city}-{SITE.address.state}
          </span>
          <h1 className="heading-xl text-foreground mb-6 leading-[0.95]">
            Sua moto em <span className="text-gradient">boas mãos</span> há {yearsInBusiness()} anos
          </h1>
          <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mb-10">
            Oficina multimarcas, peças e acessórios e aluguel de motos em Cuiabá. Atendimento direto, preço
            justo e gente que entende de moto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href={waLink("Olá! Gostaria de agendar um serviço na oficina.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-md bg-whatsapp text-white font-bold uppercase tracking-wider shadow-lg shadow-black/40 hover:brightness-110 transition"
            >
              <WhatsAppIcon />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center h-14 px-8 rounded-md border-2 border-foreground/25 text-foreground font-bold uppercase tracking-wider hover:border-secondary hover:text-secondary transition"
            >
              Ver serviços
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 bg-card/70 backdrop-blur-sm border border-border/60 rounded-full px-4 py-2"
              >
                <badge.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#servicos"
        aria-label="Rolar para serviços"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-secondary transition-colors z-10"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </a>
    </section>
  );
}
