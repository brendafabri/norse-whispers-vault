import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "ma_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  function decide(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-background/95 backdrop-blur-md border border-gold/40 rounded-sm p-6 shadow-2xl animate-fade-in"
    >
      <p className="font-display text-xs tracking-[0.3em] text-gold mb-3">ᛟ · COOKIES · ᛟ</p>
      <p className="font-serif text-sm text-foreground/90 leading-relaxed mb-4">
        Usamos cookies esenciales para que el sitio funcione y, con tu consentimiento, cookies
        analíticas para mejorar tu experiencia. Lee nuestra{" "}
        <Link to="/privacidad" className="text-gold hover:underline">
          política de privacidad
        </Link>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => decide("accepted")}
          className="flex-1 bg-gradient-to-r from-[oklch(0.72_0.10_75)] to-[oklch(0.55_0.08_70)] text-primary-foreground font-display tracking-[0.2em] text-xs px-6 py-3 rounded-sm hover:opacity-95 transition"
        >
          ACEPTAR
        </button>
        <button
          onClick={() => decide("rejected")}
          className="flex-1 border border-border hover:border-gold hover:text-gold text-foreground/80 font-display tracking-[0.2em] text-xs px-6 py-3 rounded-sm transition"
        >
          RECHAZAR
        </button>
      </div>
    </div>
  );
}
