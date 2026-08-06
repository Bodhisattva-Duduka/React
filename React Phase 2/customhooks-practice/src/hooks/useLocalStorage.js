import { useEffect, useState } from "react";

function useLocalStorage(key, value){
  const[data, setData] = useState(()=> localStorage.getItem(key) === null ? [] : [...[], JSON.stringify(localStorage.getItem(key))]);


  useEffect(()=>{
    
    localStorage.setItem(JSON.stringify(key), JSON.stringify(value));
  })


}

export default useLocalStorage;