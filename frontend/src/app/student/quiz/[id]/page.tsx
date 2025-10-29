'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import { mockQuizzes } from '@/data/mockData';
import { Check, X, RotateCw, ArrowRight, Star } from 'lucide-react';

export default function QuizPage() {
  const router = useRouter();
  const { id } = useParams();
  const storyId = id as string;

  const quiz = mockQuizzes.find(q => q.storyId === storyId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResults) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);

    // Avanzar automáticamente tras 1 segundo
    setTimeout(() => {
      if (isLastQuestion) {
        handleReview();
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    }, 800);
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
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setStars(0);
  };

  const handleNext = () => {
    router.push('/student/stories');
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-[#5CB8E4] flex flex-col items-center justify-center p-8">

        {/* Búho + Resultado */}
        <div className="mb-12">
          <div className="w-40 h-40 bg-white rounded-full shadow-2xl p-8 flex items-center justify-center">
            <img src="/home/logoSinFondo.png" alt="Búho" className="w-full h-full object-contain drop-shadow-md" />
          </div>
        </div>

        <h1 className="text-6xl font-black text-white drop-shadow-lg mb-16 tracking-widest">
          ¡GENIAL!
        </h1>

        {/* Estrellas */}
        <div className="flex gap-6 mb-16">
          {[1, 2, 3].map((star) => (
            <Star
              key={star}
              size={100}
              className={`transition-all duration-700 ${
                star <= stars 
                  ? 'text-yellow-400 fill-yellow-400 drop-shadow-2xl animate-bounce' 
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-8">
          <button
            onClick={handleReset}
            className="w-20 h-20 bg-[#FFB74D] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
          >
            <RotateCw size={48} className="text-white" />
          </button>

          <button
            onClick={handleNext}
            className="w-20 h-20 bg-[#4CAF50] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ArrowRight size={48} className="text-white" />
          </button>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-4 border-[#4CAF50] p-4">
          <Navigation showBack showHome showFavorites showSearch />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col">

      {/* Título */}
      <div className="flex flex-col items-center pt-12 pb-8 px-6">

        <h1 className="text-5xl md:text-6xl font-black text-white text-center tracking-widest drop-shadow-lg">
          PREGUNTA {currentQuestionIndex + 1}
        </h1>
      </div>

      {/* Pregunta actual */}
      <div className="flex-1 px-6 pb-32 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full">
          
          <p className="text-3xl md:text-4xl font-black text-[#1A3C5E] text-center mb-12 tracking-widest">
            {currentQuestion.question}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentQuestion.answers.map((answer, aIndex) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === aIndex;
              const isCorrect = aIndex === currentQuestion.correctAnswer;
              
              let buttonClass = 'bg-[#E8F5E9] border-4 border-[#4CAF50] hover:bg-[#C8E6C9]';
              
              if (isSelected) {
                buttonClass = isCorrect 
                  ? 'bg-[#4CAF50] text-white border-[#388E3C]' 
                  : 'bg-[#FF5252] text-white border-[#D32F2F]';
              }

              return (
                <button
                  key={aIndex}
                  onClick={() => handleAnswerSelect(aIndex)}
                  disabled={isSelected}
                  className={`
                    ${buttonClass}
                    py-8 px-10 rounded-2xl font-black text-1xl
                    tracking-widest transition-all duration-300
                    flex items-center justify-center gap-4 shadow-xl
                    ${!isSelected && 'hover:scale-105'}
                  `}
                >
                  {isSelected && isCorrect && <Check size={48} />}
                  {isSelected && !isCorrect && <X size={48} />}
                  <span>{answer}</span>
                </button>
              );
            })}
          </div>

          {/* Indicador de progreso */}
          <div className="flex justify-center gap-2 mt-12">
            {quiz.questions.map((_, idx) => (
              <div
                key={idx}
                className={`w-4 h-4 rounded-full transition-all ${
                  idx < currentQuestionIndex ? 'bg-[#4CAF50]' :
                  idx === currentQuestionIndex ? 'bg-[#FFB74D] scale-150' :
                  'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-4 border-[#4CAF50] p-4">
        <Navigation showBack showHome showFavorites showSearch />
      </div>
    </div>
  );
}