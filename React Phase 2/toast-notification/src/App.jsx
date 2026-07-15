import { useState } from "react";
import Toast from "./Toast";

function App() {
  const [toast, setToast] = useState([]);

  function handleClick() {
    setToast([...toast, Date.now()]);
  }

  return (
    <>
      <div className="flex justify-around items-center">
        <div className="flex flex-col w-full justify-center items-center">
          <button
            onClick={handleClick}
            className=" bg-blue-400 p-4 rounded-2xl text-4xl hover:bg-blue-700 border-none"
          >
            Toast
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col mr-2 mt-2 w-44 h-200 justify-end gap-3 ">
            {toast.map((item) => (
              <Toast key={item} id={item} setToast={setToast}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
