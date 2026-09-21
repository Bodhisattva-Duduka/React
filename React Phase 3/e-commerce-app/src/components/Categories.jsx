import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import ProductBox from "./Products/ProductBox";
import CategoryBar from "./CategoryBar";
import Navbar from "./Navbar";

function Categories() {
  const { category_name } = useParams();
  console.log(category_name)

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/category/${category_name}`
  );



  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <CategoryBar />

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="mb-8 flex items-end justify-between border-b border-zinc-200 pb-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
              Category
            </p>

            <h1 className="mt-2 text-2xl font-semibold capitalize tracking-tight text-zinc-950">
              {category_name}
            </h1>
          </div>

          <p className="text-sm text-zinc-400">
            {data?.total} products
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
        {data && (
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
        )}
      </div>
    </div>
  );
}

export default Categories;