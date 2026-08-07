import { useState, useEffect } from 'react';

function useFetch(url){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{

    setData(null);
    setError(null);
    setLoading(true);

    const controller = new AbortController();
    async function getData() {

      try {
        const res = await fetch(url, {
          signal :controller.signal
        });
        if(!res.ok){
          throw new Error("Failed to fetch");
        }
        const info = await res.json();
        
        if(!controller.signal.aborted){
          setData(info);
        }

      } catch (error) {
        if(!controller.signal.aborted){
          setError(error.message)
        }
      }

      if(!controller.signal.aborted){
        setLoading(false);
      }

    }
    getData()

    return ()=>{
      controller.abort();
    }

  },[url]);

  return {data, loading, error};
}

export default useFetch