import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Elena R.",
    location: "Barcelona, España",
    rating: 5,
    quote:
      "El Lenguaje de los Dioses cambió mi forma de entender las runas. No es un simple manual: es un portal. Desde que trabajo con los bindrunes del libro, siento una protección distinta en mi día a día.",
  },
  {
    name: "Marcos V.",
    location: "Madrid, España",
    rating: 5,
    quote:
      "La lectura que recibí fue como si alguien hubiera encendido una luz en un cuarto oscuro. La precisión con la que interpretaron las runas me dejó sin palabras. Volveré a reservar sin duda.",
  },
  {
    name: "Lucía N.",
    location: "Sevilla, España",
    rating: 5,
    quote:
      "El amuleto que recibí no es solo una pieza tallada: lleva intención, historia y una energía que se siente al tocarlo. Lo llevo colgado desde hace meses y noto la diferencia.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-display text-xs tracking-[0.4em] text-gold mb-3">VOZ DE LA COMUNIDAD</p>
        <h2 className="font-display text-4xl md:text-5xl">Lo que dicen los buscadores</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="bg-card/60 border border-border hover:border-gold/40 transition-all duration-500 rounded-sm p-8 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-serif text-foreground/90 leading-relaxed mb-6 flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="pt-4 border-t border-border/60">
              <p className="font-display text-sm text-foreground tracking-wide">{t.name}</p>
              <p className="font-serif text-xs text-muted-foreground">{t.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
