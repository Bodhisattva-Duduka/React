import { useState } from "react"
import ToggleButton from "./ToggleButton";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(prev => prev + 1)
  }

  function decrement() {
    return setCount(prev => prev - 1)
  }

  return (
    <>
      <div className="flex h-100 justify-center items-center">
        <div className="flex justify-center items-center">
          <button className="w-fi bg-purple-500 text-4xl p-2 rounded  " onClick={increment}>+</button>
          <h1 className="w-fit bg-blue-500 text-4xl p-2">{count}</h1>
          <button className="w-fit bg-purple-500 text-4xl p-2 rounded  " onClick={decrement}>-</button>
        </div>
      </div>
      <div>
        <ToggleButton />
      </div>

    </>
  )
}

export default App
