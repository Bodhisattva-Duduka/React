import { useState } from 'react'
import Header from './components/Header.jsx';
import { ConfiguratorContext } from './context/ConfiguratorContext'
import Display from './components/products/Display.jsx';
import Graphics from './components/products/Graphics.jsx';
import Memory from './components/products/Memory.jsx';
import Processor from './components/products/Processor.jsx';
import Storage from './components/products/Storage.jsx';

function App() {

  const [parts, setParts] = useState([]);

  console.log(parts)
  return (
    <>
      <Header />

      <ConfiguratorContext.Provider value={{parts, setParts}} >
        <div className="w-full flex">
          <div className="w-5/7 bg-red-300 h-191 border flex flex-col items-center">
            <Display/>
            <Graphics/>
            <Memory/>
            <Processor/>
            <Storage/>
          </div>
          <div className="w-2/7 bg-blue-300 h-191 border"></div>
        </div>
      </ConfiguratorContext.Provider>

    </>
  )
}

export default App
