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
        { text: "La 1 ", image: "/pictograms/tortuga.png" },
        { text: "tortuga", image: "/pictograms/tortuga.png" },
        { text: "es lenta.", image: "/pictograms/lenta.png" },
        { text: "La liebre", image: "/pictograms/liebre.png" },
        { text: "corre rápido.", image: "/pictograms/corre.png" },
        { text: "Compiten en carrera.", image: "/pictograms/compiten.png" },
        { text: "Liebre duerme.", image: "/pictograms/duerme.png" },
        { text: "Tortuga gana.", image: "/pictograms/gana.png" }
      ],
      segundoCiclo: [
        { text: "La  2tortuga es lenta", image: "/pictograms/tortuga.png" },
        { text: "pero constante.", image: "/pictograms/constante.png" },
        { text: "La liebre corre rápido", image: "/pictograms/liebre.png" },
        { text: "pero se confía.", image: "/pictograms/confia.png" },
        { text: "Empiezan la carrera juntos.", image: "/pictograms/carrera.png" },
        { text: "Liebre duerme en el camino.", image: "/pictograms/duerme.png" },
        { text: "Tortuga sigue y gana.", image: "/pictograms/gana.png" }
      ],
      tercerCiclo: [
        { text: "Una  3 tortuga lenta pero persistente", image: "/pictograms/tortuga.png" },
        { text: "desafía a una liebre veloz.", image: "/pictograms/liebre.png" },
        { text: "La liebre se adelanta rápido", image: "/pictograms/adelanta.png" },
        { text: "y se confía demasiado.", image: "/pictograms/confia.png" },
        { text: "Mientras la liebre duerme cansada", image: "/pictograms/duerme.png" },
        { text: "la tortuga camina sin parar.", image: "/pictograms/camina.png" },
        { text: "Al final de la carrera", image: "/pictograms/carrera.png" },
        { text: "la tortuga llega primero.", image: "/pictograms/llega.png" },
        { text: "La moraleja es clara:", image: "/pictograms/moraleja.png" },
        { text: "la constancia vence a la prisa.", image: "/pictograms/constancia.png" },
        { text: "Nunca subestimes el esfuerzo lento.", image: "/pictograms/esfuerzo.png" }
      ]
    }
  },
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