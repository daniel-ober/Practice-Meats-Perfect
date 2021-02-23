import React from "react";
import { Link } from "react-router-dom";
import "./Slip.css";

function Slip(props) {
  const {
    team,
    category,
    appearance,
    taste,
    tenderness,
    imageURL,
  } = props.slip.fields;

  const weightedAppearance = appearance * (0.015 * 100).toFixed(1);
  const weightedTaste = taste * (0.05 * 100).toFixed(1);
  const weightedTenderness = tenderness * (0.035 * 100).toFixed(1);
  const weightedTotal = (
    (weightedAppearance + weightedTaste + weightedTenderness) *
    0.1
  ).toFixed(1);

  return (
    <div className="slip-container">
      <div>
        <img
          src={imageURL ? imageURL : "https://i.imgur.com/7hymEVC.jpg"}
          className="slip-image"
          alt={category}
        />
      </div>
      <div className="slip-content">
        <div className="slip-header">
          <h2 className="title">{team}</h2>
          <h3 className="category">{category}</h3>
        </div>
        <div className="weighted-total-container">
          <div className="overall">Rating: {weightedTotal} / 10</div>
        </div>
        <div className="score-details">
          <h5 className="appearance">Appearance: {appearance}</h5>
          <h5 className="taste">Taste: {taste}</h5>
          <h5 className="tenderness">Tenderness: {tenderness}</h5>
        </div>
        <div className="slip-buttons">
          <Link to={`/slips/${props.slip.id}`}>
            <button className="scoring-details-button">Scoring Details</button>
          </Link>
          <Link to={`/new-slip/${props.slip.id}`}>
            <button className="rate-dish-button">Submit Your Rating!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slip;
