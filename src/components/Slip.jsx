import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom'
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

  const [scoreDetails, setScoreDetails] = useState(false)
  // const expand = () => {()}

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
        <div className="slip-title">
          <h2>{team}</h2>
          <h3>{category}</h3>
        </div>
        <div className='score-details' value={scoreDetails}>
          <h5>Appearance: {appearance}</h5>
          <h5>Taste: {taste}</h5>
          <h5>Tenderness: {tenderness}</h5>
        </div>
        <div className="slip-buttons">
          <Link to={`/new-slip`}>
            <button className='rate-dish-button'>Rate this dish!</button>
          </Link>
          <Link to={`/slips/${props.slip.id}`}>
            <button className='scoring-details-button'>Scoring Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slip;

// KCBS official score weighting:
{
  /* <h5>Appearance: {appearance} ({appearance * 0.014} weighted)</h5>
<h5>Taste: {taste} ({taste * 0.05743} weighted)</h5>
<h5>Tenderness: {tenderness} ({tenderness * 0.02857} weighted)</h5> */
}
