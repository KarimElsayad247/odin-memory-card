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

  const clickCard = (cardId) => {};

  return (
    <div className="App">
      <Header score="3" bestScore="5" />
      <CardsContainer content={cards} />
    </div>
  );
}

export default App;
