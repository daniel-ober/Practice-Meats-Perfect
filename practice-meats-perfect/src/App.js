import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css';

function App() {
  

  useEffect(() => {
    const getSlips = async () => {
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/slips`;
      const config = { 
        headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
      const resp = await axios.get(url, config);
      console.log(resp.data.records)
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
