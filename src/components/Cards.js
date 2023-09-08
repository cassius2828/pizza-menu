import React from "react";

export const Cards = ({ image, name, ingredients, price, isSoldOut }) => {
  return (
    <div className={isSoldOut ? " sold-out flex cards" : "flex cards"}>
      <div className="img-container">
        <img className="pizza-img" src={image} alt="" />
      </div>
      <div className="details">
        <h5>{name}</h5>
        <p> {ingredients}</p>
        <span className="fw5">{price}</span>
      </div>
    </div>
  );
};
