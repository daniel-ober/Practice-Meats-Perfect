function Event(props) {
  const {
    name,
    dateStart,
    // dateEnd,
    location,
    street,
    city,
    state,
    zip,
    info,
    authorImage,
  } = props.event.fields;

  return (
    <div className="event-container">
      <div>
        <img src={authorImage} className="event-image" alt={name} />
      </div>
      <div className="event-details">
        <h2>{name}</h2>
        <h3>{dateStart}</h3>
        <h4>{location}</h4>
        <h4>{street} {city}, {state} {zip}</h4>
        <a href={info}>Click here for more details</a>
      </div>
    </div>
  );
}

export default Event;
