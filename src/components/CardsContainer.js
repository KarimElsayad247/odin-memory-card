import React from "react";
import Card from "./Card";

export default function CardsContainer(props) {
  const cards = props.content;

  const cardElems = cards.map((card, i) => (
    <Card
      content={card.content}
      key={card.id}
      handleClick={() => props.clickCard(card.id)}
    />
  ));

  return <section className="cards">{cardElems}</section>;
}
