import { useState } from 'react'
import Header from './components/Header.jsx';
import { ConfiguratorContext } from './context/ConfiguratorContext'

function App() {

  const [parts, setParts] = useState([]);


  return (
    <>
      <Header />

      <ConfiguratorContext.Provider value={{parts, setParts}} >
        <div className="w-full flex">
          <div className="w-5/7 bg-red-300 h-191 border"></div>
          <div className="w-2/7 bg-blue-300 h-191 border"></div>
        </div>
      </ConfiguratorContext.Provider>

    </>
  )
}

export default App
