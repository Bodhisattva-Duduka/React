import useFetch from "../hooks/useFetch";

import { Link } from "react-router-dom";

function CategoryBar() {
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/categories`,
  );

  if (loading) {
    return (
      <div className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-3 sm:px-8 lg:px-10">
          <div className="h-4 w-20 animate-pulse bg-zinc-100" />
          <div className="h-4 w-24 animate-pulse bg-zinc-100" />
          <div className="h-4 w-16 animate-pulse bg-zinc-100" />
          <div className="h-4 w-28 animate-pulse bg-zinc-100" />
        </div>
      </div>
    );
  }

  if (error) {
    return null;
  }

  return (
    <div className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5 py-2.5">
          <span className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-zinc-1000 transition-all duration-200 hover:bg-zinc-950 hover:text-white">
            Categories
          </span>

          {data.map((item) => (
            <Link
              key={item.slug}
              to={`/categories/${item.slug}`}
              className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-zinc-500 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-950"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
