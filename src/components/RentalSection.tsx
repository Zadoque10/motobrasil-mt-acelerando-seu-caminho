import { Check, CalendarDays, CalendarRange, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const advantages = [
  "Motos revisadas pela nossa própria oficina",
  "Ideal para trabalho, entregas e dia a dia",
  "Manutenção em dia durante a locação",
  "Processo simples, direto com a loja",
];

const plans = [
  { icon: CalendarDays, name: "Diário", text: "Para um compromisso ou uma emergência." },
  { icon: CalendarRange, name: "Semanal", text: "Enquanto sua moto está na oficina." },
  { icon: Calendar, name: "Mensal", text: "Para quem trabalha rodando todo dia." },
];

export function RentalSection() {
  return (
    <section id="aluguel" className="section-padding bg-background scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Aluguel de motos</span>
            <h2 className="heading-lg text-foreground mb-6">
              Precisa de moto? <span className="text-gradient">A gente aluga.</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              Motos prontas pra rodar, cuidadas pela mesma equipe que faz a manutenção. Consulte modelos
              disponíveis e valores pelo WhatsApp.
            </p>

            <ul className="space-y-3 mb-10">
              {advantages.map((adv) => (
                <li key={adv} className="flex items-center gap-3 text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary-light" />
                  </span>
                  {adv}
                </li>
              ))}
            </ul>

            <a
              href={waLink("Olá! Gostaria de saber sobre aluguel de moto: modelos e valores.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-md bg-whatsapp text-white font-bold uppercase tracking-wider hover:brightness-110 transition"
            >
              <WhatsAppIcon /> Consultar disponibilidade
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-4"
          >
            {plans.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-5 bg-gradient-card border border-border/60 rounded-2xl p-6 hover:border-secondary/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-3xl text-foreground leading-none mb-1">Plano {p.name}</h3>
                  <p className="text-foreground/65">{p.text}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground px-1">
              Valores e documentação necessária sob consulta.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
