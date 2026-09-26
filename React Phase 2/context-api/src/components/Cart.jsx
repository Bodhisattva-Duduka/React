import { useContext } from "react";
import { ConfiguratorContext } from "../context/ConfiguratorContext";

function Cart() {
  const { parts } = useContext(ConfiguratorContext);

  function total() {
    return parts.reduce((sum, item) => sum + Number(item.price), 0);
  }

  const isComplete = parts.length === 5;

  return (
    <div className="w-full flex flex-col">
      {parts.length === 0 ? (
        <div className="py-8 text-center text-neutral-400">
          <p className="text-sm font-medium">Your cart is empty</p>
          <p className="text-xs mt-1 text-neutral-400">
            Select components from the configurator
          </p>
        </div>
      ) : (
        <div className="divide-y divide-neutral-100">
          {parts.map((item) => (
            <div
              key={item.id}
              className="py-2.5 flex items-start justify-between gap-2 text-sm"
            >
              <div className="min-w-0">
                <p className="font-medium text-neutral-900 truncate">
                  {item.name}
                </p>
                <p className="text-xs text-neutral-500 capitalize">
                  {item.category}
                </p>
              </div>
              <span className="font-semibold text-neutral-900 tabular-nums shrink-0">
                {item.price === 0
                  ? "₹0"
                  : `₹${item.price.toLocaleString("en-IN")}`}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-neutral-200">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-semibold text-neutral-800">Total</span>
          <span className="text-lg font-bold text-neutral-900 tabular-nums">
            ₹{total().toLocaleString("en-IN")}
          </span>
        </div>

        <button
          type="button"
          disabled={parts.length === 0}
          className={`mt-4 w-full py-2.5 px-4 rounded-md text-sm font-medium transition-colors cursor-pointer ${
            parts.length > 0
              ? "bg-neutral-900 hover:bg-neutral-800 text-white"
              : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
          }`}
        >
          {isComplete ? "Complete Order" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
}

export default Cart;