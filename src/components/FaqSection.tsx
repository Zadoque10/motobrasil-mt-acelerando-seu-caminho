import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UNITS } from "@/lib/site";

const faqs = [
  {
    q: "Vocês atendem qualquer marca de moto?",
    a: "Sim. A oficina é multimarcas: Honda, Yamaha, Suzuki, Kawasaki, Shineray, Haojue e outras.",
  },
  {
    q: "Preciso agendar para levar a moto?",
    a: "É melhor. Chama no WhatsApp, conta o que está acontecendo e a gente combina o horário para você não esperar à toa.",
  },
  {
    q: "Vocês passam orçamento antes de fazer o serviço?",
    a: "Sempre. A moto é avaliada, você recebe o orçamento e só depois da sua aprovação o serviço é feito.",
  },
  {
    q: "Como funciona o aluguel de moto?",
    a: "Temos planos diário, semanal e mensal. Modelos disponíveis, valores e documentos necessários são informados pelo WhatsApp.",
  },
  {
    q: "Onde ficam as lojas?",
    a: `São duas em Cuiabá: a matriz na ${UNITS[0].street}, ${UNITS[0].district}, e a filial nova na ${UNITS[1].street}, ${UNITS[1].district}.`,
  },
];

export function FaqSection() {
  return (
    <section id="duvidas" className="section-padding bg-background scroll-mt-20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="eyebrow">Dúvidas</span>
          <h2 className="heading-lg text-foreground">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="bg-gradient-card border border-border/60 rounded-xl px-6"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-sans font-semibold tracking-normal hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-base leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
