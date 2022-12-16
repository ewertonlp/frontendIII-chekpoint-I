import { useState } from "react";

import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
        <h3 className="card__text">{`${props.card.nome} curte ${props.card.banda}`}</h3>
    </div>
  );
};

export default Card;
