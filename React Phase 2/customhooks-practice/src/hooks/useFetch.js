import { useState, useEffect } from 'react';

function useFetch(url){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{

    async function getData() {

      setLoading(true);

      try {
        const res = await fetch(url);
        if(!res.ok){
          setError("Failed to fetch");
        }

        const info = await res.json();

        setData(info);
        setLoading(false);

      } catch (error) {
        setError(error.message)
      }

    }
    getData()

  },[url]);

  return {data, loading, error};
}

export default useFetch