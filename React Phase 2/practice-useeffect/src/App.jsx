import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    if(e.target.value === ""){
      setData("")
    }
    setQuery(e.target.value);
  }

  useEffect(() => {
    if (query != "") {
      let timer = setTimeout(async () => {
        try {
          setLoading(true)
          let res = await fetch(
            `https://jsonplaceholder.typicode.com/${query}`,
          );
          let data = await res.json();
          setData(JSON.stringify(data));
        } catch (error) {
          console.log(error);
        }
        setLoading(false)
      }, 400 );
      return () => {
        clearTimeout(timer);
      };
    }
  }, [query]);

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center h-full border">
        <div className="flex w-150 mt-10">
          <h1 className="text-5xl ">Search: </h1>
          <input
            className="border mt-2 w-xl h-9 ml-3"
            value={query}
            onChange={handleChange}
            type="text"
            name="search"
            id="searh"
          />
        </div>
        <div className="w-fit flex flex-col gap-2 px-4 py-4 min-h-7 min-w-2xl border rounded-2xl">
          <h1>Result: </h1>
          <h1>{loading ? "Loading...." : data}</h1>
          {/* <h1>{data === "{}" ? "No Results Found" : data}</h1> */}
        </div>
      </div>
    </>
  );
}

export default App;