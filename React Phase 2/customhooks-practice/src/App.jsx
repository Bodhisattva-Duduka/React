import { useState } from "react";
import InputBox from "./components/InputBox";

function App() {
  const[data, setData] = useState([]);


  return (
    <div className="flex flex-col h-200 items-center">
      <div className="mt-10  ">
        <InputBox data={data} setData={setData} />
      </div>
      {data}
    </div>
  );
}


export default App
