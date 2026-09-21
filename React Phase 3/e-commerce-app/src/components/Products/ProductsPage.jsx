import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

function ProductsPage() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default ProductsPage
