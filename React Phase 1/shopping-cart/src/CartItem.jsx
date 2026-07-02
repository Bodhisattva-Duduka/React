function CartItem({ id, image, name, price, quantity, products, setProducts }) {
    function handleDelete({ id }) {
        setProducts(prev => 
            prev
            .map((item) => item.id === id ? {...item, quantity : item.quantity - 1 } : item)
            .filter((item) => item.quantity >= 1)
        )
        console.log(products)
    }


    return (
        <>
            <div className="flex items-center gap-3 p-2 rounded-lg">
                <img className="w-12 h-12 object-contain rounded-md" src={image} />

                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-800 truncate">{name}</h3>
                    <h3 className="text-sm text-gray-500">₹ {price}</h3>
                </div>

                <div>
                    <h1>{quantity}</h1>
                </div>

                <button
                    onClick={() => handleDelete({ id, products })}
                    className="px-3 py-1 text-sm bg-red-500 hover:bg-red-400 text-white rounded transition-colors">
                    Remove
                </button>
            </div>
        </>
    )
}

export default CartItem 