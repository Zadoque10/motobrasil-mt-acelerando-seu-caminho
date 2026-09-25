import { MapPin, Phone, Clock, Navigation, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { SITE, mapsEmbed, mapsLink, telLink, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function ContactSection() {
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
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-5 hover:bg-foreground/5 transition-colors"
              >
                <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-foreground/70">
                    {SITE.address.street} — {SITE.address.district}
                    <br />
                    {SITE.address.city}-{SITE.address.state}, {SITE.address.zip}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-secondary mt-1">
                    <Navigation className="w-3.5 h-3.5" /> Como chegar
                  </span>
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
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-border/60 min-h-[360px]"
          >
            <iframe
              src={mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px", filter: "invert(0.9) hue-rotate(180deg) saturate(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa — Moto Brasil, Av. General Mello, 180, Cuiabá"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
