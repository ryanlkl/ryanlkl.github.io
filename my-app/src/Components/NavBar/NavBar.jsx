import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {

    return (
        <div className="navbar">
            <nav>
                <Link id="logo" to='/'><span>RYAN</span><strong>LKL</strong></Link>
                <ul id="links">
                    <li><div><Link className="links" to='projects'>Projects</Link></div></li>
                    <li><div><Link className='links' to='contact'>Contact</Link></div></li>
                </ul>
            </nav>
        </div>
    )
}
