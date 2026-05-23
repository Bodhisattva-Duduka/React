import { useState } from 'react'
import Header from './Header.jsx'
import ProductsPage from './ProductsPage.jsx'
import Cart from './Cart.jsx'

function App() {
  const [products, setProducts] = useState([])

  return (
    <>
      <Header />
      <div className="flex" >
        <ProductsPage products={products} setProducts={setProducts} />
        <Cart products={products} setProducts={setProducts} />
      </div>
    </>
  )
}

export default App