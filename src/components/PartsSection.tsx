import { motion } from "framer-motion";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const parts = [
  "Óleo e filtros",
  "Pastilhas e lonas de freio",
  "Kit relação",
  "Pneus e câmaras",
  "Baterias",
  "Velas de ignição",
  "Cabos e manetes",
  "Lâmpadas e piscas",
  "Retrovisores",
  "Capacetes",
  "Baús e bagageiros",
  "Acessórios em geral",
];

export function PartsSection() {
  return (
    <section id="pecas" className="section-padding bg-gradient-dark scroll-mt-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border/60 bg-gradient-to-br from-secondary/10 via-card to-card p-8 md:p-14"
        >
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2">
              <span className="eyebrow">Balcão de peças</span>
              <h2 className="heading-lg text-foreground mb-5">
                Peças e <span className="text-gradient">acessórios</span>
              </h2>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Manda o modelo e o ano da moto no WhatsApp que a gente confere disponibilidade e preço na hora.
              </p>
              <a
                href={waLink("Olá! Gostaria de consultar uma peça. Minha moto é: ")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-md bg-whatsapp text-white font-bold uppercase tracking-wider hover:brightness-110 transition"
              >
                <WhatsAppIcon /> Consultar peça
              </a>
            </div>

            <ul className="lg:col-span-3 flex flex-wrap gap-2.5">
              {parts.map((part) => (
                <li
                  key={part}
                  className="bg-background/60 border border-border/60 rounded-full px-4 py-2.5 text-sm text-foreground"
                >
                  {part}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
