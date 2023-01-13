import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function Router() {

    return (
        <Routes>
            <Route path='/Portfolio' element={ <Home /> } />;
            <Route path='/About' element={ <About /> } />;
            {/* <Route path='/Projects' element={ <Projects /> } /> */}
            {/* <Route path='/Skills' element={ <Skills /> } /> */}
            {/* <Route path='/Contacts' element={ <Contacts /> } /> */}
            <Route path='*' element={ <Home /> } />;
        </Routes>
    )
}

export default Router;