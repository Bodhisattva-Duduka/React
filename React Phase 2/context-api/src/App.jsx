import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <h1 className="text-3xl font-bold text-white">
        hi
      </h1>
    </div>
  )
}

export default App
