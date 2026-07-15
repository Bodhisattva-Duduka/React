import { useState } from "react";

function App() {
  const [toast, setToast] = useState([]);

  return (
    <>
      <div className="flex justify-around items-center border">
        <div className="flex flex-col w-full justify-center items-center" >
          <button className=" bg-blue-400 p-4 rounded-2xl text-4xl hover:bg-blue-700 border-none" >Toast</button>
        </div>
        <div className="flex bg-red-50">
          <div className="flex flex-col mr-2 mt-2 w-40 h-200 justify-end border">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
