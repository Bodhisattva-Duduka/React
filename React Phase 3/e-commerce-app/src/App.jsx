import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { CartContext } from "./context/CartContext";
import { Routes } from "react-router";

function App() {

  const [userStatus, setUserStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <UserContext.Provider value={{userStatus, setUserStatus}}>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        
      </CartContext.Provider>
    </UserContext.Provider>
  );
}



export default App
