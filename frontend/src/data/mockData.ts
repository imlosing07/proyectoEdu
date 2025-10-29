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
  audioTone?: string; // Nuevo campo
  hasAudio?: boolean; // Nuevo campo
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
    image: "/stories/tortuga-liebre.jpg",
    contenidos: {
      primerCiclo: [
        // PANTALLA 1
        { text: "La", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "es", image: "" },
        { text: "lenta", image: "/pictograms/lenta.png" },
        { text: ".", image: "" },

        // PANTALLA 2
        { text: "La", image: "" },
        { text: "liebre", image: "/pictograms/liebre.png" },
        { text: "corre", image: "/pictograms/correr.png" },
        { text: "rápido", image: "/pictograms/rapido.png" },
        { text: ".", image: "" },

        // PANTALLA 3
        { text: "Compiten", image: "/pictograms/compiten.png" },
        { text: "en", image: "" },
        { text: "carrera", image: "/pictograms/carrera.png" },
        { text: ".", image: "" },
        { text: "", image: "" },

        // PANTALLA 4
        { text: "La", image: "" },
        { text: "liebre", image: "/pictograms/liebre.png" },
        { text: "duerme", image: "/pictograms/duerme.png" },
        { text: ".", image: "" },
        { text: "", image: "" },

        // PANTALLA 5
        { text: "La", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "sigue", image: "/pictograms/camina.png" },
        { text: "y", image: "" },
        { text: "gana", image: "/pictograms/gana.png" },
      ],
      segundoCiclo: [
        // PANTALLA 1
        { text: "La tortuga es", image: "/pictograms/tortuga.png" },
        { text: "lenta", image: "/pictograms/lenta.png" },
        { text: "pero constante", image: "/pictograms/constante.png" },
        { text: ".", image: "" },
        { text: "", image: "" },

        // PANTALLA 2
        { text: "La liebre corre", image: "/pictograms/liebre.png" },
        { text: "rápido", image: "/pictograms/rapido.png" },
        { text: "pero se confía", image: "/pictograms/confia.png" },
        { text: ".", image: "" },
        { text: "", image: "" },

        // PANTALLA 3
        { text: "Empiezan la", image: "/pictograms/carrera.png" },
        { text: "carrera juntos", image: "" },
        { text: ".", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 4
        { text: "La liebre se", image: "/pictograms/duerme.png" },
        { text: "cansa y duerme", image: "" },
        { text: ".", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 5
        { text: "La tortuga sigue", image: "/pictograms/camina.png" },
        { text: "sin parar", image: "/pictograms/persistente.png" },
        { text: "y llega primero", image: "/pictograms/llega.png" },
        { text: ".", image: "" },
        { text: "", image: "" },

        // PANTALLA 6
        { text: "Moraleja:", image: "/pictograms/moraleja.png" },
        { text: "w", image: "/pictograms/constancia.png" },
        { text: "vence a la prisa", image: "/pictograms/prisa.png" },
        { text: ".", image: "" },
        { text: "", image: "" },
      ],
      tercerCiclo: [
        // PANTALLA 1
        { text: "Una tortuga lenta", image: "/pictograms/tortuga.png" },
        { text: "pero persistente", image: "/pictograms/persistente.png" },
        { text: "desafía a una", image: "" },
        { text: "liebre veloz", image: "/pictograms/liebre.png" },
        { text: ".", image: "" },

        // PANTALLA 2
        { text: "La liebre se adelanta", image: "/pictograms/adelanta.png" },
        { text: "rápidamente y", image: "" },
        { text: "se confía demasiado", image: "/pictograms/confia.png" },
        { text: ".", image: "" },
        { text: "", image: "" },

        // PANTALLA 3
        { text: "Decide dormir", image: "/pictograms/duerme.png" },
        { text: "un rato, pensando", image: "" },
        { text: "que ya ganó", image: "" },
        { text: ".", image: "" },
        { text: "", image: "" },

        // PANTALLA 4
        { text: "Mientras tanto,", image: "" },
        { text: "la tortuga camina", image: "/pictograms/camina.png" },
        { text: "sin parar, paso", image: "" },
        { text: "a paso", image: "" },
        { text: ".", image: "" },

        // PANTALLA 5
        { text: "Al final,", image: "" },
        { text: "la tortuga cruza", image: "/pictograms/llega.png" },
        { text: "la meta primero", image: "" },
        { text: ".", image: "" },
        { text: "", image: "" },

        // PANTALLA 6
        { text: "La moraleja:", image: "/pictograms/moraleja.png" },
        { text: "la constancia y el", image: "/pictograms/esfuerzo.png" },
        { text: "esfuerzo vencen", image: "" },
        { text: "a la velocidad", image: "" },
        { text: "sin disciplina", image: "/pictograms/disciplina.png" },
      ]
    }
  }
];

export const mockQuizzes: Quiz[] = [
  {
    storyId: "1",
    questions: [
      {
        id: "q1",
        question: "SI...",
        answers: ["ALTERNATIVA A", "ALTERNATIVA B", "ALTERNATIVA C", "ALTERNATIVA D"],
        correctAnswer: 0,
      },
      {
        id: "q2",
        question: "SI...",
        answers: ["ALTERNATIVA A", "ALTERNATIVA B", "ALTERNATIVA C", "ALTERNATIVA D"],
        correctAnswer: 1,
      },
      {
        id: "q3",
        question: "SI...",
        answers: ["ALTERNATIVA A", "ALTERNATIVA B", "ALTERNATIVA C", "ALTERNATIVA D"],
        correctAnswer: 0,
      },
    ],
  },
];

export const categories = [
    { 
      id: '1', 
      name: 'Cuentos Clásicos y Fábulas', 
      image: '/categories/1.jpg', 
      stories: mockStories.filter(s => s.category === '1') 
    },
    { 
      id: '2', 
      name: 'Cuentos Realistas', 
      image: '/categories/realista.jpg', 
      stories: mockStories.filter(s => s.category === '2') 
    },
    { 
      id: '3', 
      name: 'Aventuras y Fantasía', 
      image: '/categories/fantasia.jpg', 
      stories: [] 
    },
    { 
      id: '4', 
      name: 'Cuentos de Valores', 
      image: '/categories/valores.jpg', 
      stories: [] 
    },
  ];