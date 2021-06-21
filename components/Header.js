import { stringify } from "query-string";
import React from "react";

export default function Header(props) {
  var str = "";
  console.log(props);
  Object.keys(props).forEach((text) => {
    str += props[text];
  });

  console.log(str);
  return (
    <div className="header">
      <div>
        <h4>QuizIt</h4>
      </div>
      <div className="li-div">
        <ul>
          <li>
            <a>{str}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
