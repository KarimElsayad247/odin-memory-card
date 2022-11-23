import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";

import "./App.css";

// Fisher-Yates shuffling
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cardsInitialArray = data.map((number, i) => {
    return {
      content: number,
      id: i,
      isClicked: false,
    };
  });
  const [cards, setCards] = useState(cardsInitialArray);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const clickCard = (cardId) => {
    // toggle the clicked status on the clicked card;
    console.log("Card clicked once");

    // After each click anyway, shuffle the cards.
    setCards((prevCards) => {
      console.log("Inside set cards");

      const newCards = prevCards.map((card) => {
        if (card.id === cardId) {
          if (card.isClicked) {
            console.log("Card already clicked");
          } else {
            console.log("newly clicked card");
          }
          return { ...card, isClicked: true };
        }
        return { ...card };
      });

      return newCards;
    });
  };

  // Calculates the score based on the amount of currently
  // currently clicked cards.
  useEffect(() => {
    setCurrentScore(
      cards.reduce((sum, card) => {
        return card.isClicked ? sum + 1 : sum;
      }, 0)
    );
  }, [cards]);

  // Sets the high score based on the values of current score and current high score.
  // The new high score is the highest number of both.
  useEffect(() => {
    setHighScore((prevHighScore) => Math.max(prevHighScore, currentScore));
  }, [currentScore]);

  return (
    <div className="App">
      <Header score={currentScore} bestScore={highScore} />
      <CardsContainer content={shuffle(cards)} clickCard={clickCard} />
    </div>
  );
}

export default App;
