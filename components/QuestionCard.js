import React from "react";
import { useState } from "react";

export default function QuestionCard({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <div className="ques-card">
      <div className="question">{question}</div>

      <div className="answers-box">
        <div
          className={`answers answers-white`}
          onClick={() => handleAnswer(shuffledAnswers[0])}
        >
          {" "}
          {shuffledAnswers[0]}
        </div>
        <div
          className="answers answers-white"
          onClick={() => handleAnswer(shuffledAnswers[1])}
        >
          {" "}
          {shuffledAnswers[1]}
        </div>
        <div
          className="answers answers-white"
          onClick={() => handleAnswer(shuffledAnswers[2])}
        >
          {" "}
          {shuffledAnswers[2]}
        </div>
        <div
          className="answers answers-white"
          onClick={() => handleAnswer(shuffledAnswers[3])}
        >
          {" "}
          {shuffledAnswers[3]}
        </div>
      </div>
    </div>
  );
}
