export interface Pictogram {
  text: string;
  image?: string;
}

export interface Story {
  id: string;
  title: string;
  category: string;
  image?: string;
  contenidos: {
    primerCiclo: Pictogram[];
    segundoCiclo: Pictogram[];
    tercerCiclo: Pictogram[];
  };
}

export interface Question {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: number;
}

export interface Quiz {
  storyId: string;
  questions: Question[];
}

export const mockStories: Story[] = [
  {
    id: "1",
    title: "La Tortuga y la Liebre",
    category: "1",
    image: "/stories/Tortuga-liebre.jpg",
    contenidos: {
      primerCiclo: [
        // PANTALLA 1
        { text: "Una", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "lenta", image: "/pictograms/lenta.png" },
        { text: "pero", image: "" },
        { text: "persistente", image: "/pictograms/persistente.png" },
        { text: "desafía", image: "/pictograms/desafiar.png" },
        { text: "a una", image: "" },
        { text: "liebre", image: "/pictograms/liebre.png" },
        { text: "veloz", image: "/pictograms/rapido.png" },

        // PANTALLA 2
        { text: "La", image: "" },
        { text: "liebre", image: "/pictograms/liebre.png" },
        { text: "se", image: "" },
        { text: "adelanta", image: "/pictograms/adelanta.png" },
        { text: "rápidamente", image: "/pictograms/rapido.png" },
        { text: "y se", image: "" },
        { text: "confía", image: "/pictograms/confia.png" },
        { text: "demasiado", image: "" },

        // PANTALLA 3
        { text: "Decide", image: "" },
        { text: "dormir", image: "/pictograms/duerme.png" },
        { text: "un rato", image: "" },
        { text: "pensando", image: "" },
        { text: "que ya", image: "" },
        { text: "ganó", image: "/pictograms/gana.png" },

        // PANTALLA 4
        { text: "Mientras", image: "" },
        { text: "tanto", image: "" },
        { text: "la", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "camina", image: "/pictograms/camina.png" },
        { text: "sin parar", image: "" },
        { text: "paso", image: "" },
        { text: "a paso", image: "" },

        // PANTALLA 5
        { text: "Al final", image: "" },
        { text: "la", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "cruza", image: "" },
        { text: "la", image: "" },
        { text: "meta", image: "/pictograms/meta.png" },
        { text: "primero", image: "/pictograms/primero.png" },

        // PANTALLA 6
        { text: "La", image: "" },
        { text: "moraleja", image: "/pictograms/moraleja.png" },
        { text: "es el", image: "" },
        { text: "esfuerzo", image: "/pictograms/esfuerzo.png" },
        { text: "vence", image: "" },
        { text: "a la", image: "" },
        { text: "velocidad", image: "/pictograms/rapido.png" },
        { text: "sin", image: "" },
        { text: "disciplina", image: "/pictograms/disciplina.png" },
      ],
      segundoCiclo: [
        // PANTALLA 1
        { text: "Una tortuga", image: "/pictograms/tortuga.png" },
        { text: "lenta pero", image: "/pictograms/lenta.png" },
        { text: "persistente", image: "/pictograms/persistente.png" },
        { text: "desafía", image: "/pictograms/desafiar.png" },
        { text: "a una liebre", image: "/pictograms/liebre.png" },
        { text: "veloz", image: "/pictograms/rapido.png" },

        // PANTALLA 2
        { text: "La liebre", image: "/pictograms/liebre.png" },
        { text: "se adelanta", image: "/pictograms/adelanta.png" },
        { text: "rápidamente", image: "/pictograms/rapido.png" },
        { text: "y se confía", image: "/pictograms/confia.png" },
        { text: "demasiado", image: "" },

        // PANTALLA 3
        { text: "Decide dormir", image: "/pictograms/duerme.png" },
        { text: "un rato", image: "" },
        { text: "pensando", image: "" },
        { text: "que ya ganó", image: "/pictograms/gana.png" },

        // PANTALLA 4
        { text: "Mientras tanto", image: "" },
        { text: "la tortuga", image: "/pictograms/tortuga.png" },
        { text: "camina", image: "/pictograms/camina.png" },
        { text: "sin parar", image: "" },
        { text: "paso a paso", image: "" },

        // PANTALLA 5
        { text: "Al final", image: "" },
        { text: "la tortuga", image: "/pictograms/tortuga.png" },
        { text: "cruza la", image: "" },
        { text: "meta", image: "/pictograms/meta.png" },
        { text: "primero", image: "/pictograms/primero.png" },

        // PANTALLA 6
        { text: "La moraleja", image: "/pictograms/moraleja.png" },
        { text: "es constancia", image: "" },
        { text: "y esfuerzo", image: "/pictograms/esfuerzo.png" },
        { text: "vencen a la", image: "" },
        { text: "velocidad", image: "/pictograms/rapido.png" },
        { text: "sin disciplina", image: "/pictograms/disciplina.png" },
      ],
      tercerCiclo: [
        // PANTALLA 1
        { text: "Una tortuga", image: "/pictograms/tortuga.png" },
        { text: "lenta pero", image: "" },
        { text: "persistente", image: "/pictograms/persistente.png" },
        { text: "desafía a una", image: "" },
        { text: "liebre veloz", image: "/pictograms/liebre.png" },

        // PANTALLA 2
        { text: "La liebre", image: "/pictograms/liebre.png" },
        { text: "se adelanta", image: "/pictograms/adelanta.png" },
        { text: "rápidamente", image: "" },
        { text: "y se confía", image: "" },
        { text: "demasiado", image: "" },

        // PANTALLA 3
        { text: "Decide dormir", image: "/pictograms/duerme.png" },
        { text: "un rato", image: "" },
        { text: "pensando que", image: "" },
        { text: "ya ganó", image: "" },

        // PANTALLA 4
        { text: "Mientras tanto", image: "" },
        { text: "la tortuga", image: "/pictograms/tortuga.png" },
        { text: "camina sin", image: "/pictograms/camina.png" },
        { text: "parar", image: "" },
        { text: "paso a paso", image: "" },

        // PANTALLA 5
        { text: "Al final", image: "" },
        { text: "la tortuga", image: "/pictograms/tortuga.png" },
        { text: "cruza la", image: "" },
        { text: "meta primero", image: "/pictograms/meta.png" },

        // PANTALLA 6
        { text: "La moraleja", image: "/pictograms/moraleja.png" },
        { text: "es constancia", image: "" },
        { text: "y esfuerzo", image: "/pictograms/esfuerzo.png" },
        { text: "vencen a la", image: "" },
        { text: "velocidad sin", image: "" },
        { text: "disciplina", image: "/pictograms/disciplina.png" },
      ],
    },
  },
  {
    id: "2",
    title: "Los Tres Cerditos",
    category: "1",
    image: "/stories/tres-cerditos.jpg",
    contenidos: {
      primerCiclo: [
        // PANTALLA 1
        { text: "Tres", image: "/pictograms/tres.png" },
        { text: "cerditos", image: "/pictograms/cerdito.png" },
        { text: "construyen", image: "/pictograms/construir.png" },
        { text: "sus", image: "" },
        { text: "casas", image: "/pictograms/casa.png" },

        // PANTALLA 2
        { text: "El primero", image: "/pictograms/uno.png" },
        { text: "hace su", image: "" },
        { text: "casa de", image: "" },
        { text: "paja", image: "/pictograms/paja.png" },
        { text: "rápidamente", image: "/pictograms/rapido.png" },

        // PANTALLA 3
        { text: "El segundo", image: "/pictograms/dos.png" },
        { text: "construye", image: "/pictograms/construir.png" },
        { text: "con", image: "" },
        { text: "madera", image: "/pictograms/madera.png" },

        // PANTALLA 4
        { text: "El tercero", image: "/pictograms/tres.png" },
        { text: "trabaja", image: "/pictograms/trabajar.png" },
        { text: "duro con", image: "" },
        { text: "ladrillos", image: "/pictograms/ladrillo.png" },

        // PANTALLA 5
        { text: "Llega el", image: "" },
        { text: "lobo", image: "/pictograms/lobo.png" },
        { text: "y sopla", image: "/pictograms/soplar.png" },
        { text: "las casas", image: "/pictograms/casa.png" },
        { text: "débiles", image: "/pictograms/debil.png" },

        // PANTALLA 6
        { text: "Solo la", image: "" },
        { text: "casa de", image: "" },
        { text: "ladrillos", image: "/pictograms/ladrillo.png" },
        { text: "resiste", image: "/pictograms/fuerte.png" },
        { text: "El trabajo", image: "/pictograms/trabajar.png" },
        { text: "duro da", image: "" },
        { text: "resultados", image: "/pictograms/exito.png" },
      ],
      segundoCiclo: [
        // PANTALLA 1
        { text: "Tres cerditos", image: "/pictograms/tres.png" },
        { text: "construyen", image: "/pictograms/construir.png" },
        { text: "sus casas", image: "/pictograms/casa.png" },

        // PANTALLA 2
        { text: "El primero", image: "/pictograms/uno.png" },
        { text: "hace su casa", image: "" },
        { text: "de paja", image: "/pictograms/paja.png" },
        { text: "rápidamente", image: "/pictograms/rapido.png" },

        // PANTALLA 3
        { text: "El segundo", image: "/pictograms/dos.png" },
        { text: "construye con", image: "/pictograms/construir.png" },
        { text: "madera", image: "/pictograms/madera.png" },

        // PANTALLA 4
        { text: "El tercero", image: "/pictograms/tres.png" },
        { text: "trabaja duro", image: "/pictograms/trabajar.png" },
        { text: "con ladrillos", image: "/pictograms/ladrillo.png" },

        // PANTALLA 5
        { text: "Llega el lobo", image: "/pictograms/lobo.png" },
        { text: "y sopla", image: "/pictograms/soplar.png" },
        { text: "las casas débiles", image: "/pictograms/debil.png" },

        // PANTALLA 6
        { text: "Solo la casa", image: "" },
        { text: "de ladrillos", image: "/pictograms/ladrillo.png" },
        { text: "resiste", image: "/pictograms/fuerte.png" },
        { text: "El trabajo duro", image: "/pictograms/trabajar.png" },
        { text: "da resultados", image: "/pictograms/exito.png" },
      ],
      tercerCiclo: [
        // PANTALLA 1
        { text: "Tres cerditos", image: "/pictograms/cerdito.png" },
        { text: "construyen", image: "/pictograms/construir.png" },
        { text: "sus casas", image: "" },

        // PANTALLA 2
        { text: "El primero", image: "" },
        { text: "hace su casa", image: "" },
        { text: "de paja", image: "/pictograms/paja.png" },
        { text: "rápidamente", image: "" },

        // PANTALLA 3
        { text: "El segundo", image: "" },
        { text: "construye con", image: "" },
        { text: "madera", image: "/pictograms/madera.png" },

        // PANTALLA 4
        { text: "El tercero", image: "" },
        { text: "trabaja duro", image: "/pictograms/trabajar.png" },
        { text: "con ladrillos", image: "/pictograms/ladrillo.png" },

        // PANTALLA 5
        { text: "Llega el lobo", image: "/pictograms/lobo.png" },
        { text: "y sopla las", image: "/pictograms/soplar.png" },
        { text: "casas débiles", image: "" },

        // PANTALLA 6
        { text: "Solo la casa", image: "" },
        { text: "de ladrillos", image: "/pictograms/ladrillo.png" },
        { text: "resiste", image: "" },
        { text: "El trabajo duro", image: "" },
        { text: "da resultados", image: "/pictograms/exito.png" },
      ],
    },
  },
  {
    id: "3",
    title: "La Cigarra y la Hormiga",
    category: "1",
    image: "/stories/cigarra-hormiga.jpg",
    contenidos: {
      primerCiclo: [
        // PANTALLA 1
        { text: "En verano", image: "/pictograms/verano.png" },
        { text: "la cigarra", image: "/pictograms/cigarra.png" },
        { text: "canta", image: "/pictograms/cantar.png" },
        { text: "y juega", image: "/pictograms/jugar.png" },
        { text: "feliz", image: "/pictograms/feliz.png" },

        // PANTALLA 2
        { text: "La hormiga", image: "/pictograms/hormiga.png" },
        { text: "trabaja", image: "/pictograms/trabajar.png" },
        { text: "duro", image: "" },
        { text: "guardando", image: "/pictograms/guardar.png" },
        { text: "comida", image: "/pictograms/comida.png" },

        // PANTALLA 3
        { text: "La cigarra", image: "/pictograms/cigarra.png" },
        { text: "se ríe", image: "/pictograms/reir.png" },
        { text: "de la", image: "" },
        { text: "hormiga", image: "/pictograms/hormiga.png" },
        { text: "trabajadora", image: "/pictograms/trabajar.png" },

        // PANTALLA 4
        { text: "Llega el", image: "" },
        { text: "invierno", image: "/pictograms/invierno.png" },
        { text: "con frío", image: "/pictograms/frio.png" },
        { text: "y nieve", image: "/pictograms/nieve.png" },

        // PANTALLA 5
        { text: "La cigarra", image: "/pictograms/cigarra.png" },
        { text: "tiene", image: "" },
        { text: "hambre", image: "/pictograms/hambre.png" },
        { text: "y frío", image: "/pictograms/frio.png" },

        // PANTALLA 6
        { text: "Pide ayuda", image: "/pictograms/ayudar.png" },
        { text: "a la hormiga", image: "/pictograms/hormiga.png" },
        { text: "Es mejor", image: "" },
        { text: "trabajar", image: "/pictograms/trabajar.png" },
        { text: "y planificar", image: "/pictograms/planificar.png" },
        { text: "el futuro", image: "/pictograms/futuro.png" },
      ],
      segundoCiclo: [
        // PANTALLA 1
        { text: "En verano", image: "/pictograms/verano.png" },
        { text: "la cigarra", image: "/pictograms/cigarra.png" },
        { text: "canta y juega", image: "/pictograms/cantar.png" },
        { text: "feliz", image: "/pictograms/feliz.png" },

        // PANTALLA 2
        { text: "La hormiga", image: "/pictograms/hormiga.png" },
        { text: "trabaja duro", image: "/pictograms/trabajar.png" },
        { text: "guardando", image: "/pictograms/guardar.png" },
        { text: "comida", image: "/pictograms/comida.png" },

        // PANTALLA 3
        { text: "La cigarra", image: "/pictograms/cigarra.png" },
        { text: "se ríe de", image: "/pictograms/reir.png" },
        { text: "la hormiga", image: "/pictograms/hormiga.png" },
        { text: "trabajadora", image: "" },

        // PANTALLA 4
        { text: "Llega el", image: "" },
        { text: "invierno", image: "/pictograms/invierno.png" },
        { text: "con frío", image: "/pictograms/frio.png" },
        { text: "y nieve", image: "/pictograms/nieve.png" },

        // PANTALLA 5
        { text: "La cigarra", image: "/pictograms/cigarra.png" },
        { text: "tiene hambre", image: "/pictograms/hambre.png" },
        { text: "y frío", image: "/pictograms/frio.png" },

        // PANTALLA 6
        { text: "Pide ayuda", image: "/pictograms/ayudar.png" },
        { text: "a la hormiga", image: "/pictograms/hormiga.png" },
        { text: "Es mejor", image: "" },
        { text: "trabajar y", image: "/pictograms/trabajar.png" },
        { text: "planificar", image: "/pictograms/planificar.png" },
        { text: "el futuro", image: "" },
      ],
      tercerCiclo: [
        // PANTALLA 1
        { text: "En verano", image: "/pictograms/verano.png" },
        { text: "la cigarra", image: "/pictograms/cigarra.png" },
        { text: "canta y juega", image: "" },
        { text: "feliz", image: "" },

        // PANTALLA 2
        { text: "La hormiga", image: "/pictograms/hormiga.png" },
        { text: "trabaja duro", image: "/pictograms/trabajar.png" },
        { text: "guardando", image: "" },
        { text: "comida", image: "" },

        // PANTALLA 3
        { text: "La cigarra", image: "/pictograms/cigarra.png" },
        { text: "se ríe de", image: "" },
        { text: "la hormiga", image: "" },
        { text: "trabajadora", image: "" },

        // PANTALLA 4
        { text: "Llega el", image: "" },
        { text: "invierno", image: "/pictograms/invierno.png" },
        { text: "con frío", image: "" },
        { text: "y nieve", image: "" },

        // PANTALLA 5
        { text: "La cigarra", image: "/pictograms/cigarra.png" },
        { text: "tiene hambre", image: "/pictograms/hambre.png" },
        { text: "y frío", image: "" },

        // PANTALLA 6
        { text: "Pide ayuda", image: "/pictograms/ayudar.png" },
        { text: "a la hormiga", image: "/pictograms/hormiga.png" },
        { text: "Es mejor", image: "" },
        { text: "trabajar y", image: "" },
        { text: "planificar", image: "" },
        { text: "el futuro", image: "" },
      ],
    },
  },
  {
    id: "4",
    title: "El Patito Feo",
    category: "1",
    image: "/stories/patito-feo.jpg",
    contenidos: {
      primerCiclo: [
        // PANTALLA 1
        { text: "Nace un", image: "" },
        { text: "patito", image: "/pictograms/patito.png" },
        { text: "diferente", image: "/pictograms/diferente.png" },
        { text: "de color", image: "" },
        { text: "gris", image: "/pictograms/gris.png" },

        // PANTALLA 2
        { text: "Sus hermanos", image: "/pictograms/hermanos.png" },
        { text: "se burlan", image: "/pictograms/burlar.png" },
        { text: "de él", image: "" },
        { text: "Es muy", image: "" },
        { text: "feo dicen", image: "/pictograms/triste.png" },

        // PANTALLA 3
        { text: "El patito", image: "/pictograms/patito.png" },
        { text: "se siente", image: "" },
        { text: "triste", image: "/pictograms/triste.png" },
        { text: "y solo", image: "/pictograms/solo.png" },

        // PANTALLA 4
        { text: "Decide irse", image: "/pictograms/caminar.png" },
        { text: "lejos de", image: "/pictograms/lejos.png" },
        { text: "su familia", image: "/pictograms/familia.png" },

        // PANTALLA 5
        { text: "Pasa el", image: "" },
        { text: "invierno", image: "/pictograms/invierno.png" },
        { text: "con frío", image: "/pictograms/frio.png" },
        { text: "y hambre", image: "/pictograms/hambre.png" },

        // PANTALLA 6
        { text: "En primavera", image: "/pictograms/primavera.png" },
        { text: "descubre", image: "" },
        { text: "que es un", image: "" },
        { text: "cisne", image: "/pictograms/cisne.png" },
        { text: "hermoso", image: "/pictograms/hermoso.png" },
        { text: "Todos somos", image: "" },
        { text: "especiales", image: "/pictograms/especial.png" },
      ],
      segundoCiclo: [
        // PANTALLA 1
        { text: "Nace un", image: "" },
        { text: "patito", image: "/pictograms/patito.png" },
        { text: "diferente", image: "/pictograms/diferente.png" },
        { text: "de color gris", image: "/pictograms/gris.png" },

        // PANTALLA 2
        { text: "Sus hermanos", image: "/pictograms/hermanos.png" },
        { text: "se burlan", image: "/pictograms/burlar.png" },
        { text: "de él", image: "" },
        { text: "Es muy feo", image: "/pictograms/triste.png" },
        { text: "dicen", image: "" },

        // PANTALLA 3
        { text: "El patito", image: "/pictograms/patito.png" },
        { text: "se siente", image: "" },
        { text: "triste y", image: "/pictograms/triste.png" },
        { text: "solo", image: "/pictograms/solo.png" },

        // PANTALLA 4
        { text: "Decide irse", image: "/pictograms/caminar.png" },
        { text: "lejos de", image: "/pictograms/lejos.png" },
        { text: "su familia", image: "/pictograms/familia.png" },

        // PANTALLA 5
        { text: "Pasa el", image: "" },
        { text: "invierno con", image: "/pictograms/invierno.png" },
        { text: "frío y", image: "/pictograms/frio.png" },
        { text: "hambre", image: "/pictograms/hambre.png" },

        // PANTALLA 6
        { text: "En primavera", image: "/pictograms/primavera.png" },
        { text: "descubre que", image: "" },
        { text: "es un cisne", image: "/pictograms/cisne.png" },
        { text: "hermoso", image: "/pictograms/hermoso.png" },
        { text: "Todos somos", image: "" },
        { text: "especiales", image: "/pictograms/especial.png" },
      ],
      tercerCiclo: [
        // PANTALLA 1
        { text: "Nace un", image: "" },
        { text: "patito", image: "/pictograms/patito.png" },
        { text: "diferente", image: "/pictograms/diferente.png" },
        { text: "de color gris", image: "" },

        // PANTALLA 2
        { text: "Sus hermanos", image: "/pictograms/hermanos.png" },
        { text: "se burlan", image: "" },
        { text: "de él", image: "" },
        { text: "Es muy feo", image: "" },
        { text: "dicen", image: "" },

        // PANTALLA 3
        { text: "El patito", image: "/pictograms/patito.png" },
        { text: "se siente", image: "" },
        { text: "triste y", image: "/pictograms/triste.png" },
        { text: "solo", image: "" },

        // PANTALLA 4
        { text: "Decide irse", image: "/pictograms/caminar.png" },
        { text: "lejos de", image: "" },
        { text: "su familia", image: "/pictograms/familia.png" },

        // PANTALLA 5
        { text: "Pasa el", image: "" },
        { text: "invierno con", image: "/pictograms/invierno.png" },
        { text: "frío y", image: "" },
        { text: "hambre", image: "/pictograms/hambre.png" },

        // PANTALLA 6
        { text: "En primavera", image: "/pictograms/primavera.png" },
        { text: "descubre que", image: "" },
        { text: "es un cisne", image: "/pictograms/cisne.png" },
        { text: "hermoso", image: "" },
        { text: "Todos somos", image: "" },
        { text: "especiales", image: "/pictograms/especial.png" },
      ],
    },
  },
];

