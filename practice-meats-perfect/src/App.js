import Nav from './components/Nav'
import { Route } from 'react-router-dom'
import './App.css';

function App() {
  console.log(process.env)
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
