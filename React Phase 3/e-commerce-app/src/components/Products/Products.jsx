import { useState } from "react";

import useFetch from "../../hooks/useFetch";

import ProductBox from "./ProductBox";
import CategoryBar from "../CategoryBar";

function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 16;

  const skip = (currentPage - 1) * productsPerPage;

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}&select=id,title,price,thumbnail,rating`,
  );

  const totalPages = data
    ? Math.ceil(data.total / productsPerPage)
    : 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center px-5">
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-200 border-t-zinc-900" />

            <span>Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-5">
          <div className="border border-zinc-200 bg-zinc-50 p-8 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
              Products
            </p>

            <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
              Couldn't load products
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <CategoryBar/>
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between border-b border-zinc-200 pb-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
              Collection
            </p>

            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
              All Products
            </h1>
          </div>

          <p className="text-sm text-zinc-400">
            {data.total} products
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.products.map((item) => (
            <ProductBox
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              thumbnail={item.thumbnail}
              rating={item.rating}
            />
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center border-t border-zinc-200 pt-8">
          <div className="flex items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex h-9 items-center border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-600 transition hover:border-zinc-400 hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-30"
            >
              ←
            </button>

            <div className="mx-2 flex items-center gap-1">
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1,
              ).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`flex h-9 min-w-9 items-center justify-center px-2 text-sm font-medium transition ${
                    currentPage === page
                      ? "bg-zinc-950 text-white"
                      : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex h-9 items-center border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-600 transition hover:border-zinc-400 hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-zinc-400">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Products;