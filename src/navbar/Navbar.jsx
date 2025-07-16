import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import style from './Navbar.module.css';

function Navbar(){
    return(
        <div className={style.header}>
            <div>
                <img src={Logo} alt='logo' width='50px'/>
            </div>
            <div className={style.navbar}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Track</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Contact</a></li>
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
    )
};
export default Navbar;