import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import ResultsBox from "./components/ResultsBox";
import useDebounce from "./hooks/useDebounce";
import useFetch from "./hooks/useFetch";
import SuggestionsBox from "./components/SuggestionsBox";

function App() {
  const[query, setQuery] = useState("");
  const[resultQuery, setResultQuery] = useState("");
  const[savedResults, setSavedResults] = useState(() => {
  const stored = localStorage.getItem("recents");
  return stored ? JSON.parse(stored) : [];
});

  
  const url = `https://api.github.com/search/users?q=${query}`
  const debouncedQuery = useDebounce(url);
  const {data : searchResult, loading : searchLoading, error : searchError} = useFetch(debouncedQuery);
  const {data: recentsResult, loading: recentsLoading, error : recentsError} = useFetch(`https://api.github.com/users/${resultQuery}`);



  useEffect(()=>{
    if (!recentsResult) return;

    setSavedResults(prev => [...prev, recentsResult])
    
  },[recentsResult])
  
  useEffect(()=>{
    localStorage.setItem("recents", JSON.stringify(savedResults));

  },[savedResults])

  return (
    <div className="flex w-full flex-col h-fit items-center">
      <div className="mt-10  ">
        <InputBox query={query} setQuery={setQuery} />
      </div>
      {searchLoading ? "Loading..." : <SuggestionsBox suggestions={searchResult} setResultQuery={setResultQuery}/>}
      

      <h3 className="mt-8 mb-3 text-xl">
        Recently viewed
      </h3>
      <div className="w-120">
        <ResultsBox savedResults={savedResults}/>
      </div>
    </div>
  );
}


export default App
