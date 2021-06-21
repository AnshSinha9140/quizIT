import React from "react";

export default function ScoreCard({ d: { score } }) {
  console.log(score);
  return (
    <div>
      <h2>Hey your Score is {score}</h2>
    </div>
  );
}
