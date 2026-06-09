import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import forest from "@/assets/forest.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Mystical Alchemy" },
      { name: "description", content: "Preservamos y compartimos conocimientos ancestrales de forma práctica, profunda y accesible para los buscadores modernos." },
      { property: "og:title", content: "Sobre Mystical Alchemy" },
      { property: "og:description", content: "Nuestra misión: preservar la sabiduría ancestral del Norte." },
      { property: "og:url", content: "https://norse-whispers-vault.lovable.app/sobre" },
      { name: "twitter:title", content: "Sobre Mystical Alchemy" },
      { name: "twitter:description", content: "Nuestra misión: preservar la sabiduría ancestral del Norte." },
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
          <p className="font-display text-xs tracking-[0.5em] text-gold mb-6">ᛗ · ᛁ · ᛏ · ᚺ · ᛟ · ᛊ</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight">
            Sobre <span className="italic text-gold">Mystical Alchemy</span>
          </h1>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 max-w-3xl">
        <div className="space-y-8 font-serif text-lg text-foreground/90 leading-relaxed">
          <p>
            <span className="font-display text-2xl text-gold float-left mr-3 leading-none">M</span>
            ystical Alchemy nace con la misión de preservar y compartir conocimientos ancestrales
            de forma práctica, profunda y accesible para los buscadores modernos.
          </p>
          <p>
            Creemos que la sabiduría del Norte no pertenece al pasado: vive en cada runa tallada,
            en cada sueño descifrado, en cada acto consciente de protección energética. Nuestro
            trabajo es traducir ese legado a un lenguaje que el alma contemporánea pueda escuchar.
          </p>
          <p>
            Aquí no encontrarás dogmas ni promesas vacías. Encontrarás herramientas, mapas y
            llaves para abrir las puertas de tu propio poder interior.
          </p>
        </div>

        <div className="divider-rune my-16"><span className="font-display text-2xl">ᛟ</span></div>

        <div className="bg-card/40 border border-border rounded-sm p-8 md:p-12">
          <div className="flex flex-col items-center text-center mb-8">
            <Avatar className="w-24 h-24 mb-6 border-2 border-gold/60">
              <AvatarFallback className="bg-forest text-gold text-3xl font-display">
                MA
              </AvatarFallback>
            </Avatar>
            <h3 className="font-display text-2xl md:text-3xl mb-2">Mara Aelric</h3>
            <p className="font-serif text-sm text-muted-foreground">Fundadora · Guardian del Norte</p>
          </div>

          <div className="space-y-6 font-serif text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
            <p>
              Soy Mara Aelric, y no llegué a las runas por casualidad. Durante años busqué respuestas en lugares equivocados hasta que, en una noche de invierno particularmente larga, un sueño me llevó a las páginas de un grimorio olvidado. Desperté sabiendo que mi camino no era otro que escuchar lo que los antiguos guardianes del Norte habían dejado escrito.
            </p>
            <p>
              Eso fue hace más de doce años. Desde entonces he estudiado con runemasters en Escandinavia, he practicado galdr y he aprendido a leer los símbolos no como letras, sino como puertas. Cada runa es un territorio vivo, y mi trabajo es servir de guía a quienes se atreven a cruzar esos umbrales.
            </p>
            <p>
              Mystical Alchemy nació porque vi demasiados buscadores perdidos en información superficial y promesas vacías. Quería crear un santuario donde el conocimiento ancestral se respetara en su profundidad, pero se ofreciera con la claridad que el mundo moderno necesita. Aquí no vendemos magia: compartimos llaves.
            </p>
            <p>
              Mi compromiso es simple: cada palabra que escribo, cada lectura que ofrezco y cada pieza que bendigo lleva la intención de quien entiende que el verdadero poder no se compra, se despierta. Si estás leyendo esto, quizás las runas ya te han elegido.
            </p>
          </div>
        </div>

        <div className="divider-rune my-16"><span className="font-display text-2xl">ᛗ</span></div>

        <div className="text-center mb-10">
          <p className="font-serif text-muted-foreground max-w-xl mx-auto">
            Estos son los pilares que doce años de camino me han enseñado a defender:
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {[
            { rune: "ᚱ", title: "Raíces", desc: "Honramos la tradición nórdica con rigor y respeto." },
            { rune: "ᚨ", title: "Apertura", desc: "Hacemos accesible lo que durante siglos fue oculto." },
            { rune: "ᛟ", title: "Legado", desc: "Construimos comunidad para que el conocimiento siga vivo." },
          ].map((v) => (
            <div key={v.title}>
              <p className="text-5xl text-gold mb-4 animate-flicker">{v.rune}</p>
              <h3 className="font-display text-xl mb-2">{v.title}</h3>
              <p className="font-serif text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
      <SiteFooter />
    </div>
  );
}
