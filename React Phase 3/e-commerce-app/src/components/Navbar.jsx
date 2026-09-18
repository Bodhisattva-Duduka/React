import { Link } from "react-router-dom";
import { ShoppingCart, UserRound } from "lucide-react";

function Navbar() {
  return (
    <div className="border-b border-gray-200 bg-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <Link
            to="/"
            className="text-xl font-medium text-gray-950 transition-colors hover:text-gray-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-xl font-medium text-gray-600 transition-colors hover:text-gray-950"
          >
            All Products
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link
            to="/cart"
            className="flex items-center gap-2 text-xl font-medium text-gray-600 transition-colors hover:text-gray-950"
          >
            <ShoppingCart size={21} strokeWidth={2} />
            Cart
          </Link>

          <Link
            to="/account"
            className="flex items-center gap-2 text-xl font-medium text-gray-600 transition-colors hover:text-gray-950"
          >
            <UserRound size={21} strokeWidth={2} />
            Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;