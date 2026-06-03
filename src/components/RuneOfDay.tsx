import { Link } from "@tanstack/react-router";
import { getRuneOfTheDay } from "@/data/runes";

export function RuneOfDay() {
  const rune = getRuneOfTheDay();
  const today = new Date();
  // Deterministic ISO date (UTC) — identical SSR and client
  const isoDay = today.toISOString().slice(0, 10);

  return (
    <section aria-labelledby="rune-of-day" className="relative">
      <div className="parchment rounded-sm p-8 sm:p-12 border border-gold/40 shadow-2xl text-center max-w-3xl mx-auto">
        <p className="font-display text-xs tracking-[0.5em] text-gold/80 mb-3">
          RUNA DEL DÍA · <time dateTime={isoDay}>{isoDay}</time>
        </p>
        <h2 id="rune-of-day" className="font-display text-3xl sm:text-4xl text-foreground mb-6">
          La runa que te habla hoy
        </h2>
        <div
          className="text-[8rem] sm:text-[10rem] leading-none text-gold animate-flicker"
          style={{ textShadow: "0 0 40px oklch(0.68 0.09 75 / 0.5)" }}
          aria-hidden="true"
        >
          {rune.symbol}
        </div>
        <h3 className="font-display text-3xl text-foreground mt-4">{rune.name}</h3>
        <p className="font-serif italic text-gold mt-2">{rune.meaning}</p>
        <blockquote className="font-serif text-lg text-foreground/90 leading-relaxed max-w-xl mx-auto mt-6">
          "{rune.message}"
        </blockquote>
        <Link
          to="/runas/$slug"
          params={{ slug: rune.slug }}
          className="inline-block mt-8 border border-gold/60 text-gold font-display tracking-[0.2em] text-sm px-8 py-3 rounded-sm hover:bg-gold/10 transition"
        >
          LEER SIGNIFICADO COMPLETO →
        </Link>
      </div>
    </section>
  );
}
