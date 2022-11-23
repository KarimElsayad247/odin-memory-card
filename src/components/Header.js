import React from "react";

export default function Header(props) {
  return (
    <header>
      <div className="header-element" id="score">
        Score: {props.score}
      </div>
      <div className="header-element" id="best-score">
        Best score: {props.bestScore}
      </div>
    </header>
  );
}
