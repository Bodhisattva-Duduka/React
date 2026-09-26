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
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 px-4 pb-8">
        <ProductsPage products={products} setProducts={setProducts} />
        <div className="w-full max-w-90 lg:w-auto flex flex-col items-center">
          <Cart products={products} setProducts={setProducts} onCheckOut={setCheckout}/>
          {checkout && (
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-3 py-2 bg-purple-700 text-white rounded animate-[slideUp_0.3s_ease-out] z-50">
              Checked Out
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App