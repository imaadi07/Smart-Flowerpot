import React from "react";
import "../styles/Flowercard.css";

const FlowerCard = ({ image, name, description, moisture }) => {
  return (
    <div className="flower-card">
      {/* Flower Image */}
      <div
        className="flower-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Moisture Level Display */}
      <div className="flower-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="moisture-container">
          <label>Moisture Level:</label>
          <div className="moisture-bar">
            <div
              className="moisture-fill"
              style={{ width: `${moisture}%` }}
            ></div>
            <span>{moisture}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;
