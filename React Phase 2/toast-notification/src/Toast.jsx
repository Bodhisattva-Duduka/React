import { useState, useEffect } from "react";

function Toast(){

  useEffect(()=>{
    let timer = setTimeout(() => {
      
    }, 3000);
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