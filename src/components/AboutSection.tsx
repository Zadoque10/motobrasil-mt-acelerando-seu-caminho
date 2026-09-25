import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { SITE, yearsInBusiness } from "@/lib/site";

export function AboutSection() {
  const facts = [
    { value: String(SITE.foundedYear), label: "Ano de fundação" },
    { value: `${yearsInBusiness()}+`, label: "Anos de estrada" },
    { value: "Multi", label: "Marcas atendidas" },
    { value: "3 em 1", label: "Oficina, peças e aluguel" },
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-dark scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Quem somos</span>
            <h2 className="heading-lg text-foreground mb-6">
              Uma loja de bairro <span className="text-gradient">que virou referência</span>
            </h2>
            <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
              <p>
                A Moto Brasil abriu as portas em {SITE.foundedYear} na Av. General Mello, no Dom Aquino, e
                desde então cuida das motos de quem trabalha, estuda e se vira em Cuiabá.
              </p>
              <p>
                Começamos com peças e acessórios, crescemos com a oficina multimarcas e hoje também alugamos
                motos. O jeito de trabalhar continua o mesmo: atendimento olho no olho, orçamento claro e
                serviço bem feito.
              </p>
            </div>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              <Instagram className="w-5 h-5" /> Acompanhe no Instagram {SITE.instagramHandle}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((f) => (
              <div key={f.label} className="bg-gradient-card border border-border/60 rounded-2xl p-6 md:p-8">
                <p className="font-display text-5xl md:text-6xl text-gradient leading-none mb-2">{f.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{f.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
