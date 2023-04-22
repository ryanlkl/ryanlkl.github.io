import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
    return (
        <div id="navbar">
            <nav>
                <Link id="logo" to='/'>RYANLKL</Link>
                <ul id="links">
                    <li><Link className="links" to='projects'>Projects</Link></li>
                    <li><Link className="links" to='editing'>Editing</Link></li>
                    <li><Link className="links" to='contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
