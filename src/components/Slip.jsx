import React from 'react'
import './Slip.css'

function Slip(props) {
  const {
    team,
    category,
    appearance,
    taste,
    tenderness,
    comments,
    imageURL,
  } = props.slip.fields;

  // const toggleButton [toggleFetch, setToggleFetch] = []

  return (
    <div className="slip-container">
      <div>
        <img
          src={imageURL ? imageURL : "https://i.imgur.com/7hymEVC.jpg"}
          className="slip-image"
          alt={category}
        />
      </div>
      <div className='slip-content'>
      <div className='slip-title'>
        <h2>{team}</h2>
        <h4>{category}</h4>
      </div>
      <div className="slip-details">
        <h5>Appearance: {appearance}</h5>
        <h5>Taste: {taste}</h5>
        <h5>Tenderness: {tenderness}</h5>
        <h5>Comments: {comments}</h5>
      </div>
        <div className='slip-button'>
          <button>Slip Details</button>
        </div>
      </div>
    </div>
  );
}

export default Slip;

// with kcbs weighting:
{
  /* <h5>Appearance: {appearance} ({appearance * 0.014} weighted)</h5>
<h5>Taste: {taste} ({taste * 0.05743} weighted)</h5>
<h5>Tenderness: {tenderness} ({tenderness * 0.02857} weighted)</h5> */
}
