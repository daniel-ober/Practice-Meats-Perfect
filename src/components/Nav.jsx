import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
  return (
    <header>
          <img
          src="https://i.imgur.com/VqPYDtJ.png"
          className="logo"
          alt="BBQ wars"
        />
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/new-event">New Event</Link> */}
      <Link to="/new-slip">New Scoring Slip</Link>
      {/* <Link to='/slips'>Slip Details</Link> */}
      <Link to="/judging-rules">Judging Rules</Link>
      <Link to="/about">About</Link>
    </nav>
    </header>
  );
}

export default Nav;
