import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Education from './Components/Education';



const App = (props) => {
  return (
    
    <BrowserRouter>
        <NavBar />
      <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/skills' element={<Skills />}></Route>
         <Route path='/About' element={<About />}></Route>
         <Route path='/projects' element={<Projects />}></Route>
         <Route path='/education' element={<Education />}></Route>
         <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;