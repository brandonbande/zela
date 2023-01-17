import logo from './logo.jpg'; 
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <div>
            <nav className="navbar">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="80" height="80" />
                 </a>
                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">New Story</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
            </ul>
            </nav>
        </div>
    );
}

export default Navbar;