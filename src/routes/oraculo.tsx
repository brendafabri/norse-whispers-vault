import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import { RuneParticles } from "@/components/RuneParticles";
import { RUNES, MIRROR_NUMBERS } from "@/data/runes";

export const Route = createFileRoute("/oraculo")({
  head: () => ({
    meta: [
      { title: "Oráculo Diario — Mystical Alchemy" },
      { name: "description", content: "Saca una runa diaria, recibe tu mensaje del día y descubre el significado de los números espejo." },
      { property: "og:title", content: "Oráculo Diario — Mystical Alchemy" },
      { property: "og:description", content: "Tu runa del día y el significado de los números repetidos." },
      { property: "og:url", content: "https://norse-whispers-vault.lovable.app/oraculo" },
      { name: "twitter:title", content: "Oráculo Diario — Mystical Alchemy" },
      { name: "twitter:description", content: "Tu runa del día y el significado de los números repetidos." },
    ],
    links: [{ rel: "canonical", href: "https://norse-whispers-vault.lovable.app/oraculo" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://norse-whispers-vault.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Oráculo", item: "https://norse-whispers-vault.lovable.app/oraculo" },
          ],
        }),
      },
    ],
  }),
  component: Oraculo,
});

function Oraculo() {
  const [rune, setRune] = useState<(typeof RUNES)[number] | null>(null);
  const [number, setNumber] = useState("");

  const drawRune = () => {
    const r = RUNES[Math.floor(Math.random() * RUNES.length)];
    setRune(null);
    setTimeout(() => setRune(r), 200);
  };

  const mirrorMeaning = MIRROR_NUMBERS[number];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative py-24 border-b border-border/60 overflow-hidden">
        <RuneParticles count={20} />
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <p className="font-display text-xs tracking-[0.5em] text-gold mb-6 animate-flicker">ᛟ · ORÁCULO · ᛟ</p>
          <h1 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
            El <span className="italic text-gold">Oráculo Diario</span>
          </h1>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed">
            Las runas hablan a quien sabe escuchar. Cierra los ojos, formula tu pregunta y deja
            que la sabiduría ancestral responda.
          </p>
        </div>
      </section>

      {/* RUNA DEL DÍA */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-card/60 border border-border rounded-sm p-12 text-center">
          <p className="font-display text-xs tracking-[0.4em] text-gold mb-6">TU RUNA DEL DÍA</p>
          <div className="min-h-[280px] flex flex-col items-center justify-center">
            {rune ? (
              <div className="animate-fade-in">
                <div className="text-9xl text-gold mb-6 animate-flicker" style={{ textShadow: "0 0 30px oklch(0.68 0.09 75 / 0.6)" }}>
                  {rune.symbol}
                </div>
                <h2 className="font-display text-3xl text-foreground mb-3">{rune.name}</h2>
                <p className="font-serif italic text-gold mb-6">{rune.meaning}</p>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
                  "{rune.message}"
                </p>
              </div>
            ) : (
              <p className="font-serif text-muted-foreground italic">El oráculo aguarda tu pregunta…</p>
            )}
          </div>
          <button
            onClick={drawRune}
            className="mt-10 bg-gradient-to-r from-[oklch(0.72_0.10_75)] to-[oklch(0.55_0.08_70)] text-primary-foreground font-display tracking-[0.2em] text-sm px-10 py-4 rounded-sm hover:opacity-95 transition animate-glow"
          >
            🔮 SACAR UNA RUNA
          </button>
        </div>
      </section>

      {/* NÚMEROS ESPEJO */}
      <section className="py-24 bg-forest/30 border-y border-border/60">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.4em] text-gold mb-3">NÚMEROS ESPEJO</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">¿Ves siempre los mismos números?</h2>
            <p className="font-serif text-muted-foreground">
              Introduce un número repetido (ej. 11:11) y descubre su significado espiritual.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="11:11"
              className="flex-1 bg-input/60 border border-border focus:border-gold outline-none px-4 py-3 font-serif rounded-sm text-center text-lg"
            />
          </div>
          {mirrorMeaning && (
            <div className="bg-background/60 border border-gold/40 rounded-sm p-8 animate-fade-in">
              <p className="font-display text-2xl text-gold mb-4 text-center">{number}</p>
              <p className="font-serif text-foreground/90 leading-relaxed text-center">{mirrorMeaning}</p>
            </div>
          )}
          <div className="mt-8 text-center">
            <p className="text-xs font-display tracking-widest text-muted-foreground/60 mb-3">PRUEBA CON:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.keys(MIRROR_NUMBERS).map((n) => (
                <button
                  key={n}
                  onClick={() => setNumber(n)}
                  className="px-3 py-1 text-sm font-serif border border-border hover:border-gold hover:text-gold rounded-sm transition"
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENSAJE DEL DÍA */}
      <section className="py-24 container mx-auto px-6 text-center max-w-2xl">
        <div className="divider-rune mb-8"><span className="font-display text-2xl">ᚨ</span></div>
        <h2 className="font-display text-3xl mb-6">Mensaje del Día</h2>
        <blockquote className="font-serif italic text-xl text-foreground/90 leading-relaxed">
          "Quien se atreve a mirar la oscuridad, encuentra en ella las semillas de su propia luz."
        </blockquote>
        <p className="mt-6 font-display text-xs tracking-widest text-gold">— SABIDURÍA DE LAS VÖLVAS</p>
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
