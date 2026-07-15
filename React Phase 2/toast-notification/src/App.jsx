import { useState } from "react";
import Toast from "./Toast";

function App() {
  const [toast, setToast] = useState([]);

  function handleClick() {
    setToast([...toast, (toast.length > 0 ? toast[toast.length - 1] : 0) + 1]);
  }

  return (
    <>
      <div className="flex justify-around items-center border">
        <div className="flex flex-col w-full justify-center items-center">
          <button
            onClick={handleClick}
            className=" bg-blue-400 p-4 rounded-2xl text-4xl hover:bg-blue-700 border-none"
          >
            Toast
          </button>
        </div>
        <div className="flex bg-red-50">
          <div className="flex flex-col mr-2 mt-2 w-44 h-200 justify-end border">
            {toast.map((item) =>(
              <Toast key={item}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
