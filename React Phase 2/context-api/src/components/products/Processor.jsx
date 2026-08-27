import { useContext } from "react";
import { processors } from "../../data/options";
import { ConfiguratorContext } from "../../context/ConfiguratorContext";

function Processor() {
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
    <div className="w-120 h-30 flex items-center gap-2">
      <h2 className="min-w-fit">Processor :</h2>
      <div className="w-full flex gap-3">
        {processors.map((item) => {
          const isSelected = parts.some((part) => part.id === item.id);

          return (
            <div
              onClick={() => handleClick(item)}
              key={item.id}
              className={`
                      w-30 h-25 p-3
                      flex flex-col items-center justify-center
                      border cursor-pointer
                      transition
                      ${
                        isSelected
                          ? "border-gray-500"
                          : "border-gray-200 bg-white"
                      }
                    `}
            >
              <h2 className="text-sm font-medium text-gray-800">{item.name}</h2>

              <h3 className="mt-2 text-sm">₹{item.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Processor;
