import { useState } from "react";

type Variant = "primary" | "minimal";

interface Props {
  variant?: Variant;
  source?: string;
  placeholder?: string;
  buttonLabel?: string;
}

export function SubscribeForm({
  variant = "primary",
  source = "site",
  placeholder = "tu@correo.com",
  buttonLabel = "UNIRME",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-gold font-display tracking-widest text-sm">
        ᚹ ¡BIENVENIDO AL CÍRCULO! REVISA TU CORREO.
      </p>
    );
  }

  const isPrimary = variant === "primary";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-input/60 border border-border focus:border-gold outline-none px-4 py-3 font-serif rounded-sm transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={
          isPrimary
            ? "bg-gradient-to-r from-[oklch(0.72_0.10_75)] to-[oklch(0.55_0.08_70)] text-primary-foreground font-display tracking-[0.2em] text-sm px-8 py-3 rounded-sm hover:opacity-95 transition disabled:opacity-60"
            : "bg-gold text-primary-foreground font-display tracking-widest text-sm px-8 py-3 rounded-sm hover:opacity-90 transition disabled:opacity-60"
        }
      >
        {status === "loading" ? "ENVIANDO…" : buttonLabel}
      </button>
      {status === "error" && (
        <p className="sm:basis-full text-destructive font-serif text-sm">
          Algo salió mal. Inténtalo de nuevo.
        </p>
      )}
    </form>
  );
}
