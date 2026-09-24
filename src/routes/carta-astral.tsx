import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  ArrowLeft,
  CalendarIcon,
  Check,
  Clock3,
  LockKeyhole,
  MapPin,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const PAGE_URL = "https://norse-whispers-vault.lovable.app/carta-astral";

export const Route = createFileRoute("/carta-astral")({
  head: () => ({
    meta: [
      { title: "Carta Astral Personalizada — Mystical Alchemy" },
      {
        name: "description",
        content:
          "Descubre tu Sol, Luna y Ascendente y explora una carta astral personalizada con Mystical Alchemy.",
      },
      { property: "og:title", content: "Carta Astral Personalizada — Mystical Alchemy" },
      {
        property: "og:description",
        content: "Una lectura simbólica de tu mapa natal: Sol, Luna, Ascendente, casas y aspectos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Carta Astral Personalizada — Mystical Alchemy" },
      {
        name: "twitter:description",
        content: "Descubre las claves de tu mapa natal en una lectura personalizada.",
      },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Inicio",
              item: "https://norse-whispers-vault.lovable.app/",
            },
            { "@type": "ListItem", position: 2, name: "Carta Astral", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
  component: CartaAstralPage,
});

type View = "form" | "teaser" | "report";

const placements = [
  { label: "Sol", sign: "Escorpio", glyph: "♏", detail: "Tu esencia" },
  { label: "Luna", sign: "Piscis", glyph: "♓", detail: "Tu mundo emocional" },
  { label: "Ascendente", sign: "Capricornio", glyph: "♑", detail: "Tu forma de avanzar" },
];

const reportHouses = [
  { house: "Casa I", realm: "Identidad", sign: "Capricornio", light: "Presencia serena y capacidad para construir una identidad sólida.", shadow: "Exigirte madurez antes de permitirte explorar quién sos." },
  { house: "Casa II", realm: "Valor y recursos", sign: "Acuario", light: "Talento para crear valor desde ideas singulares y libres.", shadow: "Desapego que puede confundirse con falta de merecimiento." },
  { house: "Casa III", realm: "Mente y palabra", sign: "Piscis", light: "Intuición verbal, imaginación y escucha profunda.", shadow: "Absorber voces ajenas hasta perder claridad en la propia." },
  { house: "Casa IV", realm: "Raíces", sign: "Aries", light: "Coraje para iniciar un linaje emocional nuevo.", shadow: "Reaccionar con prisa ante memorias familiares sensibles." },
  { house: "Casa V", realm: "Creación", sign: "Tauro", light: "Creatividad sensorial, paciente y profundamente fértil.", shadow: "Aferrarte a una forma conocida por temor a perder seguridad." },
  { house: "Casa VI", realm: "Rituales cotidianos", sign: "Géminis", light: "Adaptabilidad y curiosidad aplicadas al cuidado diario.", shadow: "Dispersar energía en demasiadas tareas a la vez." },
  { house: "Casa VII", realm: "Vínculos", sign: "Cáncer", light: "Lealtad afectiva y poder para crear refugio compartido.", shadow: "Proteger en exceso o esperar que adivinen tus necesidades." },
  { house: "Casa VIII", realm: "Transformación", sign: "Leo", light: "Valentía para alumbrar secretos y renacer con dignidad.", shadow: "Convertir la vulnerabilidad en orgullo o dramatización." },
  { house: "Casa IX", realm: "Visión", sign: "Virgo", light: "Sabiduría que une estudio, método y servicio.", shadow: "Buscar una verdad perfecta antes de confiar en el camino." },
  { house: "Casa X", realm: "Vocación", sign: "Libra", light: "Don para armonizar, mediar y crear belleza con propósito.", shadow: "Medir el éxito a través de la aprobación externa." },
  { house: "Casa XI", realm: "Comunidad", sign: "Escorpio", light: "Capacidad para transformar grupos desde la autenticidad.", shadow: "Reservarte demasiado hasta sentirte fuera del círculo." },
  { house: "Casa XII", realm: "Inconsciente", sign: "Sagitario", light: "Fe profunda y acceso simbólico a una visión amplia.", shadow: "Huir hacia grandes respuestas para evitar una emoción presente." },
];

function CartaAstralPage() {
  const [view, setView] = useState<View>("form");
  const [birthDate, setBirthDate] = useState<Date>();
  const [unknownTime, setUnknownTime] = useState(false);
  const [birthTime, setBirthTime] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setView("teaser");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetChart() {
    setView("form");
    setBirthDate(undefined);
    setBirthTime("");
    setUnknownTime(false);
    setCity("");
    setCountry("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {view === "form" && (
          <BirthForm
            birthDate={birthDate}
            setBirthDate={setBirthDate}
            birthTime={birthTime}
            setBirthTime={setBirthTime}
            unknownTime={unknownTime}
            setUnknownTime={setUnknownTime}
            city={city}
            setCity={setCity}
            country={country}
            setCountry={setCountry}
            onSubmit={handleSubmit}
          />
        )}
        {view === "teaser" && (
          <Teaser
            birthDate={birthDate}
            birthTime={unknownTime ? "Hora desconocida" : birthTime}
            birthplace={[city, country].filter(Boolean).join(", ")}
            onUnlock={() => {
              setView("report");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onReset={resetChart}
          />
        )}
        {view === "report" && <FullReport onBack={() => setView("teaser")} onReset={resetChart} />}
      </main>
      <SiteFooter />
    </div>
  );
}

interface BirthFormProps {
  birthDate: Date | undefined;
  setBirthDate: (date: Date | undefined) => void;
  birthTime: string;
  setBirthTime: (time: string) => void;
  unknownTime: boolean;
  setUnknownTime: (unknown: boolean) => void;
  city: string;
  setCity: (city: string) => void;
  country: string;
  setCountry: (country: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function BirthForm(props: BirthFormProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 py-20 md:py-28">
      <AstralBackdrop />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="mb-5 font-display text-xs tracking-[0.4em] text-gold">ASTROLOGÍA NATAL</p>
          <h1 className="mb-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            Carta Astral <span className="italic text-gold">Personalizada</span>
          </h1>
          <p className="max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
            El cielo de tu nacimiento guarda un lenguaje único. Introduce tus datos para revelar
            las tres claves que abren tu mapa interior.
          </p>
          <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/30 text-gold">☉</span>
            <p className="font-serif leading-relaxed">
              La hora exacta permite calcular el Ascendente y las casas con mayor precisión.
            </p>
          </div>
        </div>

        <form onSubmit={props.onSubmit} className="relative border border-gold/30 bg-card/90 p-6 shadow-arcane backdrop-blur-sm sm:p-9">
          <CornerOrnaments />
          <div className="relative">
            <div className="mb-8 flex items-center justify-between border-b border-border/70 pb-5">
              <div>
                <p className="font-display text-xs tracking-[0.3em] text-gold">TUS COORDENADAS</p>
                <h2 className="mt-2 font-display text-2xl">Datos de nacimiento</h2>
              </div>
              <Star className="size-5 text-gold" aria-hidden="true" />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="font-display text-xs tracking-[0.14em]" htmlFor="birth-date">Fecha de nacimiento</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="birth-date"
                      type="button"
                      variant="outline"
                      className={cn(
                        "h-12 w-full justify-start border-border bg-input/50 px-4 text-left font-serif text-base",
                        !props.birthDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 size-4 text-gold" />
                      {props.birthDate ? format(props.birthDate, "PPP", { locale: es }) : "Selecciona una fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={props.birthDate}
                      onSelect={props.setBirthDate}
                      defaultMonth={new Date(1990, 0)}
                      captionLayout="dropdown"
                      startMonth={new Date(1920, 0)}
                      endMonth={new Date()}
                      disabled={{ after: new Date() }}
                      className="pointer-events-auto p-3"
                    />
                  </PopoverContent>
                </Popover>
                {!props.birthDate && <input className="sr-only" required aria-label="Fecha de nacimiento requerida" value="" onChange={() => undefined} />}
              </div>

              <div className="space-y-3">
                <Label className="font-display text-xs tracking-[0.14em]" htmlFor="birth-time">Hora exacta</Label>
                <div className="relative">
                  <Clock3 className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gold" aria-hidden="true" />
                  <Input
                    id="birth-time"
                    type="time"
                    required={!props.unknownTime}
                    disabled={props.unknownTime}
                    value={props.birthTime}
                    onChange={(event) => props.setBirthTime(event.target.value)}
                    className="h-12 border-border bg-input/50 pl-11 font-serif text-base"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="unknown-time"
                    checked={props.unknownTime}
                    onCheckedChange={(checked) => {
                      props.setUnknownTime(checked === true);
                      if (checked === true) props.setBirthTime("");
                    }}
                  />
                  <Label htmlFor="unknown-time" className="cursor-pointer font-serif text-sm text-muted-foreground">
                    No sé la hora exacta
                  </Label>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="font-display text-xs tracking-[0.14em]" htmlFor="birth-city">Ciudad</Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gold" aria-hidden="true" />
                    <Input id="birth-city" required value={props.city} onChange={(event) => props.setCity(event.target.value)} placeholder="Madrid" className="h-12 border-border bg-input/50 pl-11 font-serif text-base" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="font-display text-xs tracking-[0.14em]" htmlFor="birth-country">País</Label>
                  <Input id="birth-country" required value={props.country} onChange={(event) => props.setCountry(event.target.value)} placeholder="España" className="h-12 border-border bg-input/50 font-serif text-base" />
                </div>
              </div>

              <Button type="submit" size="lg" className="h-13 w-full rounded-sm font-display tracking-[0.18em]">
                <Sparkles className="size-4" /> CALCULAR MI CARTA
              </Button>
              <p className="text-center font-serif text-xs text-muted-foreground">
                Vista de demostración. No se realiza todavía un cálculo astrológico real.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Teaser({ birthDate, birthTime, birthplace, onUnlock, onReset }: { birthDate?: Date; birthTime: string; birthplace: string; onUnlock: () => void; onReset: () => void }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 py-20 md:py-28">
        <AstralBackdrop />
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="mb-4 font-display text-xs tracking-[0.4em] text-gold">TU TRÍADA ESENCIAL</p>
          <h1 className="font-display text-4xl sm:text-5xl">El cielo en el instante en que llegaste</h1>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-muted-foreground">
            {birthDate ? format(birthDate, "d 'de' MMMM 'de' yyyy", { locale: es }) : "Fecha registrada"} · {birthTime || "Hora registrada"} · {birthplace || "Lugar registrado"}
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden border border-gold/30 bg-gold/20 md:grid-cols-3">
            {placements.map((placement) => (
              <article key={placement.label} className="bg-background/95 px-7 py-10">
                <p className="font-display text-xs tracking-[0.3em] text-muted-foreground">{placement.label.toUpperCase()}</p>
                <div className="my-5 text-6xl text-gold" aria-hidden="true">{placement.glyph}</div>
                <h2 className="font-display text-2xl">{placement.sign}</h2>
                <p className="mt-2 font-serif italic text-muted-foreground">{placement.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 font-serif text-xs text-muted-foreground">Resultados de ejemplo para visualizar la experiencia.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-display text-xs tracking-[0.35em] text-gold">MÁS ALLÁ DE TUS TRES SIGNOS</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
              Desbloqueá tu Carta Astral <span className="italic text-gold">Completa</span>
            </h2>
            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
              Tu mapa no termina aquí. Las casas, los aspectos y los puntos de poder revelan cómo
              conviven tus dones, tus desafíos y la memoria profunda de tu alma.
            </p>
          </div>
          <div className="border border-gold/40 bg-card p-7 sm:p-9">
            <div className="mb-7 flex items-end justify-between gap-4 border-b border-border pb-6">
              <div>
                <p className="font-display text-xs tracking-[0.25em] text-gold">REPORTE PERSONAL</p>
                <p className="mt-2 font-serif text-muted-foreground">Acceso completo</p>
              </div>
              <p className="font-display text-4xl text-gold">19 €</p>
            </div>
            <ul className="space-y-4">
              {["Tabla de Posiciones Natales", "Casa por Casa", "Aspectos Principales", "Puntos de Poder", "¿Sos un Alma Vieja?"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-serif text-base">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border border-gold/40 text-gold"><Check className="size-3.5" /></span>
                  {item}
                </li>
              ))}
            </ul>
            <Button onClick={onUnlock} size="lg" className="mt-8 h-13 w-full rounded-sm font-display tracking-[0.16em]">
              <LockKeyhole className="size-4" /> DESBLOQUEAR POR 19 €
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-4 text-gold" /> Pago de demostración · Stripe se conectará más adelante
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button type="button" variant="ghost" onClick={onReset} className="font-serif text-muted-foreground">
            <RotateCcw /> Calcular otra carta
          </Button>
        </div>
      </section>
    </>
  );
}

function FullReport({ onBack, onReset }: { onBack: () => void; onReset: () => void }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Button variant="ghost" onClick={onBack} className="font-serif text-muted-foreground"><ArrowLeft /> Volver a la síntesis</Button>
          <Button variant="outline" onClick={onReset} className="border-gold/30 font-serif"><RotateCcw /> Nueva carta</Button>
        </div>

        <article className="relative border border-gold/40 bg-card/65 p-6 shadow-arcane sm:p-10 md:p-14">
          <CornerOrnaments />
          <header className="relative border-b border-gold/20 pb-12 text-center">
            <p className="font-display text-xs tracking-[0.45em] text-gold">REPORTE COMPLETO · EJEMPLO</p>
            <h1 className="mt-5 font-display text-4xl sm:text-6xl">Tu Mapa del Alma</h1>
            <p className="mx-auto mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-muted-foreground">
              “El cielo no dicta tu destino: ilumina los símbolos con los que elegís recorrerlo.”
            </p>
          </header>

          <section className="relative py-12">
            <SectionTitle numeral="I" title="Tabla de Posiciones Natales" />
            <div className="mt-8 overflow-x-auto border border-border">
              <table className="w-full min-w-[620px] text-left">
                <thead className="border-b border-gold/30 bg-gold/5 font-display text-xs tracking-[0.18em] text-gold">
                  <tr><th className="p-4">CUERPO</th><th className="p-4">SIGNO</th><th className="p-4">CASA</th><th className="p-4">GRADO</th></tr>
                </thead>
                <tbody className="divide-y divide-border font-serif">
                  {[['☉ Sol', 'Escorpio', 'XI', '18° 42′'], ['☽ Luna', 'Piscis', 'III', '07° 16′'], ['ASC Ascendente', 'Capricornio', 'I', '12° 03′'], ['☿ Mercurio', 'Sagitario', 'XII', '02° 51′'], ['♀ Venus', 'Libra', 'X', '26° 08′'], ['♂ Marte', 'Leo', 'VIII', '14° 37′']].map((row) => (
                    <tr key={row[0]} className="text-muted-foreground"><td className="p-4 text-foreground">{row[0]}</td><td className="p-4">{row[1]}</td><td className="p-4">{row[2]}</td><td className="p-4">{row[3]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="relative border-t border-gold/20 py-12">
            <SectionTitle numeral="II" title="Casa por Casa" />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {reportHouses.map((item) => (
                <article key={item.house} className="border border-border bg-background/45 p-6">
                  <div className="mb-5 flex items-start justify-between gap-4 border-b border-border pb-4">
                    <div><p className="font-display text-xs tracking-[0.22em] text-gold">{item.house}</p><h3 className="mt-1 font-display text-xl">{item.realm}</h3></div>
                    <span className="font-serif italic text-muted-foreground">{item.sign}</span>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div><p className="mb-2 font-display text-xs tracking-[0.18em] text-gold">LUCES</p><p className="font-serif leading-relaxed text-muted-foreground">{item.light}</p></div>
                    <div><p className="mb-2 font-display text-xs tracking-[0.18em] text-wine">SOMBRAS</p><p className="font-serif leading-relaxed text-muted-foreground">{item.shadow}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="relative border-t border-gold/20 py-12">
            <SectionTitle numeral="III" title="Aspectos Principales" />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[['☉ △ ☽', 'Sol trígono Luna', 'Voluntad y emoción encuentran un cauce natural para cooperar.'], ['♀ □ ♂', 'Venus cuadratura Marte', 'Deseo y armonía te invitan a aprender el arte de la tensión creativa.'], ['☿ ☌ ♃', 'Mercurio conjunto Júpiter', 'Una mente amplia busca significado, relato y verdad en cada experiencia.']].map(([glyph, title, text]) => (
                <div key={title} className="border-l border-gold/50 pl-5"><p className="text-2xl text-gold">{glyph}</p><h3 className="mt-3 font-display text-lg">{title}</h3><p className="mt-3 font-serif leading-relaxed text-muted-foreground">{text}</p></div>
              ))}
            </div>
          </section>

          <div className="relative border-y border-gold/40 bg-gold/5 px-6 py-9 text-center sm:px-12">
            <p className="font-display text-xs tracking-[0.3em] text-gold">LECCIÓN KÁRMICA</p>
            <p className="mx-auto mt-4 max-w-3xl font-serif text-xl italic leading-relaxed text-foreground">
              Tu aprendizaje no consiste en sostenerlo todo, sino en reconocer qué peso te pertenece.
              Cuando soltás el control, la intuición deja de ser una sospecha y se convierte en guía.
            </p>
          </div>

          <section className="relative py-12">
            <SectionTitle numeral="IV" title="Puntos de Poder" />
            <div className="mt-8 grid gap-px bg-gold/20 sm:grid-cols-3">
              {[['Plutón en Casa XI', 'Transformación colectiva'], ['Medio Cielo en Libra', 'Belleza con propósito'], ['Nodo Norte en Tauro', 'La paz como destino']].map(([title, text]) => (
                <div key={title} className="bg-card p-7 text-center"><Sparkles className="mx-auto size-5 text-gold" /><h3 className="mt-4 font-display text-lg">{title}</h3><p className="mt-2 font-serif italic text-muted-foreground">{text}</p></div>
              ))}
            </div>
          </section>

          <section className="relative border-t border-gold/20 pt-12 text-center">
            <p className="text-5xl text-gold">☾</p>
            <h2 className="mt-5 font-display text-3xl">¿Sos un Alma Vieja?</h2>
            <p className="mx-auto mt-5 max-w-3xl font-serif text-lg leading-relaxed text-muted-foreground">
              La concentración de agua, la profundidad de Escorpio y el llamado de la Casa XII hablan
              de una sensibilidad que reconoce antes de comprender. Tu carta sugiere memoria simbólica:
              una inclinación a buscar lo oculto, custodiar conocimiento y acompañar transformaciones.
            </p>
            <p className="mt-7 font-display text-sm tracking-[0.25em] text-gold">ÍNDICE DE ALMA VIEJA · 86%</p>
          </section>
        </article>

        <p className="mt-6 text-center font-serif text-xs text-muted-foreground">
          Este reporte contiene datos e interpretaciones de ejemplo y no representa un cálculo astrológico real.
        </p>
      </div>
    </section>
  );
}

function SectionTitle({ numeral, title }: { numeral: string; title: string }) {
  return <div className="flex items-center gap-4"><span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/50 font-display text-xs text-gold">{numeral}</span><h2 className="font-display text-2xl sm:text-3xl">{title}</h2></div>;
}

function AstralBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[8%] top-16 text-sm text-gold/30">✦</div>
      <div className="absolute right-[12%] top-24 text-xl text-gold/20">☾</div>
      <div className="absolute bottom-16 left-[18%] text-xs text-gold/25">✧</div>
      <div className="absolute -right-32 top-1/2 size-[420px] -translate-y-1/2 rounded-full border border-gold/10 sm:size-[600px]" />
      <div className="absolute -right-10 top-1/2 size-[260px] -translate-y-1/2 rounded-full border border-gold/10 sm:size-[400px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.018_160/0.45),transparent_60%)]" />
    </div>
  );
}

function CornerOrnaments() {
  return (
    <div aria-hidden="true">
      <span className="absolute left-3 top-3 size-8 border-l border-t border-gold/60" />
      <span className="absolute right-3 top-3 size-8 border-r border-t border-gold/60" />
      <span className="absolute bottom-3 left-3 size-8 border-b border-l border-gold/60" />
      <span className="absolute bottom-3 right-3 size-8 border-b border-r border-gold/60" />
    </div>
  );
}