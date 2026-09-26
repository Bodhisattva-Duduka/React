import useFetch from "../hooks/useFetch";

import { Link, useLocation } from "react-router-dom";

function CategoryBar() {
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/categories`,
  );

  const location = useLocation();

  const currentCategory = location.pathname.startsWith("/categories/")
    ? location.pathname.split("/categories/")[1]
    : "";

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
        <div className="flex items-center gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Label */}
          <span className="shrink-0 pr-3 pl-1 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Categories:
          </span>

          {/* Categories */}
          {data.map((item) => {
            const isActive = currentCategory === item.slug;

            return (
              <Link
                key={item.slug}
                to={`/categories/${item.slug}`}
                className={`group relative shrink-0 px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 rounded-sm whitespace-nowrap ${
                  isActive
                    ? "bg-zinc-950 text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;