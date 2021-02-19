import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";

function NewEvent(props) {
  const [name, setName] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [info, setInfo] = useState("");
  const [authorImage, setAuthorImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
        name,
        dateStart,
        dateEnd,
        location,
        street,
        city,
        state,
        zip,
        info,
        authorImage,
    };
    // console.log(fields)
    await axios.post(baseURL, { fields }, config);
    // props.setToggleFetch((curr) => !curr);
  };

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <h1>New Event</h1>
      <h6>Please fill out your event details below!</h6>
      <input
        id="name"
        type="text"
        value={name}
        placeholder="Event Name"
        onChange={(e) => setName(e.target.value)} />
        <input
        id="date-start"
        type="date"
        value={dateStart}
        placeholder="Start Date"
        onChange={(e) => setDateStart(e.target.value)} />
        <input
        id="date-end"
        type="date"
        value={dateEnd}
        placeholder="End Date"
        onChange={(e) => setDateEnd(e.target.value)} />
        <input
        id="location"
        type="text"
        value={location}
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)} />
        <input
        id="street"
        type="text"
        value={street}
        placeholder="Street (ie. 123 Main St.)"
        onChange={(e) => setStreet(e.target.value)} />
        <input
        id="city"
        type="text"
        value={city}
        placeholder="City"
        onChange={(e) => setCity(e.target.value)} />
        <input
        id="state"
        type="text"
        value={state}
        placeholder="State"
        onChange={(e) => setState(e.target.value)} />
        <input
        id="zip-code"
        type="text"
        value={zip}
        placeholder="Zip"
        onChange={(e) => setZip(e.target.value)} />
        <input
        id="info"
        type="text"
        value={info}
        placeholder="more info (url link)"
        onChange={(e) => setInfo(e.target.value)} />
        <input
        id="author-image"
        type="text"
        value={authorImage}
        placeholder="Event Image URL"
        onChange={(e) => setAuthorImage(e.target.value)} />
        <button className="submit-slip" type="submit">
        Submit
      </button>
      </form>
    )
}

export default NewEvent;