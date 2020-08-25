import React from "react";
import {Link,NavLink} from "react-router-dom";

function Header()
{
    return (
        <nav className="navbar navbar-light navbar-expand fixed-top bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" src=""><img src="\assets\images\header\l1.png" alt="logo" height="40px" width="40px"/></Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink className="nav-link" to="/home">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/applications">Applications</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/explore">Explore</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;
