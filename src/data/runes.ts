export type Rune = {
  slug: string;
  symbol: string;
  name: string;
  meaning: string;
  message: string;
  keywords: string;
  description: string;
  aett: "Primera Ætt" | "Segunda Ætt" | "Tercera Ætt";
};

export const RUNES: Rune[] = [
  { slug: "fehu", symbol: "ᚠ", name: "Fehu", meaning: "Abundancia, ganado, prosperidad", message: "La abundancia fluye hacia ti. Confía en el ciclo de dar y recibir.", keywords: "riqueza, fortuna, prosperidad, ganado, energía móvil", description: "Fehu representa la abundancia material y espiritual, la riqueza que se mueve y se multiplica cuando se comparte.", aett: "Primera Ætt" },
  { slug: "uruz", symbol: "ᚢ", name: "Uruz", meaning: "Fuerza primordial, vitalidad", message: "Tu fuerza interior es indomable. Levántate como el uro salvaje.", keywords: "fuerza, vitalidad, coraje, salud, poder primal", description: "Uruz es la fuerza salvaje del uro, la vitalidad bruta que rompe cadenas y forja al guerrero interior.", aett: "Primera Ætt" },
  { slug: "thurisaz", symbol: "ᚦ", name: "Thurisaz", meaning: "Protección, espina, defensa", message: "Una espina protege tu camino. Acepta los obstáculos como aliados.", keywords: "protección, defensa, espina, Thor, obstáculos sagrados", description: "Thurisaz es la espina protectora de Thor, la fuerza defensiva que aleja lo que no debe acercarse.", aett: "Primera Ætt" },
  { slug: "ansuz", symbol: "ᚨ", name: "Ansuz", meaning: "Mensaje divino, sabiduría de Odín", message: "Un mensaje sagrado llega. Escucha con el corazón abierto.", keywords: "Odín, mensaje, sabiduría, oratoria, inspiración divina", description: "Ansuz es la voz de Odín, el mensaje sagrado que viaja por el aire para quien sabe escuchar.", aett: "Primera Ætt" },
  { slug: "raidho", symbol: "ᚱ", name: "Raidho", meaning: "Viaje, movimiento, ritmo cósmico", message: "Estás en el camino correcto. Confía en el ritmo del viaje.", keywords: "viaje, ritmo, camino, movimiento, destino", description: "Raidho es la rueda que gira, el viaje interior y exterior que sigue el ritmo sagrado del cosmos.", aett: "Primera Ætt" },
  { slug: "kenaz", symbol: "ᚲ", name: "Kenaz", meaning: "Antorcha, conocimiento, revelación", message: "Una luz se enciende en tu interior. Sigue su llama.", keywords: "antorcha, conocimiento, revelación, creatividad, fuego interior", description: "Kenaz es la antorcha que ilumina la oscuridad, el fuego del conocimiento y la creación.", aett: "Primera Ætt" },
  { slug: "gebo", symbol: "ᚷ", name: "Gebo", meaning: "Don, intercambio, equilibrio", message: "Un don llega a tu vida. Recíbelo y devuélvelo.", keywords: "don, regalo, intercambio, alianzas, equilibrio sagrado", description: "Gebo es el don y su devolución, el equilibrio sagrado del intercambio entre seres y mundos.", aett: "Primera Ætt" },
  { slug: "wunjo", symbol: "ᚹ", name: "Wunjo", meaning: "Alegría, armonía, plenitud", message: "La alegría te encuentra. Permítete ser feliz sin culpa.", keywords: "alegría, armonía, plenitud, felicidad, comunidad", description: "Wunjo es la alegría plena, la armonía del clan y del alma que florece cuando se honra la propia luz.", aett: "Primera Ætt" },
  { slug: "hagalaz", symbol: "ᚺ", name: "Hagalaz", meaning: "Disrupción, granizo, ruptura necesaria", message: "Una tormenta limpia el terreno. Lo que cae debía caer.", keywords: "granizo, ruptura, disrupción, limpieza, transformación forzosa", description: "Hagalaz es el granizo que rompe lo viejo para que nazca lo nuevo, la fuerza purificadora del caos.", aett: "Segunda Ætt" },
  { slug: "nauthiz", symbol: "ᚾ", name: "Nauthiz", meaning: "Necesidad, restricción, paciencia", message: "La espera tiene un propósito. Forja tu paciencia.", keywords: "necesidad, restricción, paciencia, resistencia, fuego del alma", description: "Nauthiz es la necesidad que enseña, la fricción que enciende el fuego de la voluntad.", aett: "Segunda Ætt" },
  { slug: "isa", symbol: "ᛁ", name: "Isa", meaning: "Hielo, quietud, pausa", message: "Detente. La quietud también es un acto de poder.", keywords: "hielo, quietud, pausa, introspección, congelamiento", description: "Isa es el hielo, la quietud absoluta donde todo se detiene para mostrar su esencia.", aett: "Segunda Ætt" },
  { slug: "jera", symbol: "ᛃ", name: "Jera", meaning: "Cosecha, ciclo, recompensa", message: "Lo que sembraste comienza a dar frutos.", keywords: "cosecha, ciclo, año, recompensa, paciencia natural", description: "Jera es la cosecha del año, el ciclo cumplido que devuelve con justicia lo sembrado.", aett: "Segunda Ætt" },
  { slug: "eihwaz", symbol: "ᛇ", name: "Eihwaz", meaning: "Tejo, transformación, eternidad", message: "Atraviesas un umbral. Confía en tu transformación.", keywords: "tejo, transformación, eternidad, Yggdrasil, umbral", description: "Eihwaz es el tejo eterno, el árbol del mundo que une vida y muerte en un solo aliento.", aett: "Segunda Ætt" },
  { slug: "perthro", symbol: "ᛈ", name: "Perthro", meaning: "Misterio, destino, suerte", message: "El destino te guarda una sorpresa. Mantente abierto.", keywords: "misterio, destino, suerte, oráculo, wyrd", description: "Perthro es el cubilete del destino, el misterio del wyrd que solo se revela a quien se atreve a mirar.", aett: "Segunda Ætt" },
  { slug: "algiz", symbol: "ᛉ", name: "Algiz", meaning: "Protección divina, conexión espiritual", message: "Estás protegido por fuerzas invisibles. Eleva tu vibración.", keywords: "protección, alce, escudo, conexión divina, valquirias", description: "Algiz es el alce sagrado, el escudo espiritual que conecta el cielo con la tierra y protege al caminante.", aett: "Segunda Ætt" },
  { slug: "sowilo", symbol: "ᛊ", name: "Sowilo", meaning: "Sol, victoria, luz", message: "La luz del sol te guía. Tu victoria está cerca.", keywords: "sol, victoria, luz, éxito, energía solar", description: "Sowilo es el sol victorioso, la energía solar que disipa la sombra y guía hacia la verdad.", aett: "Segunda Ætt" },
  { slug: "tiwaz", symbol: "ᛏ", name: "Tiwaz", meaning: "Justicia, honor, sacrificio noble", message: "Actúa con honor. La justicia está de tu lado.", keywords: "Tyr, justicia, honor, sacrificio, guerrero noble", description: "Tiwaz es la lanza de Tyr, el dios manco que ofrece su mano por la justicia y el honor.", aett: "Tercera Ætt" },
  { slug: "berkano", symbol: "ᛒ", name: "Berkano", meaning: "Renacimiento, fertilidad, abedul", message: "Algo nuevo nace en ti. Nútrelo con paciencia.", keywords: "abedul, renacimiento, fertilidad, madre, nuevos comienzos", description: "Berkano es el abedul materno, la fuerza fértil que acuna lo nuevo y lo hace crecer en silencio.", aett: "Tercera Ætt" },
  { slug: "ehwaz", symbol: "ᛖ", name: "Ehwaz", meaning: "Caballo, alianza, progreso", message: "Una alianza te impulsa. Avanza con confianza.", keywords: "caballo, alianza, confianza, progreso, vínculo sagrado", description: "Ehwaz es el caballo y su jinete, la alianza perfecta que multiplica las fuerzas en el camino.", aett: "Tercera Ætt" },
  { slug: "mannaz", symbol: "ᛗ", name: "Mannaz", meaning: "Humanidad, ser, identidad", message: "Reconócete. Tu humanidad es tu mayor poder.", keywords: "humanidad, ser, identidad, comunidad, autoconocimiento", description: "Mannaz es la runa del ser humano, el espejo donde se reconoce la propia divinidad y la del otro.", aett: "Tercera Ætt" },
  { slug: "laguz", symbol: "ᛚ", name: "Laguz", meaning: "Agua, intuición, flujo", message: "Fluye con tu intuición. El agua siempre encuentra su camino.", keywords: "agua, intuición, flujo, emociones, subconsciente", description: "Laguz es el agua sagrada, la corriente de la intuición que fluye desde lo profundo del alma.", aett: "Tercera Ætt" },
  { slug: "ingwaz", symbol: "ᛜ", name: "Ingwaz", meaning: "Semilla, gestación, potencial", message: "Una semilla germina dentro de ti. Cuídala en silencio.", keywords: "semilla, gestación, potencial, Ing, energía latente", description: "Ingwaz es la semilla del dios Ing, el potencial guardado que espera el momento exacto para germinar.", aett: "Tercera Ætt" },
  { slug: "dagaz", symbol: "ᛞ", name: "Dagaz", meaning: "Día, despertar, claridad", message: "Un nuevo amanecer despunta. La oscuridad se disipa.", keywords: "día, despertar, claridad, amanecer, breakthrough", description: "Dagaz es el día que rompe la noche, el despertar súbito que revela la claridad después del trance.", aett: "Tercera Ætt" },
  { slug: "othala", symbol: "ᛟ", name: "Othala", meaning: "Herencia, hogar, linaje", message: "Tus raíces te sostienen. Honra a tus ancestros.", keywords: "herencia, hogar, linaje, ancestros, tierra sagrada", description: "Othala es la herencia ancestral, el hogar sagrado y la tierra que sostiene el linaje a lo largo del tiempo.", aett: "Tercera Ætt" },
];

export function getRuneOfTheDay(date: Date = new Date()): Rune {
  // Deterministic UTC day index — same on server and client.
  const epoch = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const dayIndex = Math.floor(epoch / 86400000);
  return RUNES[dayIndex % RUNES.length];
}

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
