import { Award, Users, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Award, value: "23+", label: "Anos de Experiência" },
  { icon: Users, value: "10.000+", label: "Clientes Atendidos" },
  { icon: Target, value: "98%", label: "Satisfação" },
  { icon: TrendingUp, value: "50+", label: "Motos no Acervo" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gradient-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-display text-4xl text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block font-sans">
              Quem Somos
            </span>
            <h2 className="heading-lg text-foreground mb-6">
              Uma história de <span className="text-gradient">confiança</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                A Motobrasil MT nasceu há mais de 23 anos em Cuiabá-MT com um objetivo claro: 
                oferecer serviços mecânicos de excelência e soluções completas de mobilidade sobre duas rodas.
              </p>
              <p>
                Nossa equipe de mecânicos especializados utiliza equipamentos de última geração 
                para diagnóstico preciso, garantindo que cada moto receba o tratamento adequado 
                para rodar com segurança e performance.
              </p>
              <p>
                Ao longo dessas duas décadas, expandimos nosso negócio para incluir aluguel de motos, 
                atendendo desde trabalhadores que precisam de mobilidade diária até turistas que 
                desejam explorar a região.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
