import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import countdown from "../Animations/65509-3-2-1-go.json";
import trophy from "../Animations/43444-trophy-animation.json";

import LottieAnimation from "../components/lottie";
import axios from "axios";
import QuestionCard from "../components/QuestionCard";

export default function testing() {
  const [bgColor, setBgcolor] = useState("answers-white");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();
  const yourname = router.query.name;
  const category = router.query.category;
  const difficulty = router.query.questionDifficulty;
  const numberOfQuestions = router.query.numberOfQuestions;
  const t = "multiple";

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${t}`
      )
      .then((resp) => {
        setQuestions(resp.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
      setcurrentQuestion(currentQuestion + 1);
    } else {
      console.log("false");
      setcurrentQuestion(currentQuestion + 1);
    }
  };

  return currentQuestion >= numberOfQuestions ? (
    <div className="score">
      <div>
        <LottieAnimation lottie={trophy} height={200} width={200} />
      </div>
      <div>
        <h4>
          Your score is {score} out of {numberOfQuestions}
        </h4>
      </div>
    </div>
  ) : questions.length > 0 ? (
    <div>
      <Header {...yourname} />
      <div className="score-div">Score: {score}</div>

      <QuestionCard
        handleAnswer={handleAnswer}
        data={questions[currentQuestion]}
      />
    </div>
  ) : (
    <div className="lotties">
      <LottieAnimation lottie={countdown} height={650} width={700} />
    </div>
  );
}
