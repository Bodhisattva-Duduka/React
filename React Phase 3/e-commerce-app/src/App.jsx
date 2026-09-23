import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { CartContext } from "./context/CartContext";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductItem from "./components/Products/ProductItem";
import ProductsPage from "./components/Products/ProductsPage";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Cart from './components/Cart';
import Login from "./components/Login";
import AccountDetails from "./components/Account/AccountDetails";
import OrderDetails from "./components/Account/OrderDetails";
import Account from "./components/Account/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./components/Checkout";

function App() {
  const [userStatus, setUserStatus] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  return (
    <UserContext.Provider value={{ userStatus, setUserStatus , userDetails, setUserDetails}}>
      <CartContext.Provider value={{ cartItems, setCartItems, orders, setOrders}}>

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<ProductsPage />}>
              <Route index element={<Products />} />

              <Route path=":id" element={<ProductItem />} />
            </Route>

            <Route path="/categories/:category_name" element={<Categories />} />

            <Route path="/cart" element={<Cart/>} />

            <Route path="/login" element={<Login/>} />

            <Route element={<ProtectedRoute/>} >
            
              <Route path="/account" element={<Account/>}>
              
                <Route path="edit" element={<AccountDetails/>}/>

                <Route path="orders" element={<OrderDetails/>}/>

              </Route>
            
            </Route>

            <Route path="/checkout" element={<Checkout/>}/>

          </Routes>

      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
