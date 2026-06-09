import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import { POSTS, CATEGORIES } from "@/data/blog";

export const Route = createFileRoute("/biblioteca/")({
  head: () => ({
    meta: [
      { title: "Biblioteca Arcana — Mystical Alchemy" },
      { name: "description", content: "Artículos sobre runas, magia nórdica, sueños, protección energética, brujería, simbolismo y números espejo." },
      { property: "og:title", content: "Biblioteca Arcana — Mystical Alchemy" },
      { property: "og:description", content: "Sabiduría ancestral del Norte en formato digital." },
      { property: "og:url", content: "https://norse-whispers-vault.lovable.app/biblioteca" },
      { name: "twitter:title", content: "Biblioteca Arcana — Mystical Alchemy" },
      { name: "twitter:description", content: "Sabiduría ancestral del Norte en formato digital." },
    ],
    links: [{ rel: "canonical", href: "https://norse-whispers-vault.lovable.app/biblioteca" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://norse-whispers-vault.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Biblioteca", item: "https://norse-whispers-vault.lovable.app/biblioteca" },
          ],
        }),
      },
    ],
  }),
  component: Biblioteca,
});

function Biblioteca() {
  const [cat, setCat] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      if (cat && p.category !== cat) return false;
      if (query && !p.title.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [cat, query]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative py-24 border-b border-border/60 bg-forest/20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="font-display text-xs tracking-[0.5em] text-gold mb-6">ᛒ · ᛁ · ᛒ · ᛚ · ᛁ · ᛟ</p>
          <h1 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
            La <span className="italic text-gold">Biblioteca Arcana</span>
          </h1>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed">
            Manuscritos digitales sobre runas, mitología nórdica, sueños y protección espiritual.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-6">
        <div className="flex flex-col gap-6 mb-12">
          <input
            type="search"
            placeholder="Busca un manuscrito…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-input/60 border border-border focus:border-gold outline-none px-4 py-3 font-serif rounded-sm"
          />
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setCat(null)}
              className={`px-4 py-2 text-xs font-display tracking-widest rounded-sm border transition ${!cat ? "border-gold text-gold bg-gold/10" : "border-border text-muted-foreground hover:text-gold"}`}
            >
              TODOS
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-xs font-display tracking-widest rounded-sm border transition ${cat === c ? "border-gold text-gold bg-gold/10" : "border-border text-muted-foreground hover:text-gold"}`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              to="/biblioteca/$slug"
              params={{ slug: post.slug }}
              className="group block bg-card/60 border border-border hover:border-gold/60 p-8 rounded-sm transition-all"
            >
              <p className="font-display text-xs tracking-[0.3em] text-gold mb-3">{post.category.toUpperCase()}</p>
              <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-gold transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="font-serif text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <p className="text-xs font-display tracking-widest text-muted-foreground/60">
                {post.readTime} · {new Date(post.date).toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center font-serif text-muted-foreground py-24">
            No se encontraron manuscritos. Las sombras guardan silencio.
          </p>
        )}
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
