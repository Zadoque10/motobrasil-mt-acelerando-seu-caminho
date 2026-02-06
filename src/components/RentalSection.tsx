import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_ALUGUEL = "https://wa.me/5565999999999?text=Olá! Gostaria de alugar uma moto.";

const advantages = [
  "Motos revisadas e em perfeito estado",
  "Planos diários, semanais e mensais",
  "Uso urbano, turismo e trabalho",
  "Documentação completa e seguro",
  "Processo simples e rápido",
  "Suporte durante todo o período",
];

const motos = [
  { name: "Honda CG 160", type: "Urbana / Trabalho", price: "A partir de R$ 80/dia" },
  { name: "Honda Bros 160", type: "Trail / Aventura", price: "A partir de R$ 100/dia" },
  { name: "Yamaha Factor 150", type: "Urbana / Econômica", price: "A partir de R$ 75/dia" },
  { name: "Honda XRE 300", type: "Turismo / Aventura", price: "A partir de R$ 130/dia" },
];

export function RentalSection() {
  return (
    <section id="aluguel" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block font-sans">
              Aluguel de Motos
            </span>
            <h2 className="heading-lg text-foreground mb-6">
              Mobilidade sob <span className="text-gradient">medida</span> para você
            </h2>
            <p className="text-muted-foreground mb-8 font-sans leading-relaxed">
              Precisa de uma moto para trabalho, turismo ou uso diário? Na Motobrasil MT você encontra 
              as melhores opções de aluguel em Cuiabá, com motos revisadas e prontas para rodar.
            </p>

            <ul className="space-y-3 mb-10">
              {advantages.map((adv, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-sans">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{adv}</span>
                </li>
              ))}
            </ul>

            <a href={WHATSAPP_ALUGUEL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Consultar Disponibilidade
              </Button>
            </a>
          </motion.div>

          {/* Right - Motos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {motos.map((moto, i) => (
              <div
                key={i}
                className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="font-display text-primary text-lg">MT</span>
                </div>
                <h4 className="font-display text-xl text-foreground mb-1">{moto.name}</h4>
                <p className="text-xs text-muted-foreground mb-3 font-sans">{moto.type}</p>
                <p className="text-primary font-bold text-sm font-sans">{moto.price}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
