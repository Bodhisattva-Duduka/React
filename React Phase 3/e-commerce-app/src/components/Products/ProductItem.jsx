import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";

import { useNavigate, useParams, Link } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

function ProductItem() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { id } = useParams();

  // const navigate = useNavigate();

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${Number(id)}?select=id,title,thumbnail,description,rating,price,thumbnail,discountPercentage,images,reviews`,
  );

  console.log(cartItems);

  const [imageNum, setImageNum] = useState(0);

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-zinc-950">
        <div className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center px-6">
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-200 border-t-zinc-900" />
            <span>Loading product...</span>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white text-zinc-950">
        <div className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center px-6">
          <div className="w-full max-w-md border border-zinc-200 bg-zinc-50 p-8 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              Product
            </p>

            <h1 className="mt-3 text-2xl font-semibold tracking-tight">
              Something went wrong
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              We couldn't load this product right now. Please try again
              later.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex h-10 items-center justify-center bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
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
    <main className="min-h-screen bg-white text-zinc-950">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-center gap-2 text-sm text-zinc-400">
          <Link
            to="/"
            className="transition-colors hover:text-zinc-950"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-zinc-600">Product</span>
        </div>

        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="min-w-0">
            <div className="flex gap-4">
              <div className="hidden w-20 shrink-0 flex-col gap-3 sm:flex">
                {images.map((src, index) => (
                  <button
                    key={src}
                    onClick={() => setImageNum(index)}
                    className={`relative aspect-square overflow-hidden border bg-zinc-50 transition ${
                      imageNum === index
                        ? "border-zinc-950 ring-1 ring-zinc-950"
                        : "border-zinc-200 hover:border-zinc-400"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Product ${index + 1}`}
                      className="h-full w-full object-contain p-2"
                    />
                  </button>
                ))}
              </div>

              <div className="relative min-w-0 flex-1 overflow-hidden border border-zinc-200 bg-zinc-50">
                <div className="flex aspect-square items-center justify-center p-8 sm:p-12">
                  {images.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${data.title} ${index + 1}`}
                      className={`absolute inset-0 h-full w-full object-contain p-10 transition-all duration-300 sm:p-14 ${
                        imageNum === index
                          ? "scale-100 opacity-100"
                          : "pointer-events-none scale-[0.97] opacity-0"
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-4 left-4 border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600">
                  {String(imageNum + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </div>

                <div className="absolute bottom-4 right-4 flex">
                  <button
                    onClick={() =>
                      setImageNum((prev) =>
                        prev === 0 ? images.length - 1 : prev - 1,
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-950 hover:text-white"
                    aria-label="Previous image"
                  >
                    ←
                  </button>

                  <button
                    onClick={() =>
                      setImageNum(
                        (prev) => (prev + 1) % images.length,
                      )
                    }
                    className="-ml-px flex h-10 w-10 items-center justify-center border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-950 hover:text-white"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 sm:hidden">
              {images.map((src, index) => (
                <button
                  key={src}
                  onClick={() => setImageNum(index)}
                  className={`h-16 w-16 shrink-0 overflow-hidden border bg-zinc-50 ${
                    imageNum === index
                      ? "border-zinc-950 ring-1 ring-zinc-950"
                      : "border-zinc-200"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className="h-full w-full object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★</span>
                <span className="font-medium text-zinc-900">
                  {data.rating}
                </span>
              </div>

              <span className="h-1 w-1 rounded-full bg-zinc-300" />

              <span className="text-zinc-500">
                {data.reviews.length} reviews
              </span>
            </div>

            <h1 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              {data.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-semibold tracking-tight">
                ${data.price}
              </span>

              <span className="text-base text-zinc-400 line-through">
                $
                {(
                  data.price /
                  (1 - data.discountPercentage / 100)
                ).toFixed(2)}
              </span>

              <span className="text-sm font-medium text-emerald-600">
                Save {data.discountPercentage}%
              </span>
            </div>

            <div className="my-8 h-px bg-zinc-200" />

            <div>
              <h2 className="text-sm font-medium text-zinc-950">
                About this product
              </h2>

              <p className="mt-3 max-w-xl text-[15px] leading-7 text-zinc-500">
                {data.description}
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <button
                // onClick={() => navigate(`/checkout/${id}`)}
                className="flex h-12 w-full items-center justify-center bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800 active:scale-[0.99]"
              >
                Buy Now
              </button>

              <button
                onClick={() => {
                  setCartItems((prev) => {
                    const itemExists = prev.find(
                      (item) => item.id === id,
                    );

                    if (itemExists) {
                      return prev.map((item) =>
                        item.id === id
                          ? {
                              ...item,
                              quantity: item.quantity + 1,
                            }
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
                className="flex h-12 w-full items-center justify-center border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-950 transition hover:border-zinc-950 hover:bg-zinc-50 active:scale-[0.99]"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 border-y border-zinc-200">
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-zinc-500">
                  Rating
                </span>

                <span className="text-sm font-medium text-zinc-950">
                  {data.rating} / 5
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-zinc-200 py-4">
                <span className="text-sm text-zinc-500">
                  Reviews
                </span>

                <span className="text-sm font-medium text-zinc-950">
                  {data.reviews.length}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-zinc-200 py-4">
                <span className="text-sm text-zinc-500">
                  Discount
                </span>

                <span className="text-sm font-medium text-emerald-600">
                  {data.discountPercentage}% off
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-zinc-200 pt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                Customer feedback
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                Reviews
              </h2>
            </div>

            <p className="text-sm text-zinc-500">
              {data.reviews.length} reviews
            </p>
          </div>

          <div className="mt-8 border-y border-zinc-200">
            {data.reviews.map((item, index) => (
              <article
                key={index}
                className="border-b border-zinc-200 py-7 last:border-b-0"
              >
                <div className="grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <div>
                    <p className="text-sm font-medium text-zinc-950">
                      {item.reviewerName}
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <span className="text-amber-500">★</span>

                      <span className="font-medium text-zinc-700">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="max-w-3xl text-[15px] leading-7 text-zinc-600">
                      {item.comment}
                    </p>
                  </div>
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