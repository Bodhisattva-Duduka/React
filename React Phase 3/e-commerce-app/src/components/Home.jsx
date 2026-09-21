import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ArrowUpRight, Star } from "lucide-react";

import Navbar from "./Navbar";

import useFetch from "../hooks/useFetch";

function Home() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=20",
  );

  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    if (!data?.products?.length) return;

    const shuffled = [...data.products].sort(
      () => Math.random() - 0.5,
    );

    setSuggestedProducts(shuffled.slice(0, 4));
  }, [data]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-zinc-950">
        <Navbar />

        <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center px-5">
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-200 border-t-zinc-900" />
            <span>Loading...</span>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white text-zinc-950">
        <Navbar />

        <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center px-5">
          <div className="max-w-md border border-zinc-200 bg-zinc-50 p-8 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
              Home
            </p>

            <h1 className="mt-3 text-2xl font-semibold tracking-tight">
              Couldn't load products
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Something went wrong while fetching the products.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex h-10 items-center justify-center bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 lg:px-10 lg:pb-16 lg:pt-10">
        {/* Intro */}
        <section className="flex flex-col gap-5 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              Curated for you
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-4xl">
              A few things you might like.
            </h1>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              A handful of products from the collection, picked at
              random. There might be something worth finding.
            </p>
          </div>

          <Link
            to="/products"
            className="group flex w-fit items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            Explore all products
            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </section>

        {/* Products */}
        <section className="pt-8">
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {suggestedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group min-w-0"
              >
                {/* Image */}
                <div className="relative aspect-[1.08/1] overflow-hidden border border-zinc-200 bg-zinc-50">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.045]"
                  />

                  {product.discountPercentage > 0 && (
                    <span className="absolute left-3 top-3 text-[11px] font-medium text-emerald-600">
                      -{Math.round(product.discountPercentage)}%
                    </span>
                  )}

                  <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center border border-zinc-200 bg-white text-zinc-700 opacity-0 shadow-sm transition-all duration-200 group-hover:opacity-100">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

                {/* Info */}
                <div className="pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="truncate text-sm font-medium text-zinc-950 transition-colors group-hover:text-zinc-600">
                        {product.title}
                      </h2>

                      <p className="mt-1 truncate text-xs capitalize text-zinc-400">
                        {product.category}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm font-semibold text-zinc-950">
                      ${product.price}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star
                        size={12}
                        fill="currentColor"
                        strokeWidth={1.5}
                        className="text-amber-500"
                      />

                      <span className="text-xs font-medium text-zinc-600">
                        {product.rating}
                      </span>
                    </div>

                    <span className="h-1 w-1 rounded-full bg-zinc-300" />

                    <span className="text-xs text-zinc-400">
                      View
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-12 border-t border-zinc-200 pt-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-zinc-400">
              That's just a small part of the collection.
            </p>

            <Link
              to="/products"
              className="group flex shrink-0 items-center gap-2 text-sm font-medium text-zinc-950"
            >
              Browse everything
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;