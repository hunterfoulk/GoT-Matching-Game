import React from "react";

const Card = props => {
  const { frontImg, backImg, flipped, onClick } = props;
  const img = flipped ? backImg : frontImg;

  return (
    // <div className={`card-container ${flipped ? "front" : "back"}`}>
    <div className="card" onClick={onClick}>
      <img src={img} alt="" />
    </div>
    // </div>
  );
};
export default Card;
