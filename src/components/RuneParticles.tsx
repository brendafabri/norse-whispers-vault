const RUNES = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"];

export function RuneParticles({ count = 18 }: { count?: number }) {
  return (
    <div className="runes-bg" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const duration = 18 + Math.random() * 22;
        const delay = Math.random() * 20;
        const size = 14 + Math.random() * 22;
        const rune = RUNES[Math.floor(Math.random() * RUNES.length)];
        return (
          <span
            key={i}
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            {rune}
          </span>
        );
      })}
    </div>
  );
}
