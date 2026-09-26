import { useState } from "react";

import { useParams, useSearchParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";

import ProductBox from "./Products/ProductBox";

import CategoryBar from "./CategoryBar";

import Navbar from "./Navbar";

import useDebounce from "../hooks/useDebounce";

function Categories() {
  const { category_name } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";
  const order = searchParams.get("order") || "asc";

  const [searchQuery, setSearchQuery] = useState("");

  const debouncedValue = useDebounce(searchQuery);

  const sortParams = sortBy ? `?sortBy=${sortBy}&order=${order}` : "";

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/category/${category_name}${sortParams}`,
  );

  const search = debouncedValue.trim().toLowerCase();

  const filteredProducts = data?.products.filter((item) =>
    item.title.toLowerCase().includes(search),
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <CategoryBar />

      {/* Search and Sort */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              placeholder="Search this category..."
              type="text"
              name="search"
              id="category-search"
              className="h-11 w-full border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
            />
          </div>

          <div className="flex justify-end">
            <select
              value={sortBy ? `${sortBy}-${order}` : ""}
              onChange={(e) => {
                const value = e.target.value;
                const next = new URLSearchParams(searchParams);
                if (!value) {
                  next.delete("sortBy");
                  next.delete("order");
                } else {
                  const [newSortBy, newOrder] = value.split("-");
                  next.set("sortBy", newSortBy);
                  next.set("order", newOrder);
                }
                setSearchParams(next);
              }}
              className="h-11 w-full sm:w-auto cursor-pointer border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950"
            >
              <option value="">Sort by: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-zinc-200 pb-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
              Category
            </p>

            <h1 className="mt-2 text-2xl font-semibold capitalize tracking-tight text-zinc-950">
              {category_name}
            </h1>
          </div>

          <p className="text-sm text-zinc-400">
            {search
              ? `${filteredProducts?.length ?? 0} results`
              : `${data?.total ?? 0} products`}
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-200 border-t-zinc-900" />

              <span>Loading...</span>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="border border-zinc-200 bg-zinc-50 p-8 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                Category
              </p>

              <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
                Couldn't load products
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                {error}
              </p>
            </div>
          </div>
        )}

        {/* Products */}
        {!loading && !error && filteredProducts?.length > 0 && (
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((item) => (
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
        )}

        {/* No results */}
        {!loading &&
          !error &&
          filteredProducts?.length === 0 && (
            <div className="flex min-h-[40vh] items-center justify-center border-y border-zinc-200">
              <div className="text-center">
                <h2 className="text-lg font-semibold text-zinc-950">
                  No products found
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Try a different search term.
                </p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Categories;