import { useState } from "react";

export function Newsletter() {
  const [ok, setOk] = useState(false);
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
        {ok ? (
          <p className="text-gold font-display tracking-widest">ᚹ BIENVENIDO ENTRE LOS NUESTROS</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setOk(true); }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              className="flex-1 bg-input/60 border border-border focus:border-gold outline-none px-4 py-3 font-serif rounded-sm"
            />
            <button className="bg-gold text-primary-foreground font-display tracking-widest text-sm px-8 py-3 rounded-sm hover:opacity-90 transition">
              UNIRME
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
