import { Link } from "react-router-dom";

import { ShoppingCart, UserRound } from "lucide-react";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Left */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-md font-medium tracking-tight text-zinc-500 transition-colors hover:text-zinc-950"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-md font-medium text-zinc-500 transition-colors hover:text-zinc-950"
          >
            All Products
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1">
          <Link
            to="/cart"
            className="group flex h-10 items-center gap-2 rounded-md px-3 text-md font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
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
            to="/account"
            className="group flex h-10 items-center gap-2 rounded-md px-3 text-md font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            <UserRound
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:-translate-y-px"
            />

            <span className="hidden sm:inline">Account</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;