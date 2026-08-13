import { useState } from 'react'
import Header from './components/Header.jsx';
import { ConfiguratorContext } from './context/ConfiguratorContext'
import Display from './components/products/Display.jsx';
import Graphics from './components/products/Graphics.jsx';
import Memory from './components/products/Memory.jsx';
import Processor from './components/products/Processor.jsx';
import Storage from './components/products/Storage.jsx';
import Cart from './components/Cart.jsx';

function App() {

  const [parts, setParts] = useState([]);

  console.log(parts)
  return (
    <>
      <Header />

      <ConfiguratorContext.Provider value={{parts, setParts}} >
        <div className="w-full flex">
          <div className="w-6/8 bg-red-300 h-191 border flex flex-col items-center">
            <Display/>
            <Graphics/>
            <Memory/>
            <Processor/>
            <Storage/>
          </div>
          <div className="w-2/8 bg-blue-300 h-191 border">
            <h1 className="ml-3 text-2xl mb-3">Cart: </h1>
            <Cart/>
          </div>
        </div>
      </ConfiguratorContext.Provider>

    </>
  )
}

export default App
