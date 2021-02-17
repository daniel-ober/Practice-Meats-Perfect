import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/new/id'>New Judging Slip</Link>
            <Link to='/about/id'>About</Link>
        </nav>
    )
}

export default Nav;