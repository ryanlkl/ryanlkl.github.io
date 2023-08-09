import React from 'react';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import NavBar from './Components/NavBar/NavBar';
import AboutMe from './Components/About Me/aboutMe';

function App() {
    return (
        <>
        <NavBar />
        <div className='container'>
            <div>
                <Home />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <AboutMe />
            </div>
            <div>
                <Contact />
            </div>
        </div>
        </>
    );
}

export default App;
