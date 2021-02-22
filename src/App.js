import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import Nav from "./components/Nav";
import Slip from './components/Slip'
import SlipDetails from './components/SlipDetails'
import SlipForm from "./components/NewSlip";
import Rules from './components/Rules'
import About from "./components/About";
import Footer from "./components/Footer";
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
      <h3 className='page-header'>Top Rated</h3>
        <div className="slips-map">
          {slips.map((slip) => (
            <Slip slip={slip} key={slip.id} />
          ))}
        </div>
      </Route>
      <Route path="/new-slip">
      <h3 className='page-header'>New Score Slip</h3>
        <SlipForm setToggleFetch={setToggleFetch}/>
      </Route>
      <Route exact path='/slips/:id'>
        <SlipDetails slips={slips} />
      </Route>
      <Route path='/judging-rules'>
      <h3 className='page-header'>Judging Rules</h3>
        <Rules/>
      </Route>
      <Route path="/about">
      <h3 className='page-header'>About</h3>
        <About />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
