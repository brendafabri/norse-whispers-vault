import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import { RuneOfDay } from "@/components/RuneOfDay";
import { RUNES } from "@/data/runes";

export const Route = createFileRoute("/runas/")({
  head: () => ({
    meta: [
      { title: "Las 24 Runas del Futhark Antiguo — Significado Completo | Mystical Alchemy" },
      { name: "description", content: "Significado completo de las 24 runas del Futhark Antiguo. Descubre cada runa nórdica, su mensaje ancestral y la runa del día." },
      { name: "keywords", content: "runas, significado de runas, runas nórdicas, Futhark antiguo, runa del día, lectura de runas" },
      { property: "og:title", content: "Las 24 Runas del Futhark Antiguo" },
      { property: "og:description", content: "Guía completa de las runas nórdicas y su significado." },
      { property: "og:url", content: "https://norse-whispers-vault.lovable.app/runas" },
      { name: "twitter:title", content: "Las 24 Runas del Futhark Antiguo" },
      { name: "twitter:description", content: "Guía completa de las runas nórdicas y su significado." },
    ],
    links: [{ rel: "canonical", href: "https://norse-whispers-vault.lovable.app/runas" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://norse-whispers-vault.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Runas", item: "https://norse-whispers-vault.lovable.app/runas" },
          ],
        }),
      },
    ],
  }),
  component: RunasIndex,
});

function RunasIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="py-20 container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <p className="font-display text-xs tracking-[0.5em] text-gold mb-4">FUTHARK ANTIGUO</p>
          <h1 className="font-display text-4xl md:text-6xl mb-6">Las <span className="italic text-gold">24 Runas</span></h1>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada runa es una puerta. Descubre su símbolo, significado y mensaje ancestral.
          </p>
        </div>

        <RuneOfDay />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {RUNES.map((r) => (
            <Link
              key={r.slug}
              to="/runas/$slug"
              params={{ slug: r.slug }}
              className="group bg-card/60 border border-border hover:border-gold/60 p-6 rounded-sm text-center transition-all"
            >
              <div className="text-5xl text-gold mb-3 group-hover:animate-flicker">{r.symbol}</div>
              <p className="font-display text-foreground group-hover:text-gold">{r.name}</p>
              <p className="font-serif text-xs text-muted-foreground mt-2 leading-relaxed">{r.meaning}</p>
            </Link>
          ))}
        </div>
      </section>
      <Newsletter />
      <SiteFooter />
    </div>
  );
}
