import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import { RUNES } from "@/data/runes";

export const Route = createFileRoute("/runas/$slug")({
  loader: ({ params }) => {
    const rune = RUNES.find((r) => r.slug === params.slug);
    if (!rune) throw notFound();
    return { rune };
  },
  head: ({ loaderData, params }) => {
    const rune = loaderData?.rune;
    const title = rune
      ? `${rune.name} ${rune.symbol} — Significado de la Runa Nórdica | Mystical Alchemy`
      : "Runa";
    const description = rune
      ? `${rune.name}: ${rune.meaning}. Descubre el significado profundo, el mensaje ancestral y el uso espiritual de la runa ${rune.name} del Futhark Antiguo.`
      : "";
    const url = `https://norse-whispers-vault.lovable.app/runas/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: rune ? `${rune.name}, runa ${rune.name}, significado ${rune.name}, ${rune.keywords}, runas nórdicas, Futhark antiguo` : "" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: rune
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: `${rune.name} — Significado de la Runa`,
                description,
                articleSection: "Runas Nórdicas",
                inLanguage: "es",
                author: { "@type": "Organization", name: "Mystical Alchemy" },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Inicio", item: "https://norse-whispers-vault.lovable.app/" },
                  { "@type": "ListItem", position: 2, name: "Runas", item: "https://norse-whispers-vault.lovable.app/runas" },
                  { "@type": "ListItem", position: 3, name: rune.name, item: url },
                ],
              }),
            },
          ]
        : [],
    };
  },
  component: RunePage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-serif text-muted-foreground">Esta runa no figura en el Futhark Antiguo.</p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-serif text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function RunePage() {
  const { rune } = Route.useLoaderData();
  const idx = RUNES.findIndex((r) => r.slug === rune.slug);
  const prev = RUNES[(idx - 1 + RUNES.length) % RUNES.length];
  const next = RUNES[(idx + 1) % RUNES.length];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <article className="py-20 container mx-auto px-6 max-w-3xl">
        <Link to="/runas" className="text-xs font-display tracking-widest text-muted-foreground hover:text-gold">
          ← TODAS LAS RUNAS
        </Link>

        {/* Pergamino */}
        <div className="mt-10 relative parchment rounded-sm p-8 sm:p-14 border border-gold/30 shadow-2xl">
          <div className="text-center">
            <p className="font-display text-xs tracking-[0.5em] text-gold/80 mb-6">FUTHARK ANTIGUO</p>
            <div
              className="text-[10rem] sm:text-[12rem] leading-none text-gold animate-flicker"
              style={{ textShadow: "0 0 40px oklch(0.68 0.09 75 / 0.5)" }}
              aria-hidden="true"
            >
              {rune.symbol}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-foreground mt-4">{rune.name}</h1>
            <p className="font-serif italic text-gold mt-3 text-lg">{rune.meaning}</p>
          </div>

          <div className="divider-rune my-10"><span className="font-display text-xl">ᛟ</span></div>

          <section className="space-y-4 font-serif text-lg text-foreground/90 leading-relaxed">
            <h2 className="font-display text-2xl text-foreground">Significado</h2>
            <p>{rune.description}</p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl text-foreground mb-4">Mensaje inspiracional</h2>
            <blockquote className="font-serif italic text-xl text-foreground/90 border-l-2 border-gold/60 pl-6">
              "{rune.message}"
            </blockquote>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl text-foreground mb-4">Palabras clave</h2>
            <p className="font-serif text-muted-foreground">{rune.keywords}</p>
          </section>
        </div>

        {/* Navegación entre runas */}
        <nav className="flex justify-between mt-12 gap-4">
          <Link to="/runas/$slug" params={{ slug: prev.slug }} className="flex-1 border border-border hover:border-gold/60 p-4 rounded-sm transition group">
            <p className="text-xs font-display tracking-widest text-muted-foreground/60 mb-1">← ANTERIOR</p>
            <p className="font-display text-gold group-hover:text-foreground"><span className="mr-2">{prev.symbol}</span>{prev.name}</p>
          </Link>
          <Link to="/runas/$slug" params={{ slug: next.slug }} className="flex-1 border border-border hover:border-gold/60 p-4 rounded-sm transition group text-right">
            <p className="text-xs font-display tracking-widest text-muted-foreground/60 mb-1">SIGUIENTE →</p>
            <p className="font-display text-gold group-hover:text-foreground">{next.name}<span className="ml-2">{next.symbol}</span></p>
          </Link>
        </nav>
      </article>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
