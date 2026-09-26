import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import { CartContext } from "../../context/CartContext";

function OrderDetails() {
  const { orders } = useContext(CartContext);

  const { userDetails } = useContext(UserContext);

  function totalPrice() {
    let total = 0;

    orders.forEach((element) => {
      total += element.price * element.quantity;
    });

    return total;
  }

  return (
    <section>
      {/* Header */}
      <div className="border-b border-zinc-200 pb-6">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
          Orders
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
              Your Orders
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Orders placed by {userDetails.name}
            </p>
          </div>

          <span className="text-sm text-zinc-400">
            {orders.length}{" "}
            {orders.length === 1 ? "item" : "items"}
          </span>
        </div>
      </div>

      {/* Shipping */}
      <div className="border-b border-zinc-200 py-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
          Shipping to
        </p>

        <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-700">
          {userDetails.address}
        </p>
      </div>

      {/* Orders */}
      <div className="border-b border-zinc-200">
        {orders.length === 0 ? (
          <div className="py-14 text-center">
            <p className="text-sm font-medium text-zinc-900">
              No orders yet
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Your completed purchases will appear here.
            </p>
          </div>
        ) : (
          orders.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 sm:gap-5 border-b border-zinc-200 py-4 sm:py-6 last:border-b-0"
            >
              {/* Image */}
              <div className="flex h-20 w-20 sm:h-28 sm:w-28 shrink-0 items-center justify-center border border-zinc-200 bg-zinc-50">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-contain p-2 sm:p-3"
                />
              </div>

              {/* Details */}
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 sm:gap-4">
                <div className="flex items-start justify-between gap-2 sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium text-zinc-950 sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-zinc-400">
                      ${item.price} each
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-semibold text-zinc-950">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-zinc-400">
                  <span>
                    Quantity:{" "}
                    <span className="font-medium text-zinc-700">
                      {item.quantity}
                    </span>
                  </span>

                  <span className="h-1 w-1 rounded-full bg-zinc-300" />

                  <span>
                    ${item.price.toFixed(2)} per item
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total */}
      {orders.length > 0 && (
        <div className="mt-6 flex items-center justify-between border-t border-zinc-200 pt-6">
          <span className="text-sm font-medium text-zinc-500">
            Total amount
          </span>

          <span className="text-2xl font-semibold tracking-tight text-zinc-950">
            ${totalPrice().toFixed(2)}
          </span>
        </div>
      )}
    </section>
  );
}

export default OrderDetails;