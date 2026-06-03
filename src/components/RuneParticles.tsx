import { useEffect, useState } from "react";

const RUNES = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"];

type Particle = { left: number; size: number; duration: number; delay: number; rune: string };

export function RuneParticles({ count = 18 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: 14 + Math.random() * 22,
        duration: 18 + Math.random() * 22,
        delay: Math.random() * 20,
        rune: RUNES[Math.floor(Math.random() * RUNES.length)],
      })),
    );
  }, [count]);

  return (
    <div className="runes-bg" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.rune}
        </span>
      ))}
    </div>
  );
}
