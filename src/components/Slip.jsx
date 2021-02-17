function Slip(props) {
  const {
    name,
    category,
    imageURL,
    appearance,
    taste,
    tenderness,
    notes,
  } = props.slip.fields;

  return (
    <div className='slip-container'>
      <img src={imageURL} className='slip-image' />
      <div className="slip-details">
        <h3>{name}</h3>
        <h4>{category}</h4>
        <h5>Appearance: {appearance}</h5>
        <h5>Taste: {taste}</h5>
        <h5>Tenderness: {tenderness}</h5>
        <h5>Judge Notes: {notes}</h5>
      </div>
    </div>
  );
}

export default Slip;
