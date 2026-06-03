export type Rune = {
  symbol: string;
  name: string;
  meaning: string;
  message: string;
};

export const RUNES: Rune[] = [
  { symbol: "ᚠ", name: "Fehu", meaning: "Abundancia, ganado, prosperidad", message: "La abundancia fluye hacia ti. Confía en el ciclo de dar y recibir." },
  { symbol: "ᚢ", name: "Uruz", meaning: "Fuerza primordial, vitalidad", message: "Tu fuerza interior es indomable. Levántate como el uro salvaje." },
  { symbol: "ᚦ", name: "Thurisaz", meaning: "Protección, espina, defensa", message: "Una espina protege tu camino. Acepta los obstáculos como aliados." },
  { symbol: "ᚨ", name: "Ansuz", meaning: "Mensaje divino, sabiduría de Odín", message: "Un mensaje sagrado llega. Escucha con el corazón abierto." },
  { symbol: "ᚱ", name: "Raidho", meaning: "Viaje, movimiento, ritmo cósmico", message: "Estás en el camino correcto. Confía en el ritmo del viaje." },
  { symbol: "ᚲ", name: "Kenaz", meaning: "Antorcha, conocimiento, revelación", message: "Una luz se enciende en tu interior. Sigue su llama." },
  { symbol: "ᚷ", name: "Gebo", meaning: "Don, intercambio, equilibrio", message: "Un don llega a tu vida. Recíbelo y devuélvelo." },
  { symbol: "ᚹ", name: "Wunjo", meaning: "Alegría, armonía, plenitud", message: "La alegría te encuentra. Permítete ser feliz sin culpa." },
  { symbol: "ᚺ", name: "Hagalaz", meaning: "Disrupción, granizo, ruptura necesaria", message: "Una tormenta limpia el terreno. Lo que cae debía caer." },
  { symbol: "ᚾ", name: "Nauthiz", meaning: "Necesidad, restricción, paciencia", message: "La espera tiene un propósito. Forja tu paciencia." },
  { symbol: "ᛁ", name: "Isa", meaning: "Hielo, quietud, pausa", message: "Detente. La quietud también es un acto de poder." },
  { symbol: "ᛃ", name: "Jera", meaning: "Cosecha, ciclo, recompensa", message: "Lo que sembraste comienza a dar frutos." },
  { symbol: "ᛇ", name: "Eihwaz", meaning: "Tejo, transformación, eternidad", message: "Atraviesas un umbral. Confía en tu transformación." },
  { symbol: "ᛈ", name: "Perthro", meaning: "Misterio, destino, suerte", message: "El destino te guarda una sorpresa. Mantente abierto." },
  { symbol: "ᛉ", name: "Algiz", meaning: "Protección divina, conexión espiritual", message: "Estás protegido por fuerzas invisibles. Eleva tu vibración." },
  { symbol: "ᛊ", name: "Sowilo", meaning: "Sol, victoria, luz", message: "La luz del sol te guía. Tu victoria está cerca." },
  { symbol: "ᛏ", name: "Tiwaz", meaning: "Justicia, honor, sacrificio noble", message: "Actúa con honor. La justicia está de tu lado." },
  { symbol: "ᛒ", name: "Berkano", meaning: "Renacimiento, fertilidad, abedul", message: "Algo nuevo nace en ti. Nútrelo con paciencia." },
  { symbol: "ᛖ", name: "Ehwaz", meaning: "Caballo, alianza, progreso", message: "Una alianza te impulsa. Avanza con confianza." },
  { symbol: "ᛗ", name: "Mannaz", meaning: "Humanidad, ser, identidad", message: "Reconócete. Tu humanidad es tu mayor poder." },
  { symbol: "ᛚ", name: "Laguz", meaning: "Agua, intuición, flujo", message: "Fluye con tu intuición. El agua siempre encuentra su camino." },
  { symbol: "ᛜ", name: "Ingwaz", meaning: "Semilla, gestación, potencial", message: "Una semilla germina dentro de ti. Cuídala en silencio." },
  { symbol: "ᛞ", name: "Dagaz", meaning: "Día, despertar, claridad", message: "Un nuevo amanecer despunta. La oscuridad se disipa." },
  { symbol: "ᛟ", name: "Othala", meaning: "Herencia, hogar, linaje", message: "Tus raíces te sostienen. Honra a tus ancestros." },
];

export const MIRROR_NUMBERS: Record<string, string> = {
  "11:11": "Portal de manifestación. Tus pensamientos se materializan con velocidad. Cuida lo que deseas.",
  "22:22": "Construcción del maestro. Estás edificando algo grande con fundamentos sólidos.",
  "13:13": "Transformación profunda. Una vieja versión de ti muere para dar paso a la nueva.",
  "12:12": "Compleción de un ciclo. Estás listo para el siguiente nivel de tu evolución.",
  "00:00": "Punto cero. Espacio infinito de posibilidad. Todo puede comenzar de nuevo.",
  "14:14": "Equilibrio kármico. Las energías se ajustan a tu favor.",
  "15:15": "Cambios materiales. Atención a tu relación con la abundancia.",
  "21:21": "Final feliz. Un ciclo termina con éxito.",
  "23:23": "Mensaje arcangélico. Estás siendo guiado en silencio.",
};
