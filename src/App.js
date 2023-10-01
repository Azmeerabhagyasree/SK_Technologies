import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Navbar from './MyComponents/Navbar';
import Home from './MyComponents/Home';
import Visitors from './MyComponents/Visitors';
import Courses from './MyComponents/Courses';
import Contact from  './MyComponents/Contact';
import Error from './MyComponents/Error'
function App() {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                   <Route exact path="/" element={<Home />} />  
                    <Route path="/visitors" element={<Visitors />} />
                    <Route path="/courses" element={<Courses />} />
                   <Route path="/contact" element={<Contact />} />
                    <Route path='*' element={<Error />} />

                 </Routes>
            </BrowserRouter> 
        </>
    );
}
export default App;
