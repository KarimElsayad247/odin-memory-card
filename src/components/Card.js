import React from "react";

export default function Card(props) {
  return (
    <div className="card" onClick={props.handleClick}>
      {props.content}
    </div>
  );
}
