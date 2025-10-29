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
    image: "/stories/tortuga-liebre.jpg",
    contenidos: {
      primerCiclo: [
        // PANTALLA 1
        { text: "La", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "es", image: "" },
        { text: "lenta", image: "/pictograms/lenta.png" },
        { text: "", image: "" },

        // PANTALLA 2
        { text: "La", image: "" },
        { text: "liebre", image: "/pictograms/liebre.png" },
        { text: "corre", image: "" },
        { text: "rápido", image: "/pictograms/rapido.png" },
        { text: "", image: "" },

        // PANTALLA 3
        { text: "Compiten", image: "/pictograms/compiten.png" },
        { text: "en", image: "" },
        { text: "carrera", image: "/pictograms/carrera.png" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 4
        { text: "La", image: "" },
        { text: "liebre", image: "/pictograms/liebre.png" },
        { text: "duerme", image: "/pictograms/duerme.png" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 5
        { text: "La", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "camina", image: "/pictograms/camina.png" },
        { text: "y", image: "" },
        { text: "gana", image: "/pictograms/gana.png" },
      ],
      segundoCiclo: [
        // PANTALLA 1
        { text: "La", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "es", image: "" },
        { text: "lenta", image: "/pictograms/lenta.png" },
        { text: "pero", image: "" },
        { text: "constante", image: "/pictograms/constante.png" },
        { text: "", image: "" },

        // PANTALLA 2
        { text: "La", image: "" },
        { text: "liebre", image: "/pictograms/liebre.png" },
        { text: "corre", image: "" },
        { text: "rápido", image: "/pictograms/rapido.png" },
        { text: "pero se", image: "" },
        { text: "confía", image: "/pictograms/confia.png" },
        { text: "", image: "" },

        // PANTALLA 3
        { text: "Empiezan la", image: "" },
        { text: "carrera", image: "/pictograms/carrera.png" },
        { text: "juntos", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 4
        { text: "La", image: "" },
        { text: "liebre", image: "/pictograms/liebre.png" },
        { text: "se cansa y", image: "" },
        { text: "duerme", image: "/pictograms/duerme.png" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 5
        { text: "La", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "sigue", image: "" },
        { text: "camina", image: "/pictograms/camina.png" },
        { text: "sin parar y", image: "" },
        { text: "llega", image: "/pictograms/llega.png" },
        { text: "", image: "" },

        // PANTALLA 6
        { text: "Moraleja", image: "/pictograms/moraleja.png" },
        { text: "La", image: "" },
        { text: "constancia", image: "/pictograms/constancia.png" },
        { text: "vence a la", image: "" },
        { text: "prisa", image: "/pictograms/prisa.png" },
        { text: "", image: "" },
        { text: "", image: "" },
      ],
      tercerCiclo: [
        // PANTALLA 1
        { text: "Una", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "lenta pero", image: "" },
        { text: "persistente", image: "/pictograms/persistente.png" },
        { text: "desafía a una", image: "" },
        { text: "liebre", image: "/pictograms/liebre.png" },
        { text: "veloz", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 2
        { text: "La", image: "" },
        { text: "liebre", image: "/pictograms/liebre.png" },
        { text: "se", image: "" },
        { text: "adelanta", image: "/pictograms/adelanta.png" },
        { text: "rápidamente", image: "" },
        { text: "y se", image: "" },
        { text: "confía", image: "/pictograms/confia.png" },
        { text: "demasiado", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 3
        { text: "Decide", image: "" },
        { text: "dormir", image: "/pictograms/duerme.png" },
        { text: "un rato,", image: "" },
        { text: "pensando que", image: "" },
        { text: "ya ganó", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 4
        { text: "Mientras tanto,", image: "" },
        { text: "la", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "camina", image: "/pictograms/camina.png" },
        { text: "sin parar,", image: "" },
        { text: "paso a paso", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 5
        { text: "Al final, la", image: "" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "cruza la", image: "" },
        { text: "meta", image: "/pictograms/llega.png" },
        { text: "primero", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },
        { text: "", image: "" },

        // PANTALLA 6
        { text: "La", image: "" },
        { text: "moraleja", image: "/pictograms/moraleja.png" },
        { text: "la", image: "" },
        { text: "constancia", image: "/pictograms/constancia.png" },
        { text: "y el", image: "" },
        { text: "esfuerzo", image: "/pictograms/esfuerzo.png" },
        { text: "vencen a la", image: "" },
        { text: "velocidad", image: "/pictograms/velocidad.png" },
        { text: "sin", image: "" },
        { text: "disciplina", image: "/pictograms/disciplina.png" },
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