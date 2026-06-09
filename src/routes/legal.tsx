import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — Mystical Alchemy" },
      { name: "description", content: "Aviso legal y condiciones de uso del sitio Mystical Alchemy, conforme a la legislación española." },
      { property: "og:title", content: "Aviso Legal — Mystical Alchemy" },
      { property: "og:description", content: "Condiciones de uso y aviso legal conforme a la legislación española." },
      { property: "og:url", content: "https://norse-whispers-vault.lovable.app/legal" },
      { name: "twitter:title", content: "Aviso Legal — Mystical Alchemy" },
      { name: "twitter:description", content: "Aviso legal del sitio Mystical Alchemy." },
    ],
    links: [{ rel: "canonical", href: "https://norse-whispers-vault.lovable.app/legal" }],
  }),
  component: Legal,
});

function Legal() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <article className="container mx-auto px-6 py-20 max-w-3xl">
        <p className="font-display text-xs tracking-[0.5em] text-gold mb-6 text-center">ᛟ · LEGAL · ᛟ</p>
        <h1 className="font-display text-4xl md:text-5xl mb-8 text-center">Aviso Legal</h1>
        <p className="font-serif text-sm text-muted-foreground mb-12 text-center">
          Última actualización: 9 de junio de 2026
        </p>

        <div className="space-y-10 font-serif text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-gold mb-4">1. Datos del titular</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la
              Información y Comercio Electrónico (LSSI-CE), se informa que el titular del sitio web
              <strong> mysticalalchemy.es</strong> es <strong>Mystical Alchemy</strong>, con domicilio
              en España. Contacto: <a href="mailto:hola@mysticalalchemy.es" className="text-gold hover:underline">hola@mysticalalchemy.es</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">2. Objeto</h2>
            <p>
              Este sitio web tiene por objeto divulgar contenidos sobre tradición nórdica, runas,
              espiritualidad y bienestar, así como ofrecer productos y servicios relacionados.
              Los contenidos son de carácter informativo y no sustituyen consejo médico, psicológico
              o legal profesional.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">3. Condiciones de uso</h2>
            <p>
              El acceso al sitio es libre y gratuito. El usuario se compromete a utilizarlo de buena fe,
              respetando la legislación vigente y los derechos de terceros. Queda prohibido cualquier uso
              que perjudique al sitio, a su titular o a otros usuarios.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">4. Propiedad intelectual</h2>
            <p>
              Todos los textos, símbolos, ilustraciones y diseños del sitio están protegidos por la
              normativa de propiedad intelectual. Queda prohibida su reproducción total o parcial sin
              autorización expresa del titular.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">5. Responsabilidad</h2>
            <p>
              Mystical Alchemy no se responsabiliza de los daños derivados del uso indebido del sitio
              ni de la indisponibilidad puntual del mismo por causas técnicas o de fuerza mayor.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">6. Legislación aplicable y jurisdicción</h2>
            <p>
              Este aviso legal se rige por la <strong>legislación española</strong>. Para la resolución
              de cualquier controversia, las partes se someten a los <strong>Juzgados y Tribunales
              de España</strong>, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
