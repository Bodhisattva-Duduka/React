import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { UserContext } from "../context/UserContext";
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
              <div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
