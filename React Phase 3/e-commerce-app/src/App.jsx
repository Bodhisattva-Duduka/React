import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { CartContext } from "./context/CartContext";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductItem from "./components/Products/ProductItem";
import ProductsPage from "./components/Products/ProductsPage";
import Home from "./components/Home";
import Categories from "./components/Categories";

function App() {
  const [userStatus, setUserStatus] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [cartItems, setCartItems] = useState([]);

  return (
    <UserContext.Provider value={{ userStatus, setUserStatus }}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <CartContext.Provider value={{ userDetails, setUserDetails }}>

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<ProductsPage />}>
              <Route index element={<Products />} />

              <Route path=":id" element={<ProductItem />} />
            </Route>

            <Route path="/categories/:category_name" element={<Categories />} />
          </Routes>
          
        </CartContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
