import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <div className={style.header}>
      <div>
        <img src={Logo} alt="logo" width="50px" />
      </div>
      <div className={style.navbar}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/">Track</Link></li>
          <li><Link to="/">About us</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </div>
      <div>
        <Link to="/register">
          <button className={style.registerButton}>Register</button>
        </Link>
        <Link to="/login">
          <button className={style.loginButton}>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
