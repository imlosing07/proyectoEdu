'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import { mockQuizzes } from '@/data/mockData';

export default function QuizPage() {
  const router = useRouter();
  const { id } = useParams();
  const storyId = id as string;

  const quiz = mockQuizzes.find(q => q.storyId === storyId);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [stars, setStars] = useState(0);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-[#5CB8E4] flex items-center justify-center p-8">
        <p className="text-3xl font-black text-white drop-shadow-lg">Quiz no encontrado</p>
      </div>
    );
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (showResults) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleReview = () => {
    setShowResults(true);
    
    let correctCount = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    setStars(correctCount);
  };

  const handleReset = () => {
    setSelectedAnswers([]);
    setShowResults(false);
    setStars(0);
  };

  const handleNext = () => {
    router.push('/student/stories');
  };

  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col">

      {/* Búho + Título */}
      <div className="flex flex-col items-center pt-12 pb-8 px-6">
        <div className="mb-8">
          <div className="w-32 h-32 bg-white rounded-full shadow-2xl p-6 flex items-center justify-center">
            <img
              src="/owl-reading.png"
              alt="Búho lector"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-white text-center tracking-widest drop-shadow-lg">
          PREGUNTAS
        </h1>
      </div>

      {/* Preguntas */}
      <div className="flex-1 px-6 pb-32">
        <div className="max-w-4xl mx-auto space-y-8">
          {quiz.questions.map((question, qIndex) => (
            <div key={question.id} className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-3xl font-black text-[#1A3C5E] mb-6 tracking-widest">
                PREGUNTA {qIndex + 1}
              </h2>
              
              <p className="text-2xl md:text-3xl font-black text-[#1A3C5E] mb-8 tracking-widest">
                {question.question}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.answers.map((answer, aIndex) => {
                  const isSelected = selectedAnswers[qIndex] === aIndex;
                  const isCorrect = aIndex === question.correctAnswer;
                  
                  let buttonClass = 'bg-[#E8F5E9] border-4 border-[#4CAF50] hover:bg-[#C8E6C9]';
                  
                  if (showResults) {
                    if (isSelected && isCorrect) {
                      buttonClass = 'bg-[#4CAF50] text-white border-[#388E3C]';
                    } else if (isSelected && !isCorrect) {
                      buttonClass = 'bg-[#FF5252] text-white border-[#D32F2F]';
                    } else if (isCorrect) {
                      buttonClass = 'bg-[#4CAF50] text-white border-[#388E3C]';
                    }
                  } else if (isSelected) {
                    buttonClass = 'bg-[#A5D6A7] border-[#66BB6A]';
                  }

                  return (
                    <button
                      key={aIndex}
                      onClick={() => handleAnswerSelect(qIndex, aIndex)}
                      disabled={showResults}
                      className={`
                        ${buttonClass}
                        py-6 px-8 rounded-2xl font-black text-xl md:text-2xl
                        tracking-widest transition-all duration-300
                        flex items-center justify-center gap-3 shadow-lg
                        ${!showResults && 'hover:scale-105'}
                      `}
                    >
                      <span>{answer}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Botones de acción */}
          {!showResults ? (
            <div className="flex justify-center">
              <button
                onClick={handleReview}
                disabled={selectedAnswers.length !== quiz.questions.length}
                className={`
                  bg-[#4CAF50] text-white px-12 py-6 rounded-full
                  font-black text-2xl tracking-widest shadow-xl
                  flex items-center gap-3 transition-all duration-300
                  ${selectedAnswers.length === quiz.questions.length 
                    ? 'hover:bg-[#43A047] hover:scale-105' 
                    : 'opacity-60 cursor-not-allowed'
                  }
                `}
              >
                <span>Check</span>
                <span>REVISAR</span>
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-6 py-8">
              {/* Repetir */}
              <button
                onClick={handleReset}
                className="w-16 h-16 bg-[#FFB74D] rounded-full shadow-xl flex items-center justify-center text-4xl hover:scale-110 transition-transform"
              >
                Repeat
              </button>

              {/* Estrellas */}
              <div className="flex gap-3">
                {[1, 2, 3].map((star) => (
                  <div
                    key={star}
                    className={`text-6xl md:text-7xl transition-all duration-500 ${
                      star <= stars 
                        ? 'text-yellow-400 drop-shadow-lg animate-bounce' 
                        : 'text-gray-300'
                    }`}
                  >
                    Star
                  </div>
                ))}
              </div>

              {/* Siguiente */}
              <button
                onClick={handleNext}
                className="w-16 h-16 bg-[#4CAF50] rounded-full shadow-xl flex items-center justify-center text-4xl hover:scale-110 transition-transform"
              >
                Right Arrow
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navegación inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-4 border-[#4CAF50] p-4">
        <Navigation showBack showHome showFavorites showSearch />
      </div>
    </div>
  );
}