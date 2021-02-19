import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import NewSlip from "./components/NewSlip";
import About from "./components/About";
import Footer from "./components/Footer";
import Rules from './components/Rules'
import Slip from './components/Slip'
// import Event from './components/Event'
// import NewEvent from './components/NewEvent'
import "./App.css";

function App() {
  const [slips, setSlips] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getSlips = async () => {
      const resp = await axios.get(baseURL, config);
      setSlips(resp.data.records);
    };
    getSlips();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <div className="slip-container">
          {slips.map((slip) => (
            <Slip slip={slip} key={slip.id} />
          ))}
        </div>
      </Route>
      {/* <Route path='/new-event'>
        <NewEvent 
        setToggleFetch={setToggleFetch} />
      </Route> */}
      <Route path="/new-slip">
        <NewSlip setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path='/judging-rules'>
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
