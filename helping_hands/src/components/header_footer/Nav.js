import { Link } from 'react-router-dom';
import React from "react";

const Nav = () => {

    return (
        <nav className="Nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
                <li> <Link to="/customer">Wishers Info</Link> </li>
                <li> <Link to="/makewish">Make a wish</Link> </li>
            </ul>
            
        </nav>
        
    )
}

export default Nav
