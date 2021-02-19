// import axios from "axios";
// import { useState } from "react";
// import { baseURL, config } from "../services";

// function NewEvent(props) {
//   const [author, setAuthor] = useState("");
//   const [email, setEmail] = useState("");
//   const [event, setEvent] = useState("");
//   const [dateStart, setDateStart] = useState("");
//   const [dateEnd, setDateEnd] = useState("");
//   const [location, setLocation] = useState("");
//   const [street, setStreet] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [zip, setZip] = useState("");
//   const [info, setInfo] = useState("");
//   const [authorImage, setAuthorImage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fields = {
//       author,
//       email,
//       event,
//       dateStart,
//       dateEnd,
//       location,
//       street,
//       city,
//       state,
//       zip,
//       info,
//       authorImage,
//     };
//     // console.log(fields)
//     await axios.post(baseURL, { fields }, config);
//     props.setToggleFetch((curr) => !curr);
//   };

//   return (
//     <form className="event-form" onSubmit={handleSubmit}>
//       <h1>New Event</h1>
//       <h6>Please fill out your event details below!</h6>
//       <input
//         id="author"
//         type="text"
//         value={author}
//         placeholder="Your Name"
//         onChange={(e) => setAuthor(e.target.value)}
//       />
//       <br />
//       <input
//         id="email"
//         type="email"
//         value={email}
//         placeholder="Your Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <input
//         id="event"
//         type="text"
//         value={event}
//         placeholder="Event Name"
//         onChange={(e) => setEvent(e.target.value)}
//       />
//       <br />
//       <input
//         id="date-start"
//         type="date"
//         value={dateStart}
//         placeholder="Start Date"
//         onChange={(e) => setDateStart(e.target.value)}
//       />
//       <br />
//       <input
//         id="date-end"
//         type="date"
//         value={dateEnd}
//         placeholder="End Date"
//         onChange={(e) => setDateEnd(e.target.value)}
//       />
//       <br />
//       <input
//         id="location"
//         type="text"
//         value={location}
//         placeholder="Location"
//         onChange={(e) => setLocation(e.target.value)}
//       />
//       <br />
//       <input
//         id="street"
//         type="text"
//         value={street}
//         placeholder="Street (ie. 123 Main St.)"
//         onChange={(e) => setStreet(e.target.value)}
//       />
//       <br />
//       <input
//         id="city"
//         type="text"
//         value={city}
//         placeholder="City"
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <br />
//       <input
//         id="state"
//         type="text"
//         value={state}
//         placeholder="State"
//         onChange={(e) => setState(e.target.value)}
//       />
//       <br />
//       <input
//         id="zip-code"
//         type="text"
//         value={zip}
//         placeholder="Zip"
//         onChange={(e) => setZip(e.target.value)}
//       />
//       <br />
//       <input
//         id="info"
//         type="text"
//         value={info}
//         placeholder="more info (url link)"
//         onChange={(e) => setInfo(e.target.value)}
//       />
//       <br />
//       <input
//         id="author-image"
//         type="url"
//         value={authorImage}
//         placeholder="Event Image URL"
//         onChange={(e) => setAuthorImage(e.target.value)}
//       />
//       <br />
//       <button className="submit-event" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default NewEvent;
