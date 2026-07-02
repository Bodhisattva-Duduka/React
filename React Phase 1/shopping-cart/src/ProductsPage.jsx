import Product from './Product.jsx'
import data from './data/data.js'

function ProductsPage({products, setProducts}) {

    return (
        <>
            <div className="flex flex-wrap gap-2 max-w-250 mx-4">
                {data.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        products={products}
                        setProducts={setProducts}
                        quantity={item.quantity}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />))}
            </div>
            
        </>
    )
}

export default ProductsPage