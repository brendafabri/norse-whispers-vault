import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import { Testimonials } from "@/components/Testimonials";
import grimoire from "@/assets/grimoire.jpg";
import runesAsset from "@/assets/runes-reading.png.asset.json";
import forest from "@/assets/forest.jpg";

const runesImg = runesAsset.url;

export const Route = createFileRoute("/productos")({
  head: () => {
    const url = "https://norse-whispers-vault.lovable.app/productos";
    const products = [
      { name: "El Lenguaje de los Dioses", description: "Guía completa sobre runas, significados, bindrunes, rituales y magia nórdica.", price: "39.00" },
      { name: "Lecturas de Runas", description: "Consultas personalizadas guiadas por las voces ancestrales del Norte.", price: "45.00" },
      { name: "Herramientas Místicas", description: "Runas talladas, amuletos y objetos rituales forjados con intención.", price: "28.00" },
    ];
    return {
      meta: [
        { title: "Productos — Mystical Alchemy" },
        { name: "description", content: "El Lenguaje de los Dioses, lecturas de runas y herramientas místicas forjadas con intención." },
        { property: "og:title", content: "Productos — Mystical Alchemy" },
        { property: "og:description", content: "Ofrendas para el buscador del Norte." },
        { property: "og:url", content: url },
        { name: "twitter:title", content: "Productos — Mystical Alchemy" },
        { name: "twitter:description", content: "Ofrendas para el buscador del Norte." },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: p.name,
                description: p.description,
                brand: { "@type": "Brand", name: "Mystical Alchemy" },
                offers: {
                  "@type": "Offer",
                  price: p.price,
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://norse-whispers-vault.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Productos", item: url },
            ],
          }),
        },
      ],
    };
  },
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
    urgency: "Más de 200 buscadores ya tienen su copia",
    urgencyBadge: false,
  },
  {
    title: "Lecturas de Runas",
    desc: "Consultas personalizadas escritas a mano. Recibirás una lectura completa con interpretación, runas extraídas y consejo práctico.",
    img: runesImg,
    price: "Desde 45 €",
    cta: "RESERVAR LECTURA",
    href: "https://calendly.com/mystical-alchemy/lectura-de-runas",
    urgency: "Solo 4 plazas disponibles este mes",
    urgencyBadge: true,
  },
  {
    title: "Herramientas Místicas",
    desc: "Runas talladas en madera, amuletos forjados y objetos rituales. Cada pieza es única y consagrada con intención.",
    img: forest,
    price: "Desde 28 €",
    cta: "EXPLORAR COLECCIÓN",
    href: "https://gumroad.com/placeholder-tienda",
    urgency: "Cada pieza es única — sin reposición",
    urgencyBadge: false,
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
              <p className="font-display text-2xl text-gold tracking-wider">{p.price}</p>
              {p.urgency && (
                p.urgencyBadge ? (
                  <span className="inline-block mt-2 mb-8 bg-gold/10 text-gold border border-gold/30 px-3 py-1 rounded-sm text-xs font-display tracking-wider">
                    {p.urgency}
                  </span>
                ) : (
                  <p className="font-serif text-sm text-gold/70 italic mt-2 mb-8">{p.urgency}</p>
                )
              )}
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

      <Testimonials />

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
