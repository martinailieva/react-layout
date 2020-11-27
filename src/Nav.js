import './App.css';
import { Link } from 'react-router-dom'; 

function Nav() {
  return (
    <nav>
    <h3>Logo</h3>
    <ul className="nav-links">
    <Link to="/" className="nav-style">
    	<li>Home</li>
    </Link>
    <Link to="/about" className="nav-style">
    	<li>About</li>
    </Link>
    <Link to="/shop" className="nav-style">
    	<li>Shop</li>
    </Link>
    </ul>
    </nav>
  );
}

export default Nav;
