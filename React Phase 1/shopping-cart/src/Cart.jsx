import CartItem from './CartItem'
function Cart({ products, setProducts }) {



    function totalCost(products){
        let sum = 0;
        for(const item of products){
            sum+=item.price
        }
        return sum
    }

    return (
        <>
            <div className="w-76 h-120 ">
                <div className="flex justify-between">
                    <h2>Your Cart</h2>
                    <div>
                        <img className="w-4 h-4 mr-3 bg-purple-600 p-3 rounded-xs" src="../public/assets/shopping-cart.png" />
                        <h2>{products.length}</h2>
                    </div>
                </div>
                <div className="flex flex-col">
                    {products.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            products={products}
                            setProducts={setProducts}
                        />
                    ))}
                </div>
                <div>
                    <div className="flex justify-between">
                        <h3>
                            Total
                        </h3>
                        <h3>
                            ₹ {totalCost(products)}
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Cart