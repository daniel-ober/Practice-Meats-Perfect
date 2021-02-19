import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div>
        <img
          src="https://i.imgur.com/VqPYDtJ.png"
          id="logo-header"
          alt="BBQ wars"
        />
      </div>
      <Link to="/">Home</Link>
      {/* <Link to="/new-event">New Event</Link> */}
      <Link to="/new-slip">New Scoring Slip</Link>
      <Link to="/judging-rules">Judging Rules</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Nav;
