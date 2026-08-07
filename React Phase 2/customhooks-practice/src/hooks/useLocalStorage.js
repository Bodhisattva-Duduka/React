import { useEffect, useState } from "react";

function useLocalStorage(key, value){
  
  useEffect(()=>{
    localStorage.setItem([...[]], JSON.stringify(key))
  })


}

export default useLocalStorage;