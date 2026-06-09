import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — Mystical Alchemy" },
      { name: "description", content: "Política de privacidad de Mystical Alchemy: datos que recogemos, cómo los usamos y tus derechos conforme al RGPD." },
      { property: "og:title", content: "Política de Privacidad — Mystical Alchemy" },
      { property: "og:description", content: "Cómo tratamos tus datos personales conforme al RGPD y la LOPDGDD." },
      { property: "og:url", content: "https://norse-whispers-vault.lovable.app/privacidad" },
      { name: "twitter:title", content: "Política de Privacidad — Mystical Alchemy" },
      { name: "twitter:description", content: "Cómo tratamos tus datos personales conforme al RGPD." },
    ],
    links: [{ rel: "canonical", href: "https://norse-whispers-vault.lovable.app/privacidad" }],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <article className="container mx-auto px-6 py-20 max-w-3xl">
        <p className="font-display text-xs tracking-[0.5em] text-gold mb-6 text-center">ᛟ · PRIVACIDAD · ᛟ</p>
        <h1 className="font-display text-4xl md:text-5xl mb-8 text-center">Política de Privacidad</h1>
        <p className="font-serif text-sm text-muted-foreground mb-12 text-center">
          Última actualización: 9 de junio de 2026
        </p>

        <div className="space-y-10 font-serif text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-gold mb-4">1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de tus datos personales es <strong>Mystical Alchemy</strong>,
              con domicilio en España. Para cualquier consulta relacionada con tus datos puedes
              contactarnos en <a href="mailto:hola@mysticalalchemy.es" className="text-gold hover:underline">hola@mysticalalchemy.es</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">2. Datos que recogemos</h2>
            <p>
              Recogemos únicamente los datos que tú nos facilitas de forma voluntaria:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Tu <strong>dirección de correo electrónico</strong> cuando te suscribes a la newsletter o descargas el grimorio gratuito.</li>
              <li>Datos técnicos básicos de navegación (cookies esenciales) para que el sitio funcione correctamente.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">3. Finalidad y base legal</h2>
            <p>
              Utilizamos tus datos para enviarte contenido sobre tradición nórdica, runas y novedades
              de Mystical Alchemy. La base legal es tu <strong>consentimiento expreso</strong>, otorgado
              al rellenar nuestros formularios (art. 6.1.a del RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">4. Conservación de los datos</h2>
            <p>
              Conservaremos tu correo electrónico mientras permanezcas suscrito. Puedes darte de baja
              en cualquier momento desde el enlace incluido en cada email.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">5. Destinatarios</h2>
            <p>
              No cedemos tus datos a terceros salvo proveedores tecnológicos necesarios (proveedor de
              email marketing y alojamiento web), que actúan como encargados del tratamiento y cumplen
              con el RGPD.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">6. Tus derechos</h2>
            <p>Como titular de los datos puedes ejercer en cualquier momento los derechos de:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><strong>Acceso</strong> a los datos que tenemos sobre ti.</li>
              <li><strong>Rectificación</strong> de datos inexactos.</li>
              <li><strong>Supresión</strong> ("derecho al olvido").</li>
              <li><strong>Oposición</strong> y <strong>limitación</strong> del tratamiento.</li>
              <li><strong>Portabilidad</strong> de tus datos en formato estructurado.</li>
              <li><strong>Retirar el consentimiento</strong> en cualquier momento.</li>
            </ul>
            <p className="mt-3">
              Para ejercerlos, escríbenos a{" "}
              <a href="mailto:hola@mysticalalchemy.es" className="text-gold hover:underline">hola@mysticalalchemy.es</a>.
              También puedes reclamar ante la <strong>Agencia Española de Protección de Datos</strong> (www.aepd.es).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gold mb-4">7. Cookies</h2>
            <p>
              Utilizamos cookies esenciales para el funcionamiento del sitio y, previo consentimiento,
              cookies analíticas. Puedes aceptarlas o rechazarlas desde el banner que aparece en tu
              primera visita.
            </p>
          </section>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
