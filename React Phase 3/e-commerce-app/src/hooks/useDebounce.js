import { useState, useEffect } from 'react';

function useDebounce(value){
  const [query, setQuery] = useState(value);

  useEffect(()=>{
    
    const timer = setTimeout(()=>{
      setQuery(value);
    }, 1000)

    return () =>{
      clearTimeout(timer);
    }
  },[value]);
  return query;
}

export default useDebounce