import useFetch from "../../hooks/useFetch";

import ProductBox from "./ProductBox";

function Products() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?&select=title,price,thumbnail,rating"
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <h2 className="text-lg font-medium text-gray-600">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <h2 className="text-lg font-medium text-red-600">{error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 xl:grid-cols-4">
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
    </div>
  );
}

export default Products;