import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Navbar from "./Navbar";

function Cart() {
  
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div>
      <Navbar/>
      <div>
        <div>
          {cartItems.map((item) => (
            <div>
              <div key={item.id}>
                {item. id}
                {item.title}
                {item.price}
                {item.thumbnail}
                {item.quantity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
