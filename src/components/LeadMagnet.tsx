import { useState } from "react";
import grimoire from "@/assets/grimoire.jpg";

export function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="grimorio" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
          <img
            src={grimoire}
            alt="Grimorio antiguo de runas nórdicas"
            loading="lazy"
            width={1280}
            height={960}
            className="relative rounded-sm border border-border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
          />
        </div>
        <div>
          <p className="font-display text-xs tracking-[0.4em] text-gold mb-4">GRIMORIO GRATUITO</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            El Grimorio de la <span className="text-gold italic">Luz Interior</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
            Aprende técnicas ancestrales de protección energética, limpieza espiritual y
            fortalecimiento de tu campo áurico. Una guía esencial para todo buscador del Norte.
          </p>
          {submitted ? (
            <div className="border border-gold/40 rounded-sm p-6 animate-fade-in">
              <p className="text-gold font-display text-sm tracking-widest mb-2">ᛟ BIENVENIDO AL CÍRCULO</p>
              <p className="font-serif text-muted-foreground">
                Revisa tu correo. El Grimorio te espera entre las sombras.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-4"
            >
              <input
                type="text"
                required
                placeholder="Tu nombre"
                className="w-full bg-input/60 border border-border focus:border-gold outline-none px-4 py-3 font-serif rounded-sm transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Tu correo"
                className="w-full bg-input/60 border border-border focus:border-gold outline-none px-4 py-3 font-serif rounded-sm transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[oklch(0.72_0.10_75)] to-[oklch(0.55_0.08_70)] text-primary-foreground font-display tracking-[0.2em] text-sm py-4 rounded-sm hover:opacity-95 transition-all animate-glow"
              >
                📜 OBTENER GRIMORIO GRATUITO
              </button>
              <p className="text-xs font-serif text-muted-foreground/70 text-center">
                Sin spam. Solo conocimiento ancestral.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
