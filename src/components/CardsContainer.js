import React from "react";
import Card from "./Card";

export default function CardsContainer() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const cardElems = cards.map((card, i) => <Card number={card} key={i} />);

  return <section className="cards">{cardElems}</section>;
}
