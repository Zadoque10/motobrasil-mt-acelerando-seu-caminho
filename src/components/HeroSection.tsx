import { Button } from "@/components/ui/button";
import { Shield, Clock, Wrench, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_ALUGUEL = "https://wa.me/5565999999999?text=Olá! Gostaria de alugar uma moto.";
const WHATSAPP_SERVICO = "https://wa.me/5565999999999?text=Olá! Gostaria de agendar um serviço de mecânica.";

const badges = [
  { icon: Shield, label: "23 Anos de Experiência" },
  { icon: Wrench, label: "Equipe Especializada" },
  { icon: Clock, label: "Diagnóstico Preciso" },
];

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Motobrasil MT - Oficina e motos"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="heading-xl text-foreground mb-6">
            Aluguel de Motos e{" "}
            <span className="text-gradient">Mecânica Especializada</span>
            {" "}em Cuiabá-MT
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-sans">
            Há 23 anos oferecendo diagnóstico preciso, manutenção de excelência e as melhores motos para aluguel. 
            Sua confiança é nosso compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={WHATSAPP_ALUGUEL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Alugar uma Moto
              </Button>
            </a>
            <a href={WHATSAPP_SERVICO} target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Agendar Serviço
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Authority Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 md:gap-10"
        >
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg px-5 py-3"
            >
              <badge.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#servicos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
