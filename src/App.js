import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import NewSlip from "./components/NewSlip";
import About from "./components/About";
import Footer from "./components/Footer";
import Rules from './components/Rules'
import Event from './components/Event'
import NewEvent from './components/NewEvent'
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      const resp = await axios.get(baseURL, config);
      setEvents(resp.data.records);
    };
    getEvents();
  }, [toggleFetch]);


  // <div className="App">
  // <Nav />
  // <Route exact path="/">
  //   <div className="slips-container">
  //     {slips.map((slip) => (
  //       <Slip slip={slip} key={slip.id} />
  //     ))}
  //   </div>
  // </Route>
  // <Route path='/rules'>
  //   <Rules/>
  // </Route>
  // <Route path="/new-slip">
  //   <SlipPost setToggleFetch={setToggleFetch} />
  // </Route>

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <div className="event-container">
          {events.map((event) => (
            <Event event={event} key={event.id} />
          ))}
        </div>
      </Route>
      <Route path='/new-event'>
        <NewEvent setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/new-slip">
        <NewSlip />
      </Route>
      <Route path='/rules'>
        <Rules/>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
