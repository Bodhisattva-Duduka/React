function CartItem({ id, image, name, price, setProducts }) {
    function handleDelete({ id }) {
        setProducts(prevProducts => (prevProducts.filter(item => (item.id !== id))))
    }

    return (
        <>
            <div className="flex items-center gap-3 p-2 rounded-lg">
                <img className="w-12 h-12 object-contain rounded-md" src={image} />

                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-800 truncate">{name}</h3>
                    <h3 className="text-sm text-gray-500">₹ {price}</h3>
                </div>

                <button
                    onClick={() => handleDelete({ id })}
                    className="px-3 py-1 text-sm bg-red-500 hover:bg-red-400 text-white rounded transition-colors"
                >
                    Delete
                </button>
            </div>
        </>
    )
}

export default CartItem 