import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <Link to='/home'>
      <img
        src="https://i.imgur.com/l20aUwL.png"
        className="logo"
        alt="BBQ wars"
      />
      </Link>
      <nav>
        <Link to="/">Top Rated</Link>
        <Link to="/new-slip">New Scoring Slip</Link>
        <Link to="/judging-rules">Judging Rules</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Nav;
