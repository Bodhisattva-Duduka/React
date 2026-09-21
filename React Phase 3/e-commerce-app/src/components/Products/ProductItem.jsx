import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";

import { useNavigate, useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

import { Link } from "react-router-dom";

function ProductItem() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { id } = useParams();

  // const navigate = useNavigate();
  
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${Number(id)}?select=id,title,thumbnail,description,rating,price,thumbnail,discountPercentage,images,reviews`,
  );

  console.log(cartItems)

  const [imageNum, setImageNum] = useState(0);

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-5">
          <div className="flex flex-col items-center text-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />

            <h2 className="mt-5 text-lg font-semibold text-slate-900">
              Loading product
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Please wait while we fetch the product details.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-5">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-xl font-bold text-red-500">
              !
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-950">
              Unable to load product
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Something went wrong while fetching the product details. Please
              try again later.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const images = data.images;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="transition-colors hover:text-indigo-600">
            Home
          </Link>

          <span>/</span>

          <span className="font-medium text-slate-700">Product</span>
        </div>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex min-h-[420px] items-center justify-center p-6 sm:min-h-[520px] sm:p-10 relative w-full">
                {images.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Slide ${index}`}
                    className={`h-full max-h-[480px] w-full max-w-[560px] object-contain transition-transform duration-300 absolute ${
                      imageNum === index
                        ? "opacity-100 pointer-events-auto scale-100"
                        : "opacity-0 pointer-events-none scale-95"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setImageNum((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1,
                  )
                }
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-indigo-600"
                aria-label="Previous image"
              >
                ←
              </button>

              <button
                onClick={() =>
                  setImageNum((prev) => (prev + 1) % images.length)
                }
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-indigo-600"
                aria-label="Next image"
              >
                →
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImageNum(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    imageNum === index
                      ? "w-7 bg-indigo-600"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="pt-1">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                Product
              </span>

              <div className="flex items-center gap-1 text-sm text-slate-600">
                <span className="text-amber-500">★</span>
                <span className="font-semibold text-slate-800">
                  {data.rating}
                </span>
                <span className="text-slate-400">
                  ({data.reviews.length} reviews)
                </span>
              </div>
            </div>

            <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {data.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-2">
              <span className="text-3xl font-bold tracking-tight text-slate-950">
                ${data.price}
              </span>

              <span className="text-base text-slate-400 line-through">
                ${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}
              </span>

              <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-600">
                {data.discountPercentage}% OFF
              </span>
            </div>

            <div className="my-8 h-px bg-slate-200" />

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Description
              </h2>

              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">
                {data.description}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                // onClick={() => navigate(`/checkout/${id}`)}
                className="h-12 rounded-lg bg-indigo-600 px-6 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                Buy Now
              </button>

              <button
                onClick={() => {
                  setCartItems((prev) => {
                    const itemExists = prev.find((item) => item.id === id);

                    if (itemExists) {
                      return prev.map((item) =>
                        item.id === id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item,
                      );
                    }

                    return [
                      ...prev,
                      {
                        id,
                        title: data.title,
                        price: data.price,
                        thumbnail: data.thumbnail,
                        quantity: 1,
                      },
                    ];
                  });
                }}
                className="h-12 rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 active:scale-[0.99]"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-slate-200 py-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Rating
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {data.rating} / 5
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Reviews
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {data.reviews.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-slate-200 pt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Customer feedback
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                Reviews
              </h2>
            </div>

            <div className="text-sm text-slate-500">
              {data.reviews.length} reviews
            </div>
          </div>

          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {data.reviews.map((item, index) => (
              <article key={index} className="py-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <div className="mb-2 flex items-center gap-1 text-sm">
                      <span className="text-amber-500">★</span>

                      <span className="font-semibold text-slate-800">
                        {item.rating}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-slate-900">
                      {item.comment}
                    </h3>
                  </div>

                  <p className="shrink-0 text-sm font-medium text-slate-500">
                    {item.reviewerName}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductItem;
