'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import { mockQuizzes } from '@/data/mockData';

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();
  const storyId = params.id as string;

  const quiz = mockQuizzes.find(q => q.storyId === storyId);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [stars, setStars] = useState(0);

  if (!quiz) {
    return <div>Quiz no encontrado</div>;
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (showResults) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleReview = () => {
    setShowResults(true);
    
    // Calculate stars
    let correctCount = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    // 1 star for 1 correct, 2 stars for 2 correct, 3 stars for all correct
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
    <div className="min-h-screen bg-amber-50 pb-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {quiz.questions.map((question, qIndex) => (
            <div key={question.id} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold font-nunito tracking-readable mb-6">
                PREGUNTA {qIndex + 1}
              </h2>
              
              <p className="text-xl font-poppins tracking-readable mb-6">
                {question.question}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {question.answers.map((answer, aIndex) => {
                  const isSelected = selectedAnswers[qIndex] === aIndex;
                  const isCorrect = aIndex === question.correctAnswer;
                  
                  let buttonClass = 'border-2 border-purple-300 bg-purple-50 hover:bg-purple-100';
                  
                  if (showResults) {
                    if (isSelected && isCorrect) {
                      buttonClass = 'bg-green-500 text-white border-green-600';
                    } else if (isSelected && !isCorrect) {
                      buttonClass = 'bg-red-500 text-white border-red-600';
                    } else if (isCorrect) {
                      buttonClass = 'bg-green-500 text-white border-green-600';
                    }
                  } else if (isSelected) {
                    buttonClass = 'bg-purple-200 border-purple-400';
                  }

                  return (
                    <button
                      key={aIndex}
                      onClick={() => handleAnswerSelect(qIndex, aIndex)}
                      className={`${buttonClass} py-4 px-6 rounded-lg font-nunito tracking-readable text-lg transition-colors flex items-center gap-2`}
                    >
                      <span>✓</span>
                      <span>{answer}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Action buttons */}
          {!showResults ? (
            <div className="flex justify-end">
              <button
                onClick={handleReview}
                className="bg-black text-white px-8 py-4 rounded-lg font-nunito tracking-readable text-xl hover:bg-gray-800 transition-colors flex items-center gap-2"
                disabled={selectedAnswers.length !== quiz.questions.length}
              >
                <span>✓</span>
                <span>REVISAR</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Stars display */}
              <div className="flex justify-center gap-2">
                <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl">
                  ↻
                </button>
                {[1, 2, 3].map((star) => (
                  <div
                    key={star}
                    className={`text-5xl ${star <= stars ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </div>
                ))}
                <button 
                  onClick={handleNext}
                  className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-3xl"
                >
                  →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Navigation showBack showHome showFavorites showSearch />
    </div>
  );
}