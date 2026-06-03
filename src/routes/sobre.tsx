import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import forest from "@/assets/forest.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Mystical Alchemy" },
      { name: "description", content: "Preservamos y compartimos conocimientos ancestrales de forma práctica, profunda y accesible para los buscadores modernos." },
      { property: "og:title", content: "Sobre Mystical Alchemy" },
      { property: "og:description", content: "Nuestra misión: preservar la sabiduría ancestral del Norte." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
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
