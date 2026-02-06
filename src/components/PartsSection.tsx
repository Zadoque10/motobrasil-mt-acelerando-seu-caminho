import { Package, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_PECAS = "https://wa.me/5565999999999?text=Olá! Gostaria de consultar peças e acessórios.";

const parts = [
  "Filtros de óleo e ar",
  "Pastilhas de freio",
  "Correntes e coroas",
  "Pneus e câmaras",
  "Baterias",
  "Velas de ignição",
  "Cabos e manetes",
  "Capacetes e acessórios",
];

export function PartsSection() {
  return (
    <section id="pecas" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Package className="w-8 h-8 text-primary" />
          </div>
          <h2 className="heading-lg text-foreground mb-4">
            Peças e <span className="text-gradient">Acessórios</span>
          </h2>
          <p className="text-muted-foreground mb-10 font-sans">
            Trabalhamos com peças essenciais e acessórios de qualidade para manter sua moto em perfeito funcionamento. 
            Consulte disponibilidade e valores.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {parts.map((part, i) => (
              <span
                key={i}
                className="bg-card border border-border/50 rounded-full px-5 py-2.5 text-sm text-foreground font-sans hover:border-primary/30 transition-colors"
              >
                {part}
              </span>
            ))}
          </div>

          <a href={WHATSAPP_PECAS} target="_blank" rel="noopener noreferrer">
            <Button variant="heroOutline" size="xl" className="gap-2">
              <MessageCircle className="w-5 h-5" />
              Consultar Peças
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