export const mockQuizzes: Quiz[] = [
  // ... (sin cambios, ya estaban perfectos)
  {
    storyId: "1",
    questions: [
      {
        id: "q1",
        question: "¿Quién ganó la carrera?",
        answers: ["La tortuga", "La liebre", "Ambos", "Ninguno"],
        correctAnswer: 0,
      },
      {
        id: "q2",
        question: "¿Por qué perdió la liebre?",
        answers: ["Era lenta", "Se durmió", "Se perdió", "Tenía hambre"],
        correctAnswer: 1,
      },
      {
        id: "q3",
        question: "¿Qué nos enseña el cuento?",
        answers: ["La constancia vence", "Hay que correr", "Dormir es malo", "Las carreras son divertidas"],
        correctAnswer: 0,
      },
    ],
  },
  {
    storyId: "2",
    questions: [
      {
        id: "q1",
        question: "¿Cuántos cerditos había?",
        answers: ["Dos", "Tres", "Cuatro", "Cinco"],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: "¿De qué era la casa más fuerte?",
        answers: ["Paja", "Madera", "Ladrillos", "Papel"],
        correctAnswer: 2,
      },
      {
        id: "q3",
        question: "¿Qué hizo el lobo?",
        answers: ["Ayudó", "Sopló las casas", "Se fue", "Durmió"],
        correctAnswer: 1,
      },
    ],
  },
  {
    storyId: "3",
    questions: [
      {
        id: "q1",
        question: "¿Qué hacía la cigarra en verano?",
        answers: ["Trabajar", "Cantar y jugar", "Dormir", "Guardar comida"],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: "¿Qué hacía la hormiga?",
        answers: ["Cantar", "Jugar", "Guardar comida", "Dormir"],
        correctAnswer: 2,
      },
      {
        id: "q3",
        question: "¿Qué pasó en invierno?",
        answers: ["La cigarra tenía comida", "La hormiga tuvo hambre", "La cigarra tenía hambre", "Todos jugaron"],
        correctAnswer: 2,
      },
    ],
  },
  {
    storyId: "4",
    questions: [
      {
        id: "q1",
        question: "¿Por qué el patito era diferente?",
        answers: ["Era pequeño", "Era gris", "Era amarillo", "Era grande"],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: "¿Qué decidió hacer el patito?",
        answers: ["Quedarse", "Irse lejos", "Pelear", "Esconderse"],
        correctAnswer: 1,
      },
      {
        id: "q3",
        question: "¿Qué descubrió en primavera?",
        answers: ["Era un pato", "Era un cisne", "Era un pollo", "Era un ganso"],
        correctAnswer: 1,
      },
    ],
  },
];

export const categories = [
  {
    id: '1',
    name: 'Cuentos Clásicos y Fábulas',
    image: '/categories/cat1.jpg',
    stories: mockStories.filter(s => s.category === '1')
  },
  {
    id: '2',
    name: 'Animales y Naturaleza',
    image: '/categories/2.jpg',
    stories: mockStories.filter(s => s.category === '2')
  },
  {
    id: '3',
    name: 'Familia y Amigos',
    image: '/categories/3.jpg',
    stories: mockStories.filter(s => s.category === '3')
  },
  {
    id: '4',
    name: 'Rutinas Diarias',
    image: '/categories/4.jpg',
    stories: mockStories.filter(s => s.category === '4')
  },
];