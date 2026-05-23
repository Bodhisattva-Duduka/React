import { useState } from 'react'
import Header from './Header.jsx'
import ProductsPage from './ProductsPage.jsx'
import Cart from './Cart.jsx'

function App() {
  const [products, setProducts] = useState([])
  const [checkout, setCheckout] = useState(false)


  return (
    <>
      <Header />
      <div className="flex" >
        <ProductsPage products={products} setProducts={setProducts} />
        <div>
          <Cart products={products} setProducts={setProducts} onCheckOut={setCheckout}/>
          {checkout && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-3 py-2 bg-purple-700 text-white rounded animate-[slideUp_0.3s_ease-out]">
          Checked Out
        </div>
      )}
        </div>
      </div>
    </>
  )
}

export default App