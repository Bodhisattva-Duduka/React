import { useState } from 'react'
import Header from './Header.jsx'
import ProductsPage from './ProductsPage.jsx'

function App() {
  const [products, setProducts] = useState([])

  return(
    <>
        <Header/>
        <ProductsPage products={products} setProducts={setProducts}/>
    </>
  )
}

export default App