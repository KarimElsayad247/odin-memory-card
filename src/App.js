import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";

import "./App.css";

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
    // if the card is already clicked, reset score, and reset game (use effect)
    // if card is not already clicked, increase score by one, and set
    // high score to max current score and prev high socre.

    console.log("Card clicked once");

    // After each click anyway, shuffle the cards.
    setCards((prevCards) => {
      console.log("Inside set cards");
      const newCards = prevCards.map((card) => {
        if (card.id === cardId) {
          if (card.isClicked) {
            // do mistake logic
            console.log("Card already clicked");
          } else {
            // do score increase logic
            console.log("newly clicked card");
          }

          return { ...card, isClicked: true };
        }
        return { ...card };
      });
      // shuffle new cards array
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
      <CardsContainer content={cards} clickCard={clickCard} />
    </div>
  );
}

export default App;
