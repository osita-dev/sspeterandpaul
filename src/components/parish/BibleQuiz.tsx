import { useState } from "react";
import { BookOpen, CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";

const quizQuestions = [
  {
    question: "Which prophet said, 'Prepare the way of the Lord'?",
    options: ["Isaiah", "Jeremiah", "John the Baptist", "Elijah"],
    correctAnswer: 0,
    explanation: "Isaiah 40:3 - 'A voice cries out: In the wilderness prepare the way of the LORD.'",
  },
  {
    question: "How many weeks are in the liturgical season of Advent?",
    options: ["Three", "Four", "Five", "Six"],
    correctAnswer: 1,
    explanation: "Advent has four Sundays, lasting approximately four weeks before Christmas.",
  },
  {
    question: "What does the name 'Emmanuel' mean?",
    options: ["Prince of Peace", "God with us", "Mighty King", "Son of David"],
    correctAnswer: 1,
    explanation: "Matthew 1:23 - Emmanuel means 'God with us.'",
  },
];

export function BibleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const question = quizQuestions[currentQuestion];

  return (
    <section id="quiz" className="py-16 bg-gradient-to-br from-rose-900 to-rose-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Test Your Knowledge
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bible Quiz of the Week
          </h2>
          <p className="text-rose-200 max-w-xl mx-auto">
            Challenge yourself with 3 quick questions about Scripture and our faith.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {quizComplete ? (
              /* Results Screen */
              <div className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-800 mb-2">
                  Quiz Complete!
                </h3>
                <p className="text-4xl font-bold text-rose-700 mb-2">
                  {score} / {quizQuestions.length}
                </p>
                <p className="text-zinc-600 mb-6">
                  {score === quizQuestions.length
                    ? "Perfect score! You really know your faith! 🎉"
                    : score >= 2
                    ? "Great job! Keep growing in knowledge of the Word."
                    : "Keep studying! The Scriptures are a treasure to discover."}
                </p>
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-2 px-6 py-3 bg-rose-900 hover:bg-rose-800 text-white font-semibold rounded-lg mx-auto transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                  Try Again
                </button>
              </div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="h-2 bg-stone-100">
                  <div
                    className="h-full bg-amber-500 transition-all duration-300"
                    style={{
                      width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                    }}
                  />
                </div>

                <div className="p-6 md:p-8">
                  {/* Question Counter */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-zinc-500">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-rose-700">
                      Score: {score}
                    </span>
                  </div>

                  {/* Question */}
                  <h3 className="text-xl font-bold text-zinc-800 mb-6">
                    {question.question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3 mb-6">
                    {question.options.map((option, index) => {
                      const isSelected = selectedAnswer === index;
                      const isCorrect = index === question.correctAnswer;
                      const showCorrectness = showResult && (isSelected || isCorrect);

                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          disabled={showResult}
                          className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all ${
                            showCorrectness
                              ? isCorrect
                                ? "bg-green-100 border-2 border-green-500"
                                : isSelected
                                ? "bg-red-100 border-2 border-red-500"
                                : "bg-stone-50 border-2 border-stone-200"
                              : "bg-stone-50 border-2 border-stone-200 hover:border-rose-300 hover:bg-rose-50"
                          }`}
                        >
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              showCorrectness && isCorrect
                                ? "bg-green-500 text-white"
                                : showCorrectness && isSelected
                                ? "bg-red-500 text-white"
                                : "bg-stone-200 text-zinc-600"
                            }`}
                          >
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="flex-1 font-medium text-zinc-700">
                            {option}
                          </span>
                          {showCorrectness && isCorrect && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                          {showCorrectness && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {showResult && (
                    <div
                      className={`p-4 rounded-lg mb-6 animate-fade-in ${
                        selectedAnswer === question.correctAnswer
                          ? "bg-green-50 border border-green-200"
                          : "bg-amber-50 border border-amber-200"
                      }`}
                    >
                      <p className="text-sm text-zinc-700">
                        <strong>
                          {selectedAnswer === question.correctAnswer
                            ? "Correct! "
                            : "Not quite. "}
                        </strong>
                        {question.explanation}
                      </p>
                    </div>
                  )}

                  {/* Next Button */}
                  {showResult && (
                    <button
                      onClick={nextQuestion}
                      className="w-full px-6 py-3 bg-rose-900 hover:bg-rose-800 text-white font-semibold rounded-lg transition-colors"
                    >
                      {currentQuestion < quizQuestions.length - 1
                        ? "Next Question"
                        : "See Results"}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
