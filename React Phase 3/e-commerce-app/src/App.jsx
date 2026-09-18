import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { CartContext } from "./context/CartContext";
import { Routes , Route} from "react-router-dom";
import Navbar  from "./components/Navbar";
import Products from "./components/Products/Products";

function App() {

  const [userStatus, setUserStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <UserContext.Provider value={{userStatus, setUserStatus}}>
      <CartContext.Provider value={{cartItems, setCartItems}}>
      
      <Routes>
        <Route path="/products" element={<Products/>} />

      </Routes>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}



export default App
