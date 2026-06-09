import { Link } from "@tanstack/react-router";
import { SubscribeForm } from "./SubscribeForm";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background/60">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
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
