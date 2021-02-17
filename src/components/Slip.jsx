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
    <div className="slip">
      <h3>{name}</h3>
      <h4>{category}</h4>
      <img src={imageURL} />
      <h5>Appearance: {appearance}</h5>
      <h5>Taste: {taste}</h5>
      <h5>Tenderness: {tenderness}</h5>
      <h5>Judge Notes: {notes}</h5>
    </div>
  );
}

export default Slip;
