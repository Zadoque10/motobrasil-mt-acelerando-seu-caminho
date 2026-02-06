import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Aluguel para Turismo",
    text: "Aluguei uma XRE 300 para uma viagem de turismo e a moto estava impecável. Processo super rápido e atendimento nota 10!",
    stars: 5,
  },
  {
    name: "Fernanda Oliveira",
    role: "Cliente de Mecânica",
    text: "Levei minha moto com um barulho estranho e identificaram o problema na hora. Diagnóstico preciso e preço justo. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Ricardo Mendes",
    role: "Aluguel para Trabalho",
    text: "Uso o aluguel mensal para trabalhar com delivery. Motos sempre revisadas e qualquer problema resolvem rápido. Confiança total!",
    stars: 5,
  },
  {
    name: "Ana Paula Santos",
    role: "Cliente há 8 anos",
    text: "São mais de 8 anos levando minha moto na Motobrasil MT. Equipe sempre honesta e competente. Nunca me decepcionaram.",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            A satisfação dos nossos clientes é a melhor prova do nosso trabalho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card border border-border/50 rounded-xl p-8 relative group hover:border-primary/20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground font-sans mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground font-sans">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
