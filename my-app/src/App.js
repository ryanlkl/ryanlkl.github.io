import React from 'react';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
        <div className='container'>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/projects' element={ <Projects/> } />
                    <Route path='/contact' element={ <Contact/> } />
                </Routes>
            </Router>
        </div>

        </>
    );
}

export default App;
