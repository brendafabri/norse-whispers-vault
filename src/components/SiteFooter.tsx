import { Link } from "@tanstack/react-router";
import { SubscribeForm } from "./SubscribeForm";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.1 0 .19 0 .29.01V9.13a6.37 6.37 0 0 0-.29-.01A6.34 6.34 0 0 0 3 15.47 6.34 6.34 0 0 0 9.34 21.8a6.34 6.34 0 0 0 6.34-6.34V8.23a8.15 8.15 0 0 0 4.91 1.66V6.69h-.01z" />
    </svg>
  );
}

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 4.95 3.01 9.19 7.28 11.03-.1-.9-.19-2.28.04-3.27.21-.84 1.35-5.38 1.35-5.38s-.34-.69-.34-1.61c0-1.51.87-2.63 1.96-2.63.92 0 1.37.69 1.37 1.52 0 .93-.59 2.32-.9 3.61-.26 1.08.54 1.96 1.61 1.96 1.93 0 3.42-2.04 3.42-4.97 0-2.6-1.87-4.42-4.54-4.42-3.09 0-4.9 2.32-4.9 4.7 0 .93.36 1.93.81 2.47.09.11.1.2.08.31l-.3 1.23c-.05.2-.16.24-.36.15-1.36-.63-2.2-2.62-2.2-4.19 0-3.43 2.49-6.57 7.17-6.57 3.77 0 6.7 2.68 6.7 6.27 0 3.75-2.36 6.76-5.63 6.76-1.1 0-2.14-.57-2.49-1.25l-.68 2.58c-.25.94-.91 2.13-1.35 2.85C9.56 23.8 10.64 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background/60">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gold text-3xl">ᛗ</span>
            <span className="font-display tracking-[0.25em] text-foreground">MYSTICAL · ALCHEMY</span>
          </div>
          <p className="font-serif text-muted-foreground max-w-md leading-relaxed">
            Conservando el conocimiento ancestral del Norte. Runas, magia nórdica y sabiduría olvidada
            para los buscadores modernos.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-gold mb-4">EXPLORAR</h4>
          <ul className="space-y-2 font-serif text-muted-foreground">
            <li><Link to="/biblioteca" className="hover:text-gold">Biblioteca Arcana</Link></li>
            <li><Link to="/productos" className="hover:text-gold">Productos</Link></li>
            <li><Link to="/oraculo" className="hover:text-gold">Oráculo Diario</Link></li>
            <li><Link to="/sobre" className="hover:text-gold">Sobre</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-gold mb-4">REDES</h4>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-sm border border-border/60 text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="TikTok" className="p-2 rounded-sm border border-border/60 text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors">
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Pinterest" className="p-2 rounded-sm border border-border/60 text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors">
              <PinterestIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-gold mb-4">CÍRCULO</h4>
          <p className="font-serif text-sm text-muted-foreground mb-4">
            Únete a los buscadores y recibe sabiduría ancestral en tu bandeja de entrada.
          </p>
          <SubscribeForm source="footer" />
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center font-serif text-xs text-muted-foreground tracking-wide space-y-2">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/privacidad" className="hover:text-gold">Política de Privacidad</Link>
          <span aria-hidden>·</span>
          <Link to="/legal" className="hover:text-gold">Aviso Legal</Link>
        </div>
        <div>© {new Date().getFullYear()} Mystical Alchemy · Forjado en las sombras del Norte</div>
      </div>
    </footer>
  );
}
