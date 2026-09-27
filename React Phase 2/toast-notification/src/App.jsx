import { useState } from "react";
import Toast from "./Toast";

function App() {
  const [toast, setToast] = useState([]);
  const [count, setCount] = useState(0);

  function handleClick() {
    const nextCount = count + 1;
    setCount(nextCount);
    setToast((prev) => [...prev, { id: `${Date.now()}-${nextCount}`, count: nextCount }]);
  }

  return (
    <>
      <div className="flex justify-around items-center min-h-screen">
        <div className="flex flex-col w-full justify-center items-center">
          <button
            onClick={handleClick}
            className="bg-blue-800 active:bg-red-700 text-white text-2xl px-6 py-3 rounded"
          >
            Toast
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col mr-4 mt-2 w-52 justify-end gap-3">
            {toast.map((item) => (
              <Toast key={item.id} id={item.id} count={item.count} setToast={setToast}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
