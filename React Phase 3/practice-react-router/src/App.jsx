import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import './App.css'

function App() {

  return (
    <div className="h-screen flex items-center justify-center">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h3>Error: 404   Page Not Found</h3>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
