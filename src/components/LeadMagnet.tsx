import grimoire from "@/assets/grimoire.jpg";
import { SubscribeForm } from "./SubscribeForm";

export function LeadMagnet() {
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
          <SubscribeForm
            source="grimorio"
            placeholder="Tu correo"
            buttonLabel="📜 OBTENER GRIMORIO"
          />
          <p className="text-xs font-serif text-muted-foreground/70 mt-4">
            Sin spam. Solo conocimiento ancestral.
          </p>
        </div>
      </div>
    </section>
  );
}
