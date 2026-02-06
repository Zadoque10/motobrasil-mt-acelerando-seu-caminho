import { Bike, Wrench, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bike,
    title: "Aluguel de Motos",
    description:
      "Motos revisadas e prontas para uso urbano, turismo e trabalho. Planos diários, semanais e mensais com as melhores condições de Cuiabá.",
    href: "#aluguel",
    featured: true,
  },
  {
    icon: Wrench,
    title: "Mecânica Especializada",
    description:
      "Manutenção preventiva e corretiva com diagnóstico preciso. Suspensão, freios, elétrica, motor e revisões completas.",
    href: "#mecanica",
    featured: true,
  },
  {
    icon: ShoppingBag,
    title: "Peças e Acessórios",
    description:
      "Peças essenciais e acessórios de qualidade para sua moto. Consulte disponibilidade e preços sob demanda.",
    href: "#pecas",
    featured: false,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            Soluções completas para quem precisa de mobilidade ou manutenção de qualidade em Cuiabá.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`group bg-gradient-card rounded-xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                service.featured
                  ? "border-primary/30 hover:border-primary/60 hover:glow-green"
                  : "border-border/50 hover:border-border"
              }`}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-md text-foreground mb-3 font-display">{service.title}</h3>
              <p className="text-muted-foreground mb-6 font-sans leading-relaxed text-sm">
                {service.description}
              </p>
              <a href={service.href}>
                <Button variant="ghost" className="text-primary hover:text-primary p-0 gap-2 group/btn">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
