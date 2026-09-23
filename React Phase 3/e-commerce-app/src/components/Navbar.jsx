import { Link } from "react-router-dom";

import { ShoppingCart, UserRound } from "lucide-react";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import logo from "../assets/logo.png";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { userStatus, userDetails } = useContext(UserContext);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center shrink-0"
            aria-label="Cove Home"
          >
            <img
              src={logo}
              alt="Cove"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <nav className="flex items-center gap-7">
            <Link
              to="/"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
            >
              All Products
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <Link
            to="/cart"
            className="group flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            <span className="relative flex items-center">
              <ShoppingCart
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:-translate-y-px"
              />

              {cartItems.length > 0 && (
                <span className="absolute -right-2.5 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-zinc-950 px-1 text-[9px] font-semibold leading-none text-white">
                  {cartItems.length}
                </span>
              )}
            </span>

            <span className="hidden sm:inline">Cart</span>
          </Link>

          <Link
            to={userStatus ? "/account" : "/login"}
            className="group flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            <UserRound
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:-translate-y-px"
            />

            <span className="hidden sm:inline">
              {userStatus ? userDetails.name : "Login"}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;