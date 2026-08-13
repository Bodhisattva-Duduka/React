import { useContext } from "react";
import { ConfiguratorContext } from "../context/ConfiguratorContext";

function Cart(){

  const { parts } = useContext(ConfiguratorContext);

  function total(){
    let sum = 0;

    parts.forEach(item => sum += Number(item.price))
    return sum;
  }

  return(
    <div className="w-full flex flex-col items-center gap-1">
      {parts.map(item =>
        <div key={item} className="w-9/10 h-10">
          <h2>{item.name}</h2>
          <h2>{item.price}</h2>
        </div>
      )}
      <h3>{total()}</h3>
    </div>
  )
}

export default Cart;