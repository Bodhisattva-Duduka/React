
function Product({ id, name, products, setProducts, price, image, quantity}) {

    function handleClick({ id, name, price, image}) {
        if(!products.some(item => item.id === id)){
            setProducts([...products, {id : id, name : name, price: price, image : image, quantity: 1}])
        } else {
            setProducts(products.map(product => 
                id === product.id ? {...product , quantity : product.quantity + 1} : product
            ))    
        }
    }

    return (
        <>
            <div className="flex flex-col items-center gap-3 w-50 rounded shadow shadow-gray-300 " >
                
                <div className="h-45">
                    <img src={image} />
                </div>
                <div className="flex flex-col items-start gap-2 ">
                    <h3 className=" text-xl font-medium ">{name}</h3>
                    <h3 className="text-lg font-medium text-purple-900">₹ {price}</h3>
                </div>
                <button onClick={() => handleClick({ id, name, price, image})}
                    className="hover:bg-purple-700 active:scale-98 h-10 w-45 flex gap-2 items-center mb-3 justify-center rounded bg-purple-900 ">
                    <img src="./assets/shopping-cart.png" className="w-4 h-4" alt="shopping-cart" />
                    <h3 className="text-white">Add to Cart</h3>
                </button>
            </div>
        </>
    )
}
export default Product

