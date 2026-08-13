import { useContext } from "react";
import { processors } from "../../data/options";
import { ConfiguratorContext } from '../../context/ConfiguratorContext'

function Processor() {

  const {parts, setParts} = useContext(ConfiguratorContext);

  function handleClick(newItem) {
    setParts(prev => {

      let categoryExists = false;
      let ItemID ;

      prev.forEach(item => {
        if(item.category === newItem.category){
          categoryExists = true;
          ItemID = item.id;
        }
      });


      if(categoryExists){
        const newArray = prev.filter(item => item.id !== ItemID)
        return [...newArray, newItem]
      }

      return [...prev, newItem];
    })
    
  }
  

  return (
    <div className="w-120 h-30 flex items-center gap-2">
      <h2 className="min-w-fit">Processor :</h2>
      <div className="w-full flex justify-between items-center">
        {processors.map((item) => {
          return (
            <div onClick={() => handleClick(item)} key={item.id} 
            className="w-30 h-25 flex flex-col hover:bg-gray-100 border rounded-2xl items-center justify-center ">
              <h2>{item.name}</h2>
              <h3>₹{item.price}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}


export default Processor;
