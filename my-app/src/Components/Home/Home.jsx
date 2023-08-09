import React from 'react';
import './Home.css';
import { Link } from 'react-scroll';

export default function Home() {
    return (
        <>
            <div className="hometitle">
                <h3>Welcome to</h3>
                <h2>RYANLKL'S </h2>
                <h1>PORTFOLIO</h1>
                <ul>
                    <li>Current BEng Mechanical Engineering Student</li>
                    <li>Aspiring Software Engineer</li>
                </ul>
                <Link
                    className="links"
                    to="contact-form"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><button className='contact-button' >Contact Me</button></Link>
            </div>
        </>
    )
}
