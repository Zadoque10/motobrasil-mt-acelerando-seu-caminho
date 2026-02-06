export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl text-primary tracking-wider">MOTO</span>
            <span className="font-display text-xl text-foreground tracking-wider">BRASIL MT</span>
          </div>
          <p className="text-sm text-muted-foreground font-sans text-center">
            © {currentYear} Motobrasil MT — Todos os direitos reservados. Cuiabá-MT.
          </p>
          <div className="flex gap-6">
            <a href="#inicio" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-sans">
              Início
            </a>
            <a href="#servicos" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-sans">
              Serviços
            </a>
            <a href="#contato" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-sans">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
