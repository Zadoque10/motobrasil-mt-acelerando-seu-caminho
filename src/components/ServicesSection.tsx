import { Bike, Wrench, Package, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Wrench,
    title: "Oficina Multimarcas",
    description:
      "Revisão, manutenção preventiva e corretiva para motos de todas as marcas. Motor, freios, suspensão, elétrica e transmissão.",
    href: "#oficina",
    accent: "from-primary/25",
  },
  {
    icon: Package,
    title: "Peças e Acessórios",
    description:
      "Balcão com peças de reposição e acessórios para o dia a dia. Não achou? A gente procura e encomenda pra você.",
    href: "#pecas",
    accent: "from-secondary/25",
  },
  {
    icon: Bike,
    title: "Aluguel de Motos",
    description:
      "Motos revisadas para trabalho, entregas ou uso do dia a dia, com planos que cabem na sua rotina.",
    href: "#aluguel",
    accent: "from-accent/30",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-gradient-dark scroll-mt-20">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">O que fazemos</span>
          <h2 className="heading-lg text-foreground">
            Tudo para sua moto <span className="text-gradient">num lugar só</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl p-8 border border-border/60 bg-gradient-to-br ${service.accent} to-card hover:border-foreground/30 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="w-14 h-14 rounded-xl bg-background/60 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="heading-md text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
                Saiba mais
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
