function Competition(props) {
  const {
    name,
    status,
    date_1,
    date_1_start_time,
    date_1_end_time,
    date_2,
    date_2_start_time,
    date_2_end_time,
    location,
    street,
    city,
    state,
    zip,
    info,
    author_image,
    fan_image_1,
    fan_image_2,
    fan_image_3,
    fan_image_4,
    fan_image_5,
  } = props.slip.fields;

  return (
    <div className="competition-container">
      <div>
        <img src={author_image} className="competition-image" alt={name} />
      </div>
      <div className="competition-details">
        <h2>{}</h2>
        
      </div>
    </div>
  );
}

export default Competition;
