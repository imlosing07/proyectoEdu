export interface Pictogram {
  text: string;
  image?: string;
}

export interface Story {
  id: string;
  title: string;
  category: string;
  content: Pictogram[];
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
    title: "TITULO DEL CUENTO",
    category: "realista",
    content: [
      { text: "A mi", image: "/pictograms/monkey.png" },
      { text: "le da", image: "/pictograms/fear.png" },
      { text: "la", image: "/pictograms/cloud.png" },
      { text: "y el", image: "/pictograms/lightning.png" },
      { text: "por eso", image: "/pictograms/thinking.png" },
      { text: "con su", image: "/pictograms/grandpa.png" },
      { text: "y su", image: "/pictograms/sister.png" },
    ],
  },
  {
    id: "2",
    title: "Oliver Twist",
    category: "categoria2",
    content: [
      { text: "Había", image: '' },
      { text: "una vez", image: '' },
      { text: "un niño", image: "/pictograms/boy.png" },
    ],
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

export const mockCategories = [
  { id: "1", name: "Clasicos", image: "/categories/forest-animals.jpg" },
  { id: "2", name: "Clasicos", image: "/categories/forest-animals.jpg" },
];