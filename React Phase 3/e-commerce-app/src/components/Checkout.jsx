import React from "react";

import { Link } from "react-router-dom";

import { Check } from "lucide-react";

import Navbar from "./Navbar";

function Checkout() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center justify-center px-5 py-12 sm:px-8">
        <section className="w-full max-w-lg border border-zinc-200 bg-zinc-50 px-6 py-12 text-center sm:px-10">
          {/* Success icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center bg-zinc-950 text-white">
            <Check size={26} strokeWidth={2} />
          </div>

          <p className="mt-7 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            Order confirmed
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-zinc-950">
            Checkout successful
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
            Thanks for shopping with Cove. Your order has been placed
            successfully.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/products"
              className="inline-flex h-11 items-center justify-center bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800 active:scale-[0.99]"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-950 transition hover:border-zinc-950 hover:bg-zinc-50"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Checkout;