import React from 'react';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Editing from './Components/Editing';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/projects' element={ <Projects/> } />
                    <Route path='/editing' element={ <Editing/> } />
                    <Route path='/contact' element={ <Contact/> } />
                </Routes>
            </Router>
        </div>

        </>
    );
}

export default App;
