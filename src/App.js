import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import { baseURL, config } from './services'
import Nav from './components/Nav'
import Form from './components/Form'
import Slip from './components/Slip'
import './App.css';

function App() {
  const [slips, setSlips] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getSlips = async () => {
      const resp = await axios.get(baseURL, config);
      // console.log(resp.data.records)
      setSlips(resp.data.records)
    }
    getSlips()
  }, [toggleFetch]);

  // console.log(process.env)
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <div className='slips-container'>
          {slips.map((slip) => (
            <Slip slip={slip} key={slip.id}/>
          ))}
          <div className='slip-details'>
            
          </div>
        </div>
      </Route>
      <Route path='/new'>
          <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path='/about'>
        <h3>ABOUT goes here</h3>
      </Route>
    </div>
  );
}

export default App;
