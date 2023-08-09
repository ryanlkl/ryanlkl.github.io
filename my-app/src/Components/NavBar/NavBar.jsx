import { Link } from 'react-scroll';
import './NavBar.css'

export default function NavBar() {

    return (
        <div className="navbar">
            <nav>
                <Link id="logo" to='hometitle'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    ><span>RYAN</span><strong>LKL</strong>
                </Link>

                <ul id="links">
                    <li><div><Link className="links" to='projects'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link></div></li>
                    <li><div><Link className='links' to='resume'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>About Me</Link></div></li>
                    <li><div><Link className='links' to='contact-form'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Contact Me</Link></div></li>

                </ul>
            </nav>
        </div>
    )
}
