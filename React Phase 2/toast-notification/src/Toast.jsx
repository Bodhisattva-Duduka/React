import { useState, useEffect } from "react";

function Toast({id, toast, setToast}){

  useEffect(()=>{
    let timer = setTimeout(() => {
      setToast(prev => 
        prev.filter(item => (
          id !== item
        ))
      )
    }, 3000);
    return ()=>{
      clearTimeout(timer);
    }
  },[])

  return(
    <>
      <h1 className="bg-indigo-500 h-20 rounded-2xl">
          Reminder
      </h1>
    </>
  )
}

export default Toast;