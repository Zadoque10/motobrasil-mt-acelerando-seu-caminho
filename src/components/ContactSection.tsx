import { useState } from "react";
import { MapPin, Phone, Clock, Navigation, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { SITE, UNITS, mapsEmbedFor, mapsLinkFor, telLink, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function ContactSection() {
  const [active, setActive] = useState(UNITS[0].id);
  const unit = UNITS.find((u) => u.id === active) ?? UNITS[0];

  return (
    <section id="contato" className="section-padding bg-gradient-dark scroll-mt-20">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Contato</span>
          <h2 className="heading-lg text-foreground">
            Passa aqui ou <span className="text-gradient">chama no Zap</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-whatsapp text-white p-6 hover:brightness-110 transition"
            >
              <WhatsAppIcon className="w-9 h-9 shrink-0" />
              <div>
                <p className="text-sm uppercase tracking-wider opacity-90">WhatsApp</p>
                <p className="font-display text-3xl leading-none">{SITE.whatsappDisplay}</p>
              </div>
            </a>

            <div className="rounded-2xl border border-border/60 bg-gradient-card divide-y divide-border/60">
              <a href={telLink} className="flex gap-4 p-5 hover:bg-foreground/5 transition-colors">
                <Phone className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <p className="text-foreground/70">{SITE.phoneDisplay}</p>
                </div>
              </a>
              <div className="flex gap-4 p-5">
                <Clock className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Horário</p>
                  {SITE.hours.map((h) => (
                    <p key={h.days} className="text-foreground/70">
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-5 hover:bg-foreground/5 transition-colors"
              >
                <Instagram className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Instagram</p>
                  <p className="text-foreground/70">{SITE.instagramHandle}</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-3" role="tablist" aria-label="Nossas lojas">
              {UNITS.map((u) => {
                const selected = u.id === active;
                return (
                  <div
                    key={u.id}
                    className={`rounded-2xl border p-5 transition-colors ${
                      selected ? "border-secondary/70 bg-secondary/5" : "border-border/60 bg-gradient-card"
                    }`}
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(u.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-secondary shrink-0" />
                        <p className="font-semibold text-foreground">{u.name}</p>
                        {u.tag && (
                          <span className="ml-auto text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                            {u.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-foreground/70">
                        {u.street}
                        <br />
                        {u.district}
                        <br />
                        {u.city}-{u.state}, {u.zip}
                      </p>
                    </button>
                    <a
                      href={mapsLinkFor(u)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-secondary mt-3 hover:underline"
                    >
                      <Navigation className="w-3.5 h-3.5" /> Como chegar
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/60 flex-1 min-h-[320px]">
              <iframe
                key={unit.id}
                src={mapsEmbedFor(unit)}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px", filter: "invert(0.9) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa — Moto Brasil ${unit.name}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
