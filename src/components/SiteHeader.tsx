import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/biblioteca", label: "Biblioteca Arcana" },
  { to: "/runas", label: "Runas" },
  { to: "/productos", label: "Productos" },
  { to: "/oraculo", label: "Oráculo" },
  { to: "/carta-astral", label: "Carta Astral" },
  { to: "/sobre", label: "Sobre" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-gold text-2xl animate-flicker">ᛗ</span>
          <span className="font-display tracking-[0.2em] text-sm sm:text-base text-foreground group-hover:text-gold transition-colors">
            MYSTICAL · ALCHEMY
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm tracking-wide font-serif text-muted-foreground hover:text-gold transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-serif text-base text-muted-foreground hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
