import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";
// imports will include: baseURL and config from services folder, useState from React, and axios for my post

function Form(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [appearance, setAppearance] = useState("");
  const [taste, setTaste] = useState("");
  const [tenderness, setTenderness] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      category,
      imageURL,
      appearance,
      taste,
      tenderness,
      notes,
    };
    // console.log(fields)
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Judging Slip</h1>
      <input
        id="name"
        type="text"
        value={name}
        placeholder="Team/Restaurant Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        id="category"
        type="text"
        value={category}
        placeholder="Meat Category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        id="imageURL"
        type="text"
        value={imageURL}
        placeholder="Image URL"
        onChange={(e) => setImageURL(e.target.value)}
      />
      <input
        id="appearance"
        type="text"
        value={appearance}
        placeholder="Appearance (score 1-9)"
        onChange={(e) => setAppearance(e.target.value)}
      />
      <input
        id="taste"
        type="text"
        value={taste}
        placeholder="Taste (score 1-9)"
        onChange={(e) => setTaste(e.target.value)}
      />
      <input
        id="tenderness"
        type="text"
        value={tenderness}
        placeholder="Tenderness (score 1-9)"
        onChange={(e) => setTenderness(e.target.value)}
      />
      <input
        id="notes"
        type="text"
        value={notes}
        placeholder="Notes"
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

// set handleSubmit for the fields listed above for when form is submitted.
// set axios post with props.toggleFetch

// return form with handleSubmit, once submitted. Input values should match field names. Ensure that onChange waits for event.
