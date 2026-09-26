import { useContext } from "react";
import { storages } from "../../data/options";
import { ConfiguratorContext } from "../../context/ConfiguratorContext";

function Storage() {
  const { parts, setParts } = useContext(ConfiguratorContext);

  function handleClick(newItem) {
    setParts((prev) => {
      let categoryExists = false;
      let ItemID;

      prev.forEach((item) => {
        if (item.category === newItem.category) {
          categoryExists = true;
          ItemID = item.id;
        }
      });

      if (categoryExists) {
        const newArray = prev.filter((item) => item.id !== ItemID);
        return [...newArray, newItem];
      }

      return [...prev, newItem];
    });
  }

  return (
    <div className="py-4">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
        <div className="sm:w-24 shrink-0 pt-1">
          <h3 className="text-sm font-semibold text-neutral-900">Storage</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 flex-1">
          {storages.map((item) => {
            const isSelected = parts.some((part) => part.id === item.id);

            return (
              <button
                type="button"
                onClick={() => handleClick(item)}
                key={item.id}
                className={`
                  p-3 rounded-md text-left transition-all cursor-pointer flex flex-col justify-between min-h-[72px]
                  ${
                    isSelected
                      ? "border-2 border-neutral-900 bg-neutral-50 shadow-xs ring-1 ring-neutral-900/10"
                      : "border border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50/50"
                  }
                `}
              >
                <div className="flex items-start justify-between gap-1">
                  <span
                    className={`text-xs sm:text-sm leading-snug ${
                      isSelected
                        ? "text-neutral-900 font-semibold"
                        : "text-neutral-700 font-medium"
                    }`}
                  >
                    {item.name}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-neutral-900 shrink-0 mt-1" />
                  )}
                </div>

                <span
                  className={`text-xs mt-2 font-medium tabular-nums ${
                    isSelected ? "text-neutral-900 font-semibold" : "text-neutral-500"
                  }`}
                >
                  ₹{item.price.toLocaleString("en-IN")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Storage;
