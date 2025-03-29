import React from "react";
import "../styles/Flowercard.css";

const FlowerCard = ({ image, name, description }) => {
  return (
    <div className="flower-card">
      <div
        className="flower-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flower-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FlowerCard;
