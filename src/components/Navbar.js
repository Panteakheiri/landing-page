import React from 'react';
import logo from "../images/logo2.jpg";
import Styles from "./Navbar.module.css";
import {Link} from "react-router-dom"


const Navbar = () => {
    return (
        <header className={Styles.header}>
            <div>
                <ul className={Styles.lists}>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/">About Us</Link></li>
                </ul>
            </div>
            <div>
                <img src={logo} alt="logo" className={Styles.logo}/>
            </div>
        </header>

    );
};

export default Navbar;