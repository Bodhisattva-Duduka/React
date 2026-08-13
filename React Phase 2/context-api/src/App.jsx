import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';

function App() {

  return (
    <>
      <Header />

      <div className="w-full flex">
        <div className="w-5/7 bg-red-300 h-191 border"></div>
        <div className="w-2/7 bg-blue-300 h-191 border"></div>
      </div>

    </>
  )
}

export default App
