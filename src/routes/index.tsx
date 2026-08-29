import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Newsletter } from "@/components/Newsletter";
import { RuneParticles } from "@/components/RuneParticles";
import { RuneOfDay } from "@/components/RuneOfDay";
import { Testimonials } from "@/components/Testimonials";
import { POSTS } from "@/data/blog";
import heroLibrary from "@/assets/hero-library.jpg";
import runesLecturasAsset from "@/assets/runes-lecturas.png.asset.json";
import herramientasAsset from "@/assets/herramientas-misticas.png.asset.json";
import grimoire from "@/assets/grimoire.jpg";
import grimorioRaizAsset from "@/assets/grimorio-raiz.jpg.asset.json";
import cuarzosAsset from "@/assets/cuarzos-esenciales.jpg.asset.json";


const runesImg = runesLecturasAsset.url;
const forest = herramientasAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mystical Alchemy — Magia Nórdica, Runas y Sabiduría Ancestral" },
      { name: "description", content: "Descubre los secretos del conocimiento ancestral: runas, magia nórdica, protección energética e interpretación de sueños." },
      { name: "keywords", content: "significado de runas, lectura de runas, runas nórdicas, magia nórdica, protección energética, interpretación de sueños, bindrunes, Odín y las runas, números espejo" },
      { property: "og:title", content: "Mystical Alchemy — Sabiduría Ancestral del Norte" },
      { property: "og:description", content: "Biblioteca arcana de magia nórdica para buscadores modernos." },
      { property: "og:url", content: "https://norse-whispers-vault.lovable.app/" },
      { name: "twitter:title", content: "Mystical Alchemy — Sabiduría Ancestral del Norte" },
      { name: "twitter:description", content: "Biblioteca arcana de magia nórdica para buscadores modernos." },
    ],
    links: [{ rel: "canonical", href: "https://norse-whispers-vault.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://norse-whispers-vault.lovable.app/" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const products = [
  {
    title: "El Lenguaje de los Dioses",
    desc: "Guía completa sobre runas, significados, bindrunes, rituales y magia nórdica.",
    img: grimoire,
    price: "39 €",
  },
  {
    title: "Lecturas de Runas",
    desc: "Consultas personalizadas guiadas por las voces ancestrales del Norte.",
    img: runesImg,
    price: "Desde 45 €",
  },
  {
    title: "Herramientas Místicas",
    desc: "Runas talladas, amuletos y objetos rituales forjados con intención.",
    img: forest,
    price: "Desde 28 €",
  },
];

function Home() {
  const latestPosts = POSTS.slice(0, 3);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] flex items-center justify-center overflow-hidden">
        <img
          src={heroLibrary}
          alt="Biblioteca ancestral iluminada por velas con runas nórdicas"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_20%,oklch(0.08_0_0/0.9)_90%)]" />
        <RuneParticles count={14} />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in">
          <p className="font-display text-xs sm:text-sm tracking-[0.5em] text-gold mb-6 animate-flicker">
            ᚱ · ᚢ · ᚾ · ᚨ · ᛁ · ᛏ
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-foreground leading-tight mb-6">
            Descubre los Secretos del{" "}
            <span className="italic text-gold">Conocimiento Ancestral</span>
          </h1>
          <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Runas, magia nórdica, protección energética y sabiduría olvidada para quienes
            buscan despertar su poder interior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#grimorio"
              className="bg-gradient-to-r from-[oklch(0.72_0.10_75)] to-[oklch(0.55_0.08_70)] text-primary-foreground font-display tracking-[0.2em] text-sm px-8 py-4 rounded-sm hover:opacity-95 transition animate-glow"
            >
              📜 DESCARGAR GRIMORIO GRATUITO
            </a>
            <Link
              to="/biblioteca"
              className="border border-gold/60 text-gold font-display tracking-[0.2em] text-sm px-8 py-4 rounded-sm hover:bg-gold/10 transition"
            >
              EXPLORAR LA BIBLIOTECA ARCANA
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 font-display text-xs tracking-widest animate-flicker">
          ↓ DESCIENDE
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 container mx-auto px-6 text-center max-w-3xl">
        <div className="divider-rune mb-8"><span className="font-display text-2xl">ᚨ</span></div>
        <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
          Has encontrado la <span className="italic text-gold">biblioteca secreta</span>
        </h2>
        <p className="font-serif text-lg text-muted-foreground leading-relaxed">
          Donde se conserva el conocimiento ancestral del Norte. Aquí las runas hablan,
          los sueños se descifran y las sombras se vuelven aliadas. Bienvenido, buscador.
        </p>
      </section>

      {/* RUNA DEL DÍA */}
      <section className="py-24 container mx-auto px-6">
        <RuneOfDay />
      </section>

      <LeadMagnet />

      {/* PRODUCTOS */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-gold mb-3">OFRENDAS</p>
          <h2 className="font-display text-4xl md:text-5xl">Productos Destacados</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <article key={p.title} className="group bg-card/60 border border-border hover:border-gold/60 transition-all duration-500 rounded-sm overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
                <p className="font-serif text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <span className="text-gold font-display tracking-wider">{p.price}</span>
                  <Link to="/productos" className="text-sm font-display tracking-widest text-muted-foreground hover:text-gold">VER →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BIBLIOTECA TEASER */}
      <section className="py-24 bg-forest/30 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-gold mb-3">BIBLIOTECA ARCANA</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Últimas Enseñanzas</h2>
            <p className="font-serif text-muted-foreground max-w-xl mx-auto">
              Artículos sobre runas, mitología nórdica, sueños y protección energética.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                to="/biblioteca/$slug"
                params={{ slug: post.slug }}
                className="group block bg-background/40 border border-border hover:border-gold/60 p-8 rounded-sm transition-all"
              >
                <p className="font-display text-xs tracking-[0.3em] text-gold mb-3">{post.category.toUpperCase()}</p>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="font-serif text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <p className="text-xs font-display tracking-widest text-muted-foreground/60">{post.readTime} · LEER →</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/biblioteca" className="border border-gold/60 text-gold font-display tracking-[0.2em] text-sm px-8 py-3 rounded-sm hover:bg-gold/10 transition inline-block">
              VER TODA LA BIBLIOTECA
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-24 container mx-auto px-6 text-center max-w-3xl">
        <div className="divider-rune mb-8"><span className="font-display text-2xl">ᛗ</span></div>
        <h2 className="font-display text-3xl md:text-4xl mb-6">Sobre Mystical Alchemy</h2>
        <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
          Mystical Alchemy nace con la misión de preservar y compartir conocimientos ancestrales
          de forma práctica, profunda y accesible para los buscadores modernos.
        </p>
        <Link to="/sobre" className="text-gold font-display tracking-widest text-sm hover:underline underline-offset-8">
          CONOCE NUESTRA HISTORIA →
        </Link>
      </section>

      <Testimonials />
      <Newsletter />
      <SiteFooter />
    </div>
  );
}
