
function CartItem({id, image, name, price, products, setProducts}) {

    function handleDelete(id){
        setProducts(()=> products.filter(item => item.id != id))
    }

    return(
        <>
            <div className="w-72 h-10 flex justify-between items-center">
                <img className="w-16" src={image} />
                <div>
                    <h3 className="flex flex-col justify-center items-start text-xl" id={id}>{name}</h3>
                    <h3>{price}</h3>
                </div>
                <div>
                    <button  onClick={()=>handleDelete(id)} className="p-3 bg-red-500 rounded">Delete</button>
                </div>
            </div>
        </>
    )
}

export default CartItem