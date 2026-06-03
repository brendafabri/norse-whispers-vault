export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export const CATEGORIES = [
  "Runas",
  "Mitología Nórdica",
  "Sueños",
  "Protección Energética",
  "Brujería",
  "Simbolismo",
  "Números Espejo",
] as const;

export const POSTS: Post[] = [
  {
    slug: "significado-de-las-runas-nordicas",
    title: "El Significado Profundo de las Runas Nórdicas",
    excerpt: "Una introducción a las 24 runas del Futhark Antiguo y su simbolismo ancestral en la magia nórdica.",
    category: "Runas",
    date: "2026-05-12",
    readTime: "8 min",
    body: [
      "Las runas son mucho más que un alfabeto. Cada símbolo es una llave hacia una fuerza primordial del universo nórdico, custodiada por Odín tras su sacrificio en el árbol Yggdrasil.",
      "En esta guía exploramos el significado de cada runa del Futhark Antiguo, su pronunciación, su elemento asociado y cómo usarlas para la lectura intuitiva y la magia práctica.",
      "Desde Fehu, la runa de la abundancia, hasta Othala, la del legado ancestral, cada signo conserva un fragmento de la sabiduría olvidada del Norte.",
    ],
  },
  {
    slug: "odin-y-el-origen-de-las-runas",
    title: "Odín y el Origen Sagrado de las Runas",
    excerpt: "La historia mitológica del sacrificio de Odín en Yggdrasil y cómo entregó las runas a la humanidad.",
    category: "Mitología Nórdica",
    date: "2026-05-04",
    readTime: "6 min",
    body: [
      "Durante nueve noches, Odín colgó del árbol del mundo, atravesado por su propia lanza, sin alimento ni bebida.",
      "De ese sacrificio extremo emergieron las runas, susurros del cosmos que el Padre de Todos compartió con dioses y hombres.",
    ],
  },
  {
    slug: "proteccion-energetica-tecnicas-ancestrales",
    title: "Protección Energética: Técnicas Ancestrales del Norte",
    excerpt: "Rituales de limpieza con humo, bindrunes protectores y escudos áuricos heredados de la tradición nórdica.",
    category: "Protección Energética",
    date: "2026-04-28",
    readTime: "10 min",
    body: [
      "La protección energética no es superstición: es higiene espiritual. Aprende a crear un escudo invisible con runas, humo sagrado y palabras de poder.",
    ],
  },
  {
    slug: "interpretacion-de-suenos-simbolismo",
    title: "Interpretación de Sueños: El Lenguaje del Alma",
    excerpt: "Cómo descifrar los mensajes de tu inconsciente usando el simbolismo ancestral nórdico y arquetipos universales.",
    category: "Sueños",
    date: "2026-04-20",
    readTime: "7 min",
    body: [
      "Los sueños son cartas escritas por tu propia alma. La tradición nórdica los consideraba viajes del espíritu por los nueve mundos.",
    ],
  },
  {
    slug: "numeros-espejo-significado-espiritual",
    title: "Números Espejo: 11:11, 22:22 y su Significado Espiritual",
    excerpt: "Por qué ves repetidamente los mismos números y qué mensaje quiere transmitirte el universo.",
    category: "Números Espejo",
    date: "2026-04-14",
    readTime: "5 min",
    body: [
      "Cuando un número se repite ante tus ojos, no es casualidad. Es una sincronía, un guiño del tejido cósmico.",
    ],
  },
  {
    slug: "bindrunes-magia-sigilo-nordico",
    title: "Bindrunes: El Arte de Combinar Runas para Magia Sigilizada",
    excerpt: "Aprende a crear tus propios bindrunes para amor, protección, prosperidad y sabiduría.",
    category: "Runas",
    date: "2026-04-06",
    readTime: "9 min",
    body: [
      "Un bindrune es la fusión de varias runas en un único símbolo de poder concentrado, una llave personal hacia una intención específica.",
    ],
  },
  {
    slug: "brujeria-nordica-seidr",
    title: "Seidr: La Brujería Olvidada de los Pueblos Nórdicos",
    excerpt: "Una mirada profunda al Seidr, la magia chamánica practicada por las Völvas vikingas.",
    category: "Brujería",
    date: "2026-03-29",
    readTime: "11 min",
    body: [
      "Las Völvas eran las videntes del Norte, mujeres consagradas al arte del Seidr, capaces de tejer el destino con su voz y sus runas.",
    ],
  },
  {
    slug: "simbolismo-yggdrasil-arbol-mundo",
    title: "Yggdrasil: El Simbolismo del Árbol del Mundo",
    excerpt: "Los nueve mundos, las tres raíces y el sentido cosmológico del fresno sagrado nórdico.",
    category: "Simbolismo",
    date: "2026-03-22",
    readTime: "8 min",
    body: [
      "Yggdrasil sostiene los nueve mundos sobre sus ramas y raíces. Es el eje del cosmos, símbolo del eterno retorno y del equilibrio entre planos.",
    ],
  },
];
