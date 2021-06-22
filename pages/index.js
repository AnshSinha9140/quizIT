import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import loading from "../Animations/9329-loading.json";
import LottieAnimation from "../components/lottie";
import { useRouter } from "next/router";

export default function index() {
  //fetching data using useeffect
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, selectedCategory] = useState("");
  const [questionDifficulty, setQuestionDifficulty] = useState("");
  const [categories, setCategories] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const singnup = "Signup";
  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((response) => {
        setCategories(response.data.trivia_categories);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //for name
  const handleTypeChange = (event) => {
    setName(event.target.value);
  };
  //for category
  const handleCategoryChange = (event) => {
    selectedCategory(event.target.value);
  };
  // for difficulty
  const handleDifficultyChange = (event) => {
    setQuestionDifficulty(event.target.value);
  };
  // number of questions
  const handleAmountChange = (event) => {
    setNumberOfQuestions(event.target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/testing",
      query: {
        name,
        category,
        questionDifficulty,
        numberOfQuestions,
      },
    });
  };

  return categories.length > 0 ? (
    <div>
      <Header {...singnup} />
      <div className="welcome">
        <div className="main-div">
          <div className="name-div">
            <div>
              {" "}
              <h3 className="headings">Enter your Name</h3>
            </div>
            <div>
              {" "}
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleTypeChange}
              />
            </div>
          </div>

          <div className="category-div">
            <div>
              <h3 className = "headings">Select Category</h3>
            </div>
            <div>
              <select

                value={category}
                className="sel "
                onChange={handleCategoryChange}
              >
                {categories.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="diffculty-div">
            <div>
              <h3 className ="headings">Select difficulty level</h3>
            </div>
            <div>
              {" "}
              <select
              className="diff-sel"
                value={questionDifficulty}
                onChange={handleDifficultyChange}
              >
                <option>easy</option>
                <option>medium</option>
                <option>hard</option>
              </select>
            </div>
          </div>
          <div className="number-div">
            <div>
              <h3 className ="headings">Select number of questions</h3>
            </div>
            <div>
              <select className="num-sel" value={numberOfQuestions} onChange={handleAmountChange}>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
            </div>
          </div>
          <button onClick={onsubmit} className="btn bt bts">
            Start
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="lotties">
      <LottieAnimation lottie={loading} height={650} width={700} />
    </div>
  );
}
