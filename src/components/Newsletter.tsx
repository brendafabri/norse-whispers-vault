import { SubscribeForm } from "./SubscribeForm";

export function Newsletter() {
  return (
    <section className="relative py-24 border-y border-border/60 bg-forest/30">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="divider-rune mb-8">
          <span className="font-display text-2xl">ᛟ</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl mb-4">
          Únete al <span className="text-gold italic">Círculo de los Buscadores</span>
        </h2>
        <p className="font-serif text-muted-foreground mb-8 leading-relaxed">
          Recibe rituales, enseñanzas, significados de runas y contenido exclusivo, directo
          desde la biblioteca arcana.
        </p>
        <SubscribeForm source="newsletter" />
      </div>
    </section>
  );
}
