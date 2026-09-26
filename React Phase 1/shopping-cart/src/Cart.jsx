import CartItem from './CartItem';

function Cart({ products, setProducts, onCheckOut }) {
    function totalCost(products) {
        let sum = 0;
        for (const item of products) {
            sum += (item.price * item.quantity)
        }
        return sum
    }

    function handleCheckout(){
        if(products.length != 0){
            onCheckOut(true)
        }
        setProducts([])
        setTimeout(() => {
            onCheckOut(false);
          }, 2000);
    }

    return (
        <>
            <div className="w-full max-w-90 sm:w-90 h-fit bg-white rounded-xl shadow-sm p-4 flex flex-col gap-4">

                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Your Cart
                    </h2>
                    <div className="flex items-center gap-2">
                        <div className="bg-purple-600 p-2 rounded-md">
                            <img className="w-4 h-4" src="./assets/shopping-cart.png" alt="Cart" />
                        </div>
                        <h2 className="text-gray-700 font-medium">{products.length}</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    {products.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            products={products}
                            setProducts={setProducts}
                        />
                    ))}
                </div>

                <div className="border-t pt-3 mt-auto">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-700">Total</h3>
                        <h3 className="font-semibold text-purple-600">₹ {totalCost(products)}</h3>
                    </div>
                </div>

                <div className="flex">
                    <button className="w-full active:bg-purple-600 px-3 py-1 bg-purple-700 rounded text-white" 
                            onClick={handleCheckout}>
                            Checkout
                    </button>
                </div>

            </div>
        </>
    )
}

export default Cart