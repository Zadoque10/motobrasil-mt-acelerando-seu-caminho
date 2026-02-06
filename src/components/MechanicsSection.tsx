import { Settings, Cog, Zap, Gauge, CircleDot, ShieldCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_SERVICO = "https://wa.me/5565999999999?text=Olá! Gostaria de agendar um serviço de mecânica.";

const services = [
  { icon: Settings, label: "Manutenção Preventiva" },
  { icon: Cog, label: "Manutenção Corretiva" },
  { icon: Gauge, label: "Diagnóstico Preciso" },
  { icon: CircleDot, label: "Suspensão e Freios" },
  { icon: Zap, label: "Parte Elétrica" },
  { icon: ShieldCheck, label: "Revisão Completa de Motor" },
];

export function MechanicsSection() {
  return (
    <section id="mecanica" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block font-sans">
            Mecânica Especializada
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Autoridade técnica com{" "}
            <span className="text-gradient">23 anos</span> de experiência
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
            Nossa equipe altamente qualificada utiliza equipamentos de última geração para oferecer 
            diagnóstico preciso e soluções eficientes para sua moto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-12"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gradient-card border border-border/50 rounded-xl p-6 flex flex-col items-center text-center hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-lg md:text-xl text-foreground">{service.label}</h4>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <a href={WHATSAPP_SERVICO} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl" className="gap-2">
              <MessageCircle className="w-5 h-5" />
              Agendar Serviço
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
