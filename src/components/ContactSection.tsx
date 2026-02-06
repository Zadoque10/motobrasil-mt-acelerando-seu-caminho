import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5565999999999?text=Olá! Gostaria de mais informações.";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Av. Historiador Rubens de Mendonça", "Cuiabá - MT, 78008-000"],
  },
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    lines: ["(65) 9 9999-9999", "(65) 3333-3333"],
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    lines: ["Seg a Sex: 08h às 18h", "Sábado: 08h às 13h"],
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["contato@motobrasilmt.com.br"],
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            Estamos prontos para atender você. Fale conosco pelo WhatsApp ou visite nossa oficina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">{info.title}</h4>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-sm text-muted-foreground font-sans">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block pt-4">
              <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border/50 h-80 lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.003!2d-56.0974!3d-15.5989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM1JzU2LjAiUyA1NsKwMDUnNTAuNiJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Motobrasil MT"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
