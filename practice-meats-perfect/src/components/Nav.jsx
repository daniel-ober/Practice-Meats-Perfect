import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/new'>New Judging Slip</Link>
            <Link to='/about'>About</Link>
        </nav>
    )
}

export default Nav;