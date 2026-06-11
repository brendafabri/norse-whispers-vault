import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import forest from "@/assets/forest.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Brenda · Mystical Alchemy" },
      { name: "description", content: "Bruja de nacimiento. Lectora de Registros Akáshicos, Reikista, estudiosa de astrología y de las runas nórdicas." },
      { property: "og:title", content: "Sobre Brenda · Mystical Alchemy" },
      { property: "og:description", content: "Bruja de nacimiento. Lectora de Registros Akáshicos, Reikista, estudiosa de astrología y de las runas nórdicas." },
      { property: "og:url", content: "https://norse-whispers-vault.lovable.app/sobre" },
      { name: "twitter:title", content: "Sobre Brenda · Mystical Alchemy" },
      { name: "twitter:description", content: "Bruja de nacimiento. Lectora de Registros Akáshicos, Reikista, estudiosa de astrología y de las runas nórdicas." },
    ],
    links: [{ rel: "canonical", href: "https://norse-whispers-vault.lovable.app/sobre" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://norse-whispers-vault.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Sobre", item: "https://norse-whispers-vault.lovable.app/sobre" },
          ],
        }),
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <img src={forest} alt="Bosque nórdico al anochecer" width={1280} height={960} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center container mx-auto px-6 max-w-3xl animate-fade-in">
          <p className="font-display text-xs tracking-[0.5em] text-gold mb-6">ᛒ · ᚱ · ᛖ · ᚾ · ᛞ · ᚨ</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight">
            Soy <span className="italic text-gold">Brenda</span>
          </h1>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 max-w-3xl">
        <p className="font-serif text-xl text-foreground/90 text-center leading-relaxed mb-16 max-w-2xl mx-auto">
          "Bruja de nacimiento. Lectora de Registros Akáshicos, Reikista, estudiosa de astrología y de las runas nórdicas. Llegué a la magia no como una elección, sino como un regreso."
        </p>

        <div className="space-y-6 font-serif text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
          <p>
            Desde niña supe que percibía el mundo de una forma diferente. Veía cosas que otros no veían, recibía mensajes en sueños que luego se cumplían. Durante años aprendí a escuchar esa voz interior, a confiar en ella, y a usar ese don para acompañar a quienes necesitaban orientación. Siempre terminaba siendo guía, aunque entonces no lo llamara así.
          </p>
        </div>

        <div className="divider-rune my-16"><span className="font-display text-2xl">ᛟ</span></div>

        <div className="space-y-6 font-serif text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
          <p>
            Las runas llegaron a mí hace dos años, de la manera más inesperada: las soñé. Vi sus símbolos con una claridad que no tenía explicación racional. Justo antes de ese viaje, un amigo me regaló un Vegvisir — la brújula vikinga — sin saber nada de lo que estaba por ocurrir. Me dijo: "Lo vi y pensé en ti." Cuando busqué su significado encontré esto: sirve para que quien lo lleva siempre encuentre el camino de vuelta a casa, aunque se pierda entre tormentas. Meses después ese sueño me llevó hasta Croacia. Allí, alguien me entregó un juego de runas y me dijo algo que ya había escuchado mientras dormía: "Nunca fueron mías. Siempre fueron tuyas." En ese momento entendí que no las estaba descubriendo. Las estaba recuperando. El Vegvisir había cumplido su promesa.
          </p>
        </div>

        <div className="divider-rune my-16"><span className="font-display text-2xl">ᛟ</span></div>

        <div className="space-y-6 font-serif text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
          <p>
            Mystical Alchemy nació de ese regreso. De la certeza de que el conocimiento ancestral no es de nadie en particular: es una herramienta que pertenece a quien la necesita. Aquí comparto lo que las runas, los registros akáshicos, el reiki, la astrología y años de práctica y estudio me han enseñado. Si estás aquí, es porque algo en ti también está buscando volver a casa.
          </p>
        </div>

        <div className="divider-rune my-16"><span className="font-display text-2xl">ᛒ</span></div>

        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {[
            { rune: "ᛒ", title: "Presencia", desc: "Acompaño desde la experiencia vivida, no desde la teoría." },
            { rune: "ᚨ", title: "Apertura", desc: "Sigo aprendiendo. El conocimiento no tiene techo ni dogmas." },
            { rune: "ᛟ", title: "Servicio", desc: "Mi propósito es ser guía para quien busca despertar su propio poder." },
          ].map((v) => (
            <div key={v.title}>
              <p className="text-5xl text-gold mb-4 animate-flicker">{v.rune}</p>
              <h3 className="font-display text-xl mb-2">{v.title}</h3>
              <p className="font-serif text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="font-serif italic text-muted-foreground text-base">
            "Bruja de nacimiento. Guía por vocación. Buscadora siempre."
          </p>
        </div>
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
