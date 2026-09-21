import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { UserContext } from "../context/UserContext";

function Cart() {
  
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div>
      
    </div>
  )
}

export default Cart
