import { useState } from "react";
import InputBox from "./components/InputBox";
import ResultsBox from "./components/ResultsBox";

function App() {
  const[data, setData] = useState([]);


  return (
    <div className="flex w-full flex-col h-fit items-center">
      <div className="mt-10  ">
        <InputBox data={data} setData={setData} />
      </div>
      {data}
      <h3 className="w-120 mt-2 ml-0">
        Recently Viewed:
      </h3>
      <div className="w-120">
        <ResultsBox />
      </div>
    </div>
  );
}


export default App
