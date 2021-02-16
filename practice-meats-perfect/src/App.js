import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import { baseURL, config } from './services'
import Nav from './components/Nav'
import './App.css';

function App() {
  const [slips, setSlips] = useState([])

  useEffect(() => {
    const getSlips = async () => {
      const resp = await axios.get(baseURL, config);
      // console.log(resp.data.records)
      setSlips(resp.data.records)
    }
    getSlips()
  }, [])

  // console.log(process.env)
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <h3>HOME goes here</h3>
      </Route>
      <Route path='/new'>
        <h3>POST form goes here</h3>
      </Route>
      <Route path='/about'>
        <h3>ABOUT goes here</h3>
      </Route>
    </div>
  );
}

export default App;
