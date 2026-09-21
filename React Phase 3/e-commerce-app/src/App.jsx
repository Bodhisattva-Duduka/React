import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { CartContext } from "./context/CartContext";
import { Routes , Route} from "react-router-dom";
import Navbar  from "./components/Navbar";
import Products from "./components/Products/Products";
import ProductItem from "./components/Products/ProductItem";
import ProductsPage from "./components/Products/ProductsPage";
import Home from "./components/Home";

function App() {

  const [userStatus, setUserStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <UserContext.Provider value={{userStatus, setUserStatus}}>
      <CartContext.Provider value={{cartItems, setCartItems}}>
      
      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/products" element={<ProductsPage/>}>

          <Route index element={<Products/>} />

          <Route path=":id" element={<ProductItem/>}/>

        </Route>


      </Routes>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}



export default App
