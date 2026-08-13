import { useContext } from "react";
import { storages }  from "../../data/options";
import { ConfiguratorContext } from '../../context/ConfiguratorContext'

function Storage() {

  const {parts, setParts} = useContext(ConfiguratorContext);

  function handleClick({ newItem }) {
    setParts(prev => {

      const exists = prev.some(item => item.id === newItem.id)

      if(exists){
        return (
          prev.map(item => {
            item.id === newItem.id ? {...item, ...newItem} : item
          })
        )
      }

      return [...prev, newItem];
    })
    
  }
  

  return (
    <div className="w-100 h-30 flex justify-center items-center gap-2">
      <h2>Storage :</h2>
      <div className="w-full flex justify-between items-center">
        {storages.map((item) => {
          return (
            <div onClick={() => handleClick({item})} key={item.id} className="w-30 h-25 flex flex-col items-center justify-center ">
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}


export default Storage;
