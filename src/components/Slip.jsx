function Slip(props) {
  const {
    team,
    category,
    imageURL,
    appearance,
    taste,
    tenderness,
    comments,
  } = props.slip.fields;

  return (
    <div className='slip-container'>
      <div>
        <img src={imageURL} className='slip-image' alt={category} />
      </div>
      <div className="slip-details">
        <h3>Team Number: {team}</h3>
        <h4>Category: {category}</h4>
        <h5>Appearance: {appearance} ({appearance * 0.014} weighted)</h5>
        <h5>Taste: {taste} ({taste * 0.05743} weighted)</h5>
        <h5>Tenderness: {tenderness} ({tenderness * 0.02857} weighted)</h5>
        <h5>Comments: {comments}</h5>
      </div>
    </div>
  );
}

export default Slip;
