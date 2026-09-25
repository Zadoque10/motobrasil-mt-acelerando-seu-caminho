import logo from "@/assets/logo-white.png";
import { SITE, telLink, waLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/60 pb-24 md:pb-0">
      <div className="container mx-auto py-12 px-4 grid gap-10 md:grid-cols-3">
        <div>
          <img src={logo} alt="Moto Brasil" className="h-10 w-auto mb-4" loading="lazy" />
          <p className="text-sm text-muted-foreground max-w-xs">
            Peças, acessórios, oficina multimarcas e aluguel de motos em Cuiabá desde {SITE.foundedYear}.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-display text-xl text-foreground">Contato</p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-secondary">
            WhatsApp {SITE.whatsappDisplay}
          </a>
          <a href={telLink} className="block text-muted-foreground hover:text-secondary">
            Telefone {SITE.phoneDisplay}
          </a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-secondary">
            Instagram {SITE.instagramHandle}
          </a>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-display text-xl text-foreground">Endereço</p>
          <p className="text-muted-foreground">
            {SITE.address.street} — {SITE.address.district}
            <br />
            {SITE.address.city}-{SITE.address.state}, {SITE.address.zip}
          </p>
          {SITE.hours.map((h) => (
            <p key={h.days} className="text-muted-foreground">
              {h.days}: {h.time}
            </p>
          ))}
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="container mx-auto px-4 py-5 text-xs text-muted-foreground text-center">
          © {year} {SITE.fullName}. Cuiabá-MT.
        </p>
      </div>
      <div className="h-1 w-full bg-gradient-brasil" />
    </footer>
  );
}
