import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import grimoire from "@/assets/grimoire.jpg";
import runesImg from "@/assets/runes.jpg";
import forest from "@/assets/forest.jpg";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — Mystical Alchemy" },
      { name: "description", content: "El Lenguaje de los Dioses, lecturas de runas y herramientas místicas forjadas con intención." },
      { property: "og:title", content: "Productos — Mystical Alchemy" },
      { property: "og:description", content: "Ofrendas para el buscador del Norte." },
      { property: "og:url", content: "/productos" },
    ],
    links: [{ rel: "canonical", href: "/productos" }],
  }),
  component: Productos,
});

const items = [
  {
    title: "El Lenguaje de los Dioses",
    desc: "Guía completa sobre runas, significados, bindrunes, rituales y magia nórdica. Más de 280 páginas de conocimiento ancestral.",
    img: grimoire,
    price: "39 €",
    cta: "VER EL LIBRO",
    href: "https://gumroad.com/l/placeholder-libro",
  },
  {
    title: "Lecturas de Runas",
    desc: "Consultas personalizadas escritas a mano. Recibirás una lectura completa con interpretación, runas extraídas y consejo práctico.",
    img: runesImg,
    price: "Desde 45 €",
    cta: "RESERVAR LECTURA",
    href: "https://calendly.com/placeholder",
  },
  {
    title: "Herramientas Místicas",
    desc: "Runas talladas en madera, amuletos forjados y objetos rituales. Cada pieza es única y consagrada con intención.",
    img: forest,
    price: "Desde 28 €",
    cta: "EXPLORAR COLECCIÓN",
    href: "https://gumroad.com/placeholder-tienda",
  },
];

function Productos() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="py-24 border-b border-border/60 bg-forest/20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="font-display text-xs tracking-[0.5em] text-gold mb-6">OFRENDAS</p>
          <h1 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
            Productos <span className="italic text-gold">Místicos</span>
          </h1>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed">
            Herramientas, libros y consultas para el buscador comprometido.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 space-y-24">
        {items.map((p, i) => (
          <article key={p.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
              <img src={p.img} alt={p.title} loading="lazy" className="relative rounded-sm border border-border w-full" />
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.4em] text-gold mb-4">PIEZA {String(i + 1).padStart(2, "0")}</p>
              <h2 className="font-display text-3xl md:text-4xl mb-6">{p.title}</h2>
              <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <p className="font-display text-2xl text-gold mb-8 tracking-wider">{p.price}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[oklch(0.72_0.10_75)] to-[oklch(0.55_0.08_70)] text-primary-foreground font-display tracking-[0.2em] text-sm px-8 py-4 rounded-sm hover:opacity-95 transition"
              >
                {p.cta}
              </a>
            </div>
          </article>
        ))}
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
