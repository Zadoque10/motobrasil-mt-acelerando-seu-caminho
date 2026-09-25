import { Settings, Cog, Zap, Gauge, CircleDot, Link2, Droplets, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const services = [
  { icon: ClipboardCheck, label: "Revisão completa" },
  { icon: Droplets, label: "Troca de óleo e filtros" },
  { icon: CircleDot, label: "Freios" },
  { icon: Gauge, label: "Suspensão" },
  { icon: Link2, label: "Kit relação" },
  { icon: Zap, label: "Parte elétrica" },
  { icon: Cog, label: "Motor" },
  { icon: Settings, label: "Diagnóstico" },
];

const steps = [
  { n: "01", title: "Chama no WhatsApp", text: "Conta o que a moto está fazendo e marca o melhor horário." },
  { n: "02", title: "Avaliação", text: "Olhamos a moto e passamos o orçamento antes de mexer em qualquer coisa." },
  { n: "03", title: "Moto pronta", text: "Serviço feito com peça de qualidade e você avisado quando estiver pronta." },
];

export function MechanicsSection() {
  return (
    <section id="oficina" className="section-padding bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="eyebrow">Oficina multimarcas</span>
            <h2 className="heading-lg text-foreground mb-6">
              Mecânico de confiança, <span className="text-gradient">sem enrolação</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-10">
              Honda, Yamaha, Suzuki, Kawasaki e outras marcas. Da troca de óleo à revisão de motor, a gente
              explica o que precisa ser feito e só faz depois que você aprova.
            </p>

            <ol className="space-y-6 mb-10">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-display text-3xl text-secondary leading-none w-10 shrink-0">{s.n}</span>
                  <div>
                    <h3 className="font-display text-2xl text-foreground leading-tight">{s.title}</h3>
                    <p className="text-foreground/65">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href={waLink("Olá! Gostaria de agendar um serviço na oficina.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-md bg-whatsapp text-white font-bold uppercase tracking-wider hover:brightness-110 transition"
            >
              <WhatsAppIcon /> Agendar serviço
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {services.map((service) => (
              <div
                key={service.label}
                className="bg-gradient-card border border-border/60 rounded-xl p-5 md:p-6 flex items-center gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5 text-primary-light" />
                </div>
                <span className="font-semibold text-foreground text-sm md:text-base">{service.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
