import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";

import { CartContext } from "../context/CartContext";

import Navbar from "./Navbar";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  function totalPrice() {
    let total = 0;

    cartItems.forEach((element) => {
      total += element.price * element.quantity;
    });

    return total;
  }

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        {/* Header */}
        <div className="mb-8 border-b border-zinc-200 pb-7">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            Your selection
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <h1 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-950">
              Cart
            </h1>

            <span className="text-sm text-zinc-400">
              {cartItems.length}{" "}
              {cartItems.length === 1 ? "product" : "products"}
            </span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          {/* Cart Items */}
          <section>
            <div className="border-y border-zinc-200">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-zinc-200 py-6 last:border-b-0"
                >
                  <div className="flex gap-5">
                    {/* Image */}
                    <div className="flex h-28 w-28 shrink-0 items-center justify-center border border-zinc-200 bg-zinc-50 sm:h-32 sm:w-32">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-contain p-4"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h2 className="truncate text-sm font-medium text-zinc-950 sm:text-base">
                            {item.title}
                          </h2>

                          <p className="mt-1 text-sm text-zinc-400">
                            ${item.price} each
                          </p>
                        </div>

                        <p className="shrink-0 text-sm font-semibold text-zinc-950 sm:text-base">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-zinc-200">
                          <button
                            onClick={() =>
                              setCartItems((prev) =>
                                prev.map((cartItem) =>
                                  cartItem.id === item.id &&
                                  cartItem.quantity > 1
                                    ? {
                                        ...cartItem,
                                        quantity:
                                          cartItem.quantity - 1,
                                      }
                                    : cartItem,
                                ),
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} strokeWidth={1.8} />
                          </button>

                          <span className="flex h-9 min-w-10 items-center justify-center border-x border-zinc-200 px-2 text-sm font-medium text-zinc-950">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              setCartItems((prev) =>
                                prev.map((cartItem) =>
                                  cartItem.id === item.id
                                    ? {
                                        ...cartItem,
                                        quantity:
                                          cartItem.quantity + 1,
                                      }
                                    : cartItem,
                                ),
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} strokeWidth={1.8} />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() =>
                            setCartItems((prev) =>
                              prev.filter(
                                (cartItem) =>
                                  cartItem.id !== item.id,
                              ),
                            )
                          }
                          className="group flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors hover:text-red-600"
                        >
                          <Trash2
                            size={14}
                            strokeWidth={1.8}
                            className="transition-transform duration-200 group-hover:-translate-y-px"
                          />

                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <Link
              to="/products"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
            >
              <ArrowLeft
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />

              Continue shopping
            </Link>
          </section>

          {/* Summary */}
          <aside className="lg:sticky lg:top-24">
            <div className="border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                Order summary
              </p>

              <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
                Your order
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Subtotal</span>

                  <span className="font-medium text-zinc-950">
                    ${totalPrice().toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Shipping</span>

                  <span className="font-medium text-emerald-600">
                    Free
                  </span>
                </div>

                <div className="h-px bg-zinc-200" />

                <div className="flex items-end justify-between gap-4">
                  <span className="text-sm font-medium text-zinc-950">
                    Total
                  </span>

                  <span className="text-2xl font-semibold tracking-tight text-zinc-950">
                    ${totalPrice().toFixed(2)}
                  </span>
                </div>
              </div>

              <button onClick={() => (navigate('/checkout'))} className="mt-7 flex h-12 w-full items-center justify-center bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 active:scale-[0.99]">
                Proceed to Checkout
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-zinc-400">
                Taxes and final shipping costs are calculated at
                checkout.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Cart;