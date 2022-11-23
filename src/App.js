import { useState } from "react";
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

  const clickCard = (cardId) => {
    // toggle the clicked status on the clicked card;
    // if the card is already clicked, reset score, and reset game (use effect)
    // if card is not already clicked, increase score by one, and set
    // high score to max current score and prev high socre.

    // After each click anyway, shuffle the cards.
    setCards((prevCards) => {
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

  return (
    <div className="App">
      <Header score="3" bestScore="5" />
      <CardsContainer content={cards} clickCard={clickCard} />
    </div>
  );
}

export default App;
